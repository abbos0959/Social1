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

module.exports = { AddCategory, getCategory };
