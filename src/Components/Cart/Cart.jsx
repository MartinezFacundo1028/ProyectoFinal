import { Link } from "react-router-dom";
import { useCart } from "../../Hooks/UseCart";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";

const Cart = () =>{
    const {totalQuantity, cart, totalSpend, clearCart} = useCart();
    
    if(totalQuantity===0){
        return(
            <div className="empty-cart-container">
                <h3 className="h3-cart">No hay productos en el carrito</h3>
                <Link className="btn btn-primary" to="/">Volver a inicio</Link>
            </div>
        )
    }
    
    return(
        <div className="container mt-4">
            <div id="div-detail" className="cart mx-auto p-2">
                <div className="row no-gutters">
                    <div className="col-12">
                        {cart.map(p => (
                            <div className="cart-item" key={p.id}>
                                <CartItem product={p} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="cart-summary">
                    <h3>Total: ${totalSpend}</h3>
                    <button className="btn btn-primary" onClick={() => clearCart()}>Limpiar carrito</button>
                    <Link className="btn btn-primary" to="/checkout">Checkout</Link>
                </div>
            </div>
        </div>
        
    )
}

export default Cart;