import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../../views/AddProduct/AddProduct";


function ProductDetail(){
    const [product , setProduct] = useState({})
    const {_id} = useParams()
    const {name, description,price,brand} = product;
    const loadData = async () =>{
       

        const res = await axios.get(`/product/${_id}`)
        setProduct(res?.data?.data);

    }

    useEffect(()=>{
        loadData()
    },[])

   console.log(_id)
    return(
        <>
          <h1>{_id} </h1>
          <p>{name}</p>
          <p>{description}</p>
          <p>{price}</p>
          <p>{brand}</p>
        </>
    )
}
export default ProductDetail;