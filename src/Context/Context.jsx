import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    

    const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
    };

    const addItem = (productoToAdd) => {
        if(!isInCart(productoToAdd.id)){
            setCart(p => [...p, productoToAdd])
        }else {
            console.error("El producto ya esta en el carrito")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach( prod => {
            accu += prod.quantity
        })
        return accu;
    }

    const getTotalSpend = () => {
        let accu = 0;
        cart.forEach( prod => {
            accu += prod.total
        })
        return accu;
    }

    const totalSpend = getTotalSpend()
    const totalQuantity = getTotalQuantity()


    const obj = { cart, isInCart, addItem, totalQuantity, removeItem, clearCart, totalSpend };
    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}