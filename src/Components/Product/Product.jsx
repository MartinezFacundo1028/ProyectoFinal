import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";

const Product = ({ product }) => {
    return (
        <div className="card" style={{ width: '18rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '15px', border: "2px solid greenyellow",boxShadow:" 0 4px 8px rgba(0, 0, 0, 0.1)",bordeRadius: "8px", }}>
            <img src={product.imagen} className="card-img-top" alt={product.nombre} style={{ width: '100%', height: '10rem', objectFit: 'cover' }} />
            <div className="card-body" style={{ flexGrow: 1 }}>
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">Price: ${product.precio}</p>
                <p className="card-text">Stock: {product.stock}</p>
                <Link to={`/detail/${product.id}`} className="btn btn-secondary">Ver detalles</Link>
            </div>
        </div>
    );
};

export default Product;
