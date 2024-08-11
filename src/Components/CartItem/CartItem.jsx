import { useState } from "react";
import "./CartItem.css";
import { useCart } from "../../Hooks/UseCart";


const CartItem = ({product}) => {
    const { removeItem } = useCart();
    const [count, setCount] = useState(product.quantity);

    const increment = () => {
        if (count < product.stock) {
            product.quantity++;
            product.total= (product.quantity*product.price);
            setCount(prev => prev + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            product.quantity--;
            product.total= (product.quantity*product.price);
            setCount(prev => prev - 1);
        }
    };

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="cart-card">
                        <img src={product.img} className="cart-card-img" alt="Producto"/>
                        <div className="cart-card-body" style={{ position: "relative" }}>
                            <h2 className="cart-card-title" style={{ textAlign: "left", fontSize: "1.5rem", marginBottom: "100px" }}>
                                {product.name}
                            </h2>
                            <p className="cart-card-text" style={{ fontSize: "1rem", position: "absolute", top: "50%", left: "0", transform: "translateY(-50%)" }}>
                                Precio: {product.price}
                            </p>
                            <div className="input-group" style={{ position: "absolute", top: "50%", left: "120px", transform: "translateY(-50%)", maxWidth: "200px" }}>
                                <button className="btn btn-outline-secondary" style={{ maxWidth: "30px", maxHeight: "30px", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={decrement}>-</button>
                                <input type="text" className="form-control text-center" style={{ maxWidth: "50px", maxHeight: "30px" }} value={count} readOnly />
                                <button className="btn btn-outline-secondary" style={{ maxWidth: "30px", maxHeight: "30px", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={increment}>+</button>
                            </div>
                            <button className="added btn btn-primary" style={{ position: "absolute", top: "50%", right: "0", maxWidth: "75px", maxHeight: "30px", display: "flex", justifyContent: "center", alignItems: "center", transform: "translateY(-50%)"}} onClick={() => removeItem(product.id)}>
                                Eliminar
                            </button>
                            <p className="cart-card-text" style={{ fontSize: "1.25rem", position: "absolute", top: "50%", left: "320px", transform: "translateX(-50%) translateY(-50%)" }}>
                                Total: {product.total}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartItem;