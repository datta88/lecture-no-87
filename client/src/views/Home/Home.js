import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Home.css';

function Home() {
    const [product, setProduct] = useState([]);
   // const { _id, name, description, price, brand } = product

    const loadProduct = async () => {
        const response = await axios.get("/products")
        setProduct(response?.data?.data);
    }

    useEffect(() => {
        loadProduct();
    }, [])

    const productDelete = async (_id)=>{
        const response = await axios.delete(`/product/${_id}`);
        alert(response?.data?.message)
        loadProduct()
    }

    return (
        <>
            <div className="home-container">{
                product?.map((product, i) => {
                    const { _id, name, description, price, brand,image } = product;
                    return (
                        <div key={i} className="product-home-container">
                            <img src={image} className="img-Product" />
                            <h1 className="font-heading-home"><span className="bold-header">Name</span> :{name}</h1>
                            <p className="font-paragraph"><span className="bold-header">Description</span> :{description}</p>
                            <p className="font-paragraph"><span className="bold-header">Price</span> :{price}</p>
                            <p className="font-paragraph"><span className="bold-header">Brand</span> :{brand}</p>
                           <div className="button-delete-details">
                           <button onClick={() => {window.open(`/productdeatail/${_id}`, `_blank`)}} className="btn-more-details" > More Details</button>
                            <button onClick={()=>{productDelete(_id)}} className="btn-delete-product">Delete</button>
                            <a href={`/update/${_id}`} target="blank" className="btn-edit-product">Edit</a>
                            </div>
                            
                        </div>
                    )
                })
            }</div>
        </>
    )
}
export default Home

