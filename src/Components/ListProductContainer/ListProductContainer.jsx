import { useEffect, useState } from "react";
//import { getProducts, getProductsByCategory } from "../asymock";
import { useParams } from "react-router-dom";
import ListProduct from "../ListProduct/ListProduct";
import { db } from "../../Services/Firebase/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ListProductContainer = ({ greetings}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{
    //const asyncFunctions = categoryId ? getProductsByCategory : getProducts
    const collectionRef = categoryId ? query(collection(db, "Productos"), where("category", "==", categoryId)) : collection(db, "Productos")
    getDocs(collectionRef)
        .then((querySnapshot)=>{
            const products = querySnapshot.docs.map((doc)=>{
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })
    /*asyncFunctions(categoryId).then((res) =>{
        setProducts(res)
    })*/
    },[categoryId])

    
return (
    <section className="container my-4">
    <h2 className="productos-title text-center mb-5 heading">{greetings}</h2>
    <div className="row mb-3 mr-3">
        <ListProduct products={products}/>
    </div>
    </section>
);
};

export default ListProductContainer;