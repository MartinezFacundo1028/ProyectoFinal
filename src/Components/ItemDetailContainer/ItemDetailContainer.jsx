import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Services/Firebase/FirebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { productId } = useParams()
    
    useEffect(() => {
        getDoc(doc(db, "Productos", productId))
            .then((querySnapshot) => {
                const product = {id: querySnapshot.id, ...querySnapshot.data()}
                setProduct(product);
            })
            .catch((err) => console.log(err));
    }, [productId]);

    return (
        <>
            {product ? (
                <ItemDetail product={product} />
            ) : (
                <div className="loading-container">
                    <p className="loading-text">Loading...</p>
                    <div className="spinner"></div>
                </div>
            )}
        </>
    );
}

export default ItemDetailContainer