import { useCart } from "../../Hooks/UseCart";
import { useNotification } from "../../Hooks/UseNotification";
import ItemAdded from "../ItemAdded/ItemAdded";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";


const ItemDetail = ({ product }) => {
    
    const {setNotification} = useNotification();
    const {addItem, isInCart} = useCart();

    const handleAdd = (count) => {
    
        const produtObj = {
        id:product.id, name:product.nombre, price:product.precio, img:product.imagen, stock:product.stock, quantity: count, total: count*product.precio
        } 
        addItem(produtObj)
        setNotification('success', `Se agregaron ${count} de ${produtObj.name}`);
    }

    return (
        <div id="div-detail" className="mx-auto my-5 p-2" style={{ border: '1px solid #ced4da', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxHeight: '900px', maxWidth: '1300px' }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={product.imagen} className="card-img" alt={product.nombre} style={{ objectFit: 'cover', height: '100%' }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.nombre}</h5>
                        <p className="card-text">
                            <strong>Categoría:</strong> {product.category}
                        </p>
                        <p className="card-text">{product.description}</p>
                        <div className="card-text-container">
                            <p className="card-text">Cantidad de articulos que desea comprar:</p>
                            <div className="card-text">
                                {
                                    isInCart(product.id) ? (
                                        <ItemAdded itemId={product.id}/>
                                    ) : (
                                        <ItemCount initial={1} stock={product.stock} onAdd={handleAdd} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;


