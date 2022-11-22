const express = require("express");
const router = express.Router();

const CategoryController = require("../controller/categoryController");
router
   .route("/categories")
   .post(CategoryController.AddCategory)
   .get(CategoryController.getCategory);
router
   .route("/categories/:id")
   .patch(CategoryController.UpdateCategory)
   .delete(CategoryController.DeleteCategory)
   .get(CategoryController.getCategoryById);

module.exports = router;
