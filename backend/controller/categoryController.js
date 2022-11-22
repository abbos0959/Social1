const catchErrorAsync = require("../utils/catchUtil");
const AppError = require("../utils/appError");
const CategoryModel = require("../model/categoryModel");

const AddCategory = catchErrorAsync(async (req, res, next) => {
   const category = await CategoryModel.create(req.body);

   res.status(201).json({
      success: true,
      category,
   });
});
const getCategory = catchErrorAsync(async (req, res, next) => {
   const category = await CategoryModel.find();

   res.status(200).json({
      success: true,
      category,
   });
});

const getCategoryById = catchErrorAsync(async (req, res, next) => {
   const category = await CategoryModel.findById(req.params.id);
   if (!category) {
      return next(new AppError("bunday idli category mavjud emas", 404));
   }

   res.status(200).json({
      success: true,
      category,
   });
});

const UpdateCategory = catchErrorAsync(async (req, res, next) => {
   const category = await CategoryModel.findByIdAndUpdate(req.params.id, req.body);
   if (!category) {
      return next(new AppError("category yangilanmadi"));
   }
   res.status(200).json({
      success: true,
      category,
   });
});

const DeleteCategory = catchErrorAsync(async (req, res, next) => {
   const category = await CategoryModel.findByIdAndDelete(req.params.id);
   if (!category) {
      return next(new AppError("category O'chirilmadi"));
   }
   res.status(200).json({
      success: true,
      message: "category o'chirildi",
      category,
   });
});
module.exports = { AddCategory, getCategory, UpdateCategory, DeleteCategory, getCategoryById };
