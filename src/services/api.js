// Define the functions for each CRUDS 
// operation (create, read, update, delete, search) 
// using the fetch API in JavaScript

const BASE_URL = "https://api.example.com/products";

// Function to create a new product 

export const createProduct = async (productData) => {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        });

        if (!response.ok) {
            throw new Error("Faild to create product.");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Function to get product by ID

export const getProduct = async (productId) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${productId}`);

        if (!response.ok) {
            throw new Error("Faild to get product.");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

//Function to update a product by ID

export const updateProduct = async (productId, updatedProductData) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${productId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProductData),
        });

        if (!response.ok) {
            throw new Error("Failed to update product");
        }

        const updatedProduct = await response.json();
        return updatedProduct;
    } catch (error) {
        console.error(error);
        throw new Error("Faild to update product");
    }
};

//Function to delete a product

export const deleteProduct = async (productId) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${productId}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Failed to delete product");
        }

        const deleteProductId = await response.json();
        return deleteProductId;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to delete product");
    }
};

//Fuction to get products with search query

export const getProducts = async (searchQuery) => {
    try {
        const url = searchQuery ? `${BASE_URL}/products?search=${encodeURIComponent(searchQuery)}` : `${BASE_URL}/products`;
        const response = await ferch(url);
        if(!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();
        return products;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch products");
    }
};