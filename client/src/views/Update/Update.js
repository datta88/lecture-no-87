
import React, { useEffect, useState } from "react";
import './Update.css'
import axios from "axios";
import { useParams } from "react-router-dom";

function Update() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [image, setImage] = useState('');

    const {id} = useParams();

    const loadProduc = async () => {
        const response = await axios.get(`/product/${id}`)

        const {name,description,price,brand,image} = response?.data?.data;
        
            setName(name)
            setDescription(description)
            setPrice(price)
            setBrand(brand)
            setImage(image)
        }

    useEffect(() =>{
        loadProduc();
    },[])

    const updateProduct = async () => {
      const updateProduct = {
        name,
        description,
        price,
        brand,
        image
      }
      const response = await axios.put(`/product/${id}`,updateProduct)
      alert(response?.data?.message)
    }
    return (
        <>
            <div className="update-card-container">
                <h1>Update Product</h1>
                <div className="input-box-contener-update">
                    <form>
                        <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} placeholder="Name" className="input-box-update" />
                        <input type="text" onChange={(e) => { setDescription(e.target.value) }} value={description} placeholder="Description" className="input-box-update"/>
                        <input type="text" onChange={(e) => { setPrice(e.target.value) }} value={price} placeholder="Price" className="input-box-update" />
                        <input type="text" onChange={(e) => { setBrand(e.target.value) }} value={brand} placeholder="brand" className="input-box-update" />
                        <input type="text" onChange={(e) => { setImage(e.target.value) }} value={image} placeholder="Image URL" className="input-box-update" />
                        <button type="button" onClick={updateProduct} className="btn-update" >update</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Update