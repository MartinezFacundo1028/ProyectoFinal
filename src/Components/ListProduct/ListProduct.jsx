import React from "react";
import Product from "../Product/Product";

const ListProduct = ({products}) => {
    return (
        <div className="container " style={{
            top: "3rem",
            display: "flex",
            justifyContent: "center",
            alignitems: "center",
            gap:"2rem",
            }}>
            {products.map( product =>
                <Product product={product} key={product.id}/>
            )}        
        </div>
    )
};

export default ListProduct;
