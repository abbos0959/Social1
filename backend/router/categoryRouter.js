const express = require("express");
const router = express.Router();

const CategoryController = require("../controller/categoryController");
router
   .route("/categories")
   .post(CategoryController.AddCategory)
   .get(CategoryController.getCategory);

module.exports = router;
