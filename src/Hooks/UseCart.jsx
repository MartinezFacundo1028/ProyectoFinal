import {useContext} from 'react'
import { CartContext } from '../Context/Context';

export const useCart = () => {
    return useContext(CartContext);
};