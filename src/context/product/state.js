import { useState } from "react";
import ProductContext from "./context";

const ProductState = (props) => {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})

    const fetchProduct = async (id) => {
        const response = await fetch(`http://localhost:5000/api/products/getProduct/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const json = await response.json();
        setProduct(json)
        setProduct(json)
    }

    const fetchProducts = async () => {
        const response = await fetch(`http://localhost:5000/api/products/getProducts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const json = await response.json();
        setProducts(json)
    }

    const addProduct = async (product) => {
        const response = await fetch(`http://localhost:5000/api/products/addProduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...product })
        });
        const pro = await response.json();
        setProducts(products.concat(pro))
    }

    const updateProduct = async (product) => {
        console.log(product)
        const response = await fetch(`http://localhost:5000/api/products/updateProduct/${product?._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        });
        const pro = await response.json();
        console.log(pro)
        // //Logic to edit in client
        await fetchProducts()
    }

    const deleteProduct = async (id) => {
        const response = await fetch(`http://localhost:5000/api/products/updateProduct/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const json = await response.json();

        const newPro = products.filter((product) => { return product._id !== id })
        setProducts(newPro)
    }

    return (
        <ProductContext.Provider value={{ products, product, fetchProduct, fetchProducts, addProduct, updateProduct, deleteProduct }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;