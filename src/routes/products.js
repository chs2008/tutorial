import React from 'react';
import '../styles/products.css';

const Products = () => (
    <>
        <h1>Coffee Roasts</h1>
        <div className="product-container">
            <div className="product">
                <h2>Product 1</h2>
                <img className="hero" alt="coffee1" src="../images/coffee-1.jpg" />
                <p>Product 1 - Dark Roast</p>
            </div>
            <div className="product">
                <h2>Product 2</h2>
                <img className="hero" alt="coffee2" src="../images/coffee-2.jpg" />
                <p>Product 2 - Light Roast</p>
            </div>
            <div className="product">
                <h2>Product 3</h2>
                <img className="hero" alt="coffee2" src="../images/coffee-3.jpg" />
                <p>Product 3 - City Roast</p>
            </div>
        </div>
    </>
);

export default Products;