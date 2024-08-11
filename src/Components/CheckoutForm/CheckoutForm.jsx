import { useState } from "react";
import "./CheckoutForm.css";


const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    
    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name: event.target.name.value,
            phone: event.target.phone.value, 
            email: event.target.email.value
        }

        onConfirm(userData)
    }

    return (
        <div className="container">
            <form onSubmit={handleConfirm} className="Form">
                <div>
                    <label className="Label" style={{display: "grid"}}>
                        Nombre
                        <input className="Input" name="name" type="text" value={name} onChange={({target}) => setName(target.value)} required/>
                    </label>
                    <label className="Label" style={{display: "grid"}}>
                        Telefono
                        <input className="Input" name="phone" type="text" value={phone} onChange={({target}) => setPhone(target.value)} required/>
                    </label>
                    <label className="Label" style={{display: "grid"}}>
                        Email
                        <input className="Input" name="email" type="text" value={email} onChange={({target}) => setEmail(target.value)} required/>
                    </label>
                </div>
                <div className="d-flex justify-content-center p-3 ">
                    <button className="btn btn-primary" type="submit" onClick={onConfirm}>
                        Generar Orden
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;