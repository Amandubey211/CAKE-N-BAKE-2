import CategoryModel from "../Models/CategoryModel.js";

import slugify from "slugify";

// create category
export const CreateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "name is required" });
    }
    const existingCategory = await CategoryModel.findOne({ name });
    if (existingCategory) {
      return res
        .status(200)
        .send({
          success: false,
          message: " This category already exist,please try different Name..",
        });
    }
    const category = await new CategoryModel({
      name,
      slug: slugify(name),
    }).save();

    res
      .status(200)
      .send({ success: true, message: "New category created", category });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, error, message: "Error occured in category" });
  }
};

//update category
export const UpdateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category =  await CategoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res
      .status(200)
      .send({
        success: true,
        message: "Category updated successfully",
        category,
      });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .send({
        message: "Error while updating category",
        success: false,
       error
      });
  }
};

export const getCategoryController = async (req,res)=>{
    try{
        const categories = await CategoryModel.find()
        res.status(200).send({message:"All categories fetched successfully" ,success:true, categories})
        
    }catch(error){
        console.log(error)
        res.status(500).send({success:false , message:"Cannot get the categories", error})
    }
}

export const singleCategoryController = async (req,res)=>{
    try{
        const  category = await CategoryModel.findOne({slug:req.params.slug})
        res.status(200).send({success:true,message:"Single category fetched successful",category})

    }catch(error){
        console.log(error)
        res.status(500).send({success:false , message:"Cannot get this category", errmessage:error.message})
    }
}

export const deleteCategoryController = async (req,res)=>{
    try{

        const {id} =  req.params;
        const category = await CategoryModel.findByIdAndDelete(id)
        res.status(200).send({success:true,message:"Category deleted successfully", category})

    }catch(error){
       
            console.log(error)
            res.status(500).send({success:false , message:"Cannot delet  category", errmessage:error.message})
    }
}
