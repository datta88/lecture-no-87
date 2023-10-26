import React, { useState } from "react";
import './AddProduct.css'
import axios from "axios";

function Product() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [image,setImage] = useState('');

    const addProduct = async () => {
        if (!name || !description || !price || !brand || !image) {
            alert('please fill all details');
            return
        }
        const product = {
            image,
            name,
            description,
            price,
            brand
        }

        const response = await axios.post('/product', product)
        alert(response.data.message)

        setName('')
        setDescription('')
        setPrice('')
        setBrand('')
        setImage('')

    }
    return (
        <>
            <div className="add-card-container">
                <h1>Product</h1>
                <div className="input-box-contener">
                    <form>
                        <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} placeholder="Name" className="input-box" />
                        <input type="text" onChange={(e) => { setDescription(e.target.value) }} value={description} placeholder="Description" className="input-box" />
                        <input type="text" onChange={(e) => { setPrice(e.target.value) }} value={price} placeholder="Price" className="input-box" />
                        <input type="text" onChange={(e) => { setBrand(e.target.value) }} value={brand} placeholder="brand" className="input-box" />
                        <input type="text" onChange={(e) => { setImage(e.target.value) }} value={image} placeholder="Image URL" className="input-box" />
                        <button type="button" onClick={addProduct} className="btn-add" >Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Product