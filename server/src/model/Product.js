import { Schema,model } from "mongoose";

const productSchema = new Schema({
    image:String,
    name : String,
    description : String,
    price :Number,
    brand : String,
})
const Product = model ('Product',productSchema);
export default Product