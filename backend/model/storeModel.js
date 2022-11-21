const mongoose = require("mongoose");
const validator = require("validator");
const storeModel = new mongoose.Schema(
   {
      title: {
         type: String,
         required: [true, "siz do'kon kiritishingiz shart"],
         trim: true,
         unique: true,
      },
      description: {
         type: String,
         required: [true, "siz do'kon kiritishingiz shart"],
      },
      location: {
         address: {
            type: String,
            required: [true, "siz do'kon addressini kiritishingiz shart"],
         },
         city: {
            type: String,
            required: [true, "siz do'kon citysini kiritishingiz shart"],
         },
         zipCode: {
            type: Number,
         },
         state: {
            type: String,
            required: [true, "siz do'kon stateini kiritishingiz shart"],
         },
         country: {
            type: String,
            required: [true, "siz do'kon countrysini kiritishingiz shart"],
         },
      },

      email: {
         type: String,
         required: [true, "siz email kiritishingiz shart"],
         unique: true,
         validate: [validator.isEmail, "to'g'ri email kiriting"],
      },
      phone: {
         type: String,
         required: [true, "siz telefon raqam kiritishingiz shart"],
      },
      logo: {
         url: { type: String },
      },

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

module.exports = mongoose.model("stories", storeModel);
