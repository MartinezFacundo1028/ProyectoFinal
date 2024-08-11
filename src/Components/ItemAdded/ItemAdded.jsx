import { Link } from "react-router-dom";
import { useCart } from "../../Hooks/UseCart";
import "./ItemAdded.css";

const ItemAdded = ({itemId}) =>{

    const{removeItem} = useCart();

    return(
        <div>
            <Link to="/cart" className="added btn btn-primary">Terminar compra</Link>
            <button className="added btn btn-primary" onClick={() => removeItem(itemId)}>Eliminar producto del carrito</button>
        </div>
    )
}

export default ItemAdded;