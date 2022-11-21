const mongoose = require("mongoose");

const productModel = new mongoose.Schema(
   {
      title: {
         type: String,
         required: [true, "siz product kiritishingiz shart"],
         trim: true,
         unique: [true, "bunday product avvaldan mavjud"],
      },
      description: {
         type: String,
         required: [true, "siz product kiritishingiz shart"],
      },

      price: {
         type: Number,
         required: [true, "siz price kiritishingiz shart"],
      },
      discount: {
         type: Number,
         default: 0,
      },
      stock: {
         type: Number,
         default: 1,
         required: [true, "iltimos product aksiyasini kiriting"],
      },

      images: [
         {
            id: { type: String },
            url: { type: String },
         },
      ],
      category: {
         type: mongoose.Types.ObjectId,
         ref: "categories",
         required: [true, "siz categoriyani tanlashingiz shart"],
      },
      brand: {
         type: mongoose.Types.ObjectId,
         ref: "brands",
         required: [true, "siz brand tanlashingiz shart"],
      },
      store: {
         type: mongoose.Types.ObjectId,
         ref: "stories",
         required: [true, "siz store tanlashingiz shart"],
      },

      localshipment: {
         type: String,
         required: [true, "localship tanlashingiz shart"],
         default: "standart",
         enum: ["free", "standart", "custom"],
      },
      customlocalship: {
         type: Number,
      },

      intership: {
         type: String,
         required: [true, "intership tanlashingiz shart"],
         default: "standart",
         enum: ["free", "standart", "custom"],
      },
      customintership: { type: Number },
      weight: {
         type: Number,
         default: 1,
      },
      ratings: {
         type: Number,
         default: 0,
      },
      numofReviews: { type: Number, default: 0 },

      reviews: [
         {
            user: {
               type: mongoose.Types.ObjectId,
               ref: "users",
               required: true,
            },
         },
      ],
      addedBy: [
         {
            user: {
               type: mongoose.Types.ObjectId,
               ref: "users",
               required: true,
            },
         },
      ],
      updatedBy: [
         {
            user: {
               type: mongoose.Types.ObjectId,
               ref: "users",
               required: true,
            },
         },
      ],
      discontinued: { Boolean, default: false },
   },
   { timestamps: true }
);

module.exports = mongoose.model("products", productModel);
