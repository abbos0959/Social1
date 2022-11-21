const mongoose = require("mongoose");

const orderModel = new mongoose.Schema(
   {
      shippingInfo: {
         adddress: {
            type: String,
            required: true,
         },
         city: {
            type: String,
            required: true,
         },
         country: {
            type: String,
            required: true,
         },
         zipCode: {
            type: Number,
            required: true,
         },
         phone: {
            type: Number,
            required: true,
         },
      },
      orderItems: [
         {
            price: {
               type: Number,
               required: true,
            },
            quantity: {
               type: Number,
               required: true,
            },
            product: {
               type: mongoose.Types.ObjectId,
               ref: "products",
               required: true,
            },
         },
      ],
      user: {
         type: mongoose.Types.ObjectId,
         ref: "users",
      },
      paymentInfo: {
         id: {
            type: String,
            required: true,
         },
         status: {
            type: String,
            required: true,
         },
      },
      paidAt: {
         type: Date,
         required: true,
         default: Date.now(),
      },
      itemsPrice: {
         type: Number,
         required: true,
         default: 0,
      },
      taxPrice: {
         type: Number,
         required: true,
         default: 0,
      },
      shippingPrice: {
         type: Number,
         required: true,
         default: 0,
      },
      totalPrice: {
         type: Number,
         required: true,
         default: 0,
      },
      orderStatus: {
         type: String,
         required: true,
         enum: ["Processing", "Shipped", "Delivered"],
         default: "Processing",
      },
      deliveredAt: Date,
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("orders", orderModel);
