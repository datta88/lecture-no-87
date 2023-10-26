import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import Product from "./src/model/Product.js";

const app = express();

app.use(express.json());

const PORT = 5000;

const connectMongoDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if (conn) {
        console.log('MongiDB connected SuccessFully');
    }
}
connectMongoDB();

app.get('/products', async (req, res) => {
    const productAll = await Product.find();
    res.json({
        success: true,
        data: productAll,
        message: 'SuccessFully fetched all student',
    })
});

app.post('/product', async (req, res) => {
    const {image, name, description, price, brand } = req.body;

    if (!image) {
        return res.json({
            success: false,
            message: 'image is required',
        })
    }

    if (!name) {
        return res.json({
            success: false,
            message: 'Name is required',
        })
    }
    if (!description) {
        return res.json({
            success: false,
            message: 'description is required',
        })
    }
    if (!price) {
        return res.json({
            success: false,
            message: 'price is required',
        })
    }
    if (!brand) {
        return res.json({
            success: false,
            message: 'brand is required',
        })
    }

    const pro = new Product({
        image:image,
        name: name,
        description: description,
        price: price,
        brand: brand
    });

    const saveProduct = await pro.save();
    res.json({
        success: true,
        data: saveProduct,
        message: 'success full added product',
    });
});

app.get('/product/:_id', async (req, res) => {
    const { _id } = req.params;
    const product = await Product.findOne({ _id: _id });
    res.json({
        success: true,
        data: product,
        message: 'product fetched success full '
    })
});

app.delete('/product/:_id', async (req, res) => {
    const { _id } = req.params;
    await Product.deleteOne({ _id: _id })

    res.json({
        success: true,
        data:{},
        message: 'delete successfull',
    })
});

app.put('/product/:_id', async (req, res) => {
    const { _id } = req.params;

    const {image, name, description, price, brand } = req.body;

    if (!image) {
        return res.json({
            success: false,
            message: 'image is required',
        })
    }

    if (!name) {
        return res.json({
            success: false,
            message: 'Name is required',
        })
    }
    if (!description) {
        return res.json({
            success: false,
            message: 'description is required',
        })
    }
    if (!price) {
        return res.json({
            success: false,
            message: 'price is required',
        })
    }
    if (!brand) {
        return res.json({
            success: false,
            message: 'brand is required',
        })
    }

    await Product.updateOne({ _id: _id }, {
        $set: {
            image:image,
            name :name,
            description:description,
            price:price,
            brand:brand,
        }
    })

    const productUpdate = await Product.findOne({ _id: _id });

    res.json({
        success: true,
        data: productUpdate,
        message: 'update product successfully one',
    })
});

app.patch('/product/:_id', async(req,res)=>{
    const {_id}=req.params ;
    const {image,name, description, price, brand } = req.body;

    const products = await Product.findOne({_id:_id})
    if(image){
        prompts.image=image;
    }
    if(name){
        products.name=name;
    }
    if(description){
        products.description=description;
    }
    if(price){
        products.price=price;
    }
    if(brand){
        products.brand=brand;
    }

    const updateProduct = await products.save();

    res.json({
        success : true,
        data : updateProduct,
        message : 'update product successfully.'
    })
})

app.listen(PORT, () => {
    console.log(`server is running ${PORT} .`);
})
