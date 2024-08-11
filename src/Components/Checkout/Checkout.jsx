import { useContext, useState } from "react";
import { CartContext } from "../../Context/Context";
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from "firebase/firestore";
import { db } from "../../Services/Firebase/FirebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";



const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")

    const { cart, totalSpend, clearCart, totalQuantity} = useContext(CartContext)

    const createOrder = async ({ name, phone, email}) => {
        setLoading(true)

        try {
            if (!name || !phone || !email) {
                throw new Error("Todos los campos son obligatorios.");
            }

            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: totalSpend,
                Cantidad: totalQuantity,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            if (ids.length === 0) {
                console.log("No hay productos en el carrito.");
                setLoading(false);
                return;
            }

            const productsRef = collection(db, "Productos")
            const orderRef = collection(db, "Orders")

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids))) 

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.log("hay productos fuera de stock")
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h4  className="text-center text-greenyellow p-4" 
                    style={{background: "greenyellow", 
                            maxwidth: "fit-content",
                            maxheight: "fit-content",
                            justifycontent: "center",
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translateX(-50%) translateY(-50%)"
                        }}>Se está generando la orden...</h4>;
    }

    if(orderId) {
        return <h4 
                className="text-center text-succes p-4" 
                style={{background: "greenyellow", 
                        maxwidth: "fit-content",
                        maxheight: "fit-content",
                        justifycontent: "center",
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translateX(-50%) translateY(-50%)"
                    }}>El id de su orden es: {orderId}</h4>;
    }

    return (
        
            <div className="container mt-4" style={{background: "greenyellow", 
                maxWidth: "fit-content",
                maxHeight: "fit-content",
                justifyContent: "center",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translateX(-50%) translateY(-50%)",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <h1>Checkout</h1>
                <CheckoutForm onConfirm={createOrder} />
            </div>
        
    )
}

export default Checkout;
