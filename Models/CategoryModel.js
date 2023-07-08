import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    slug:{
        type:String,
        lowercase:true
    }
})

const CategoryModel =  mongoose.model('Category' , CategorySchema)

if(CategoryModel){
    console.log("category Model created")
}
export default CategoryModel