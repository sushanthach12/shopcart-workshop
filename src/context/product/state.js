import { useState } from "react";
import ProductContext from "./context";

const ProductState = (props) => {
    const [products, setProducts] = useState([])

    const fetchProduct = async (id) => {
        const response = await fetch(`http://localhost:5000/api/products/getProduct/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const json = await response.json();
        return json
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
        const response = await fetch(`http://localhost:5000/api/products/updateProduct/${product?.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...product })
        });
        const pro = await response.json();
        
        //Logic to edit in client
        
        for (let index = 0; index < pro.length; index++) {
            const element = pro[index];
            if (element._id === product?.id) {
                pro[index].title = product?.title;
                pro[index].description = product?.desc;
                pro[index].brand = product?.brand;
                pro[index].price = product?.price;
                break;
            }
        }

        setProducts(products.concat(pro))
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
        <ProductContext.Provider value={{ products, fetchProduct, fetchProducts, addProduct, updateProduct, deleteProduct }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;