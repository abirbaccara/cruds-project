import React, { useState, useState } from "react";
import { getProducts } from "../services/api";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const productsData = await getProducts();
            setProducts(productsData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <di>
            <h1>Product List</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <button onClick={() => handleEditProduct(product.id)}>Edit</button>
                    <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                </div>
            ))}
        </di>
    );
};

export default ProductList;
