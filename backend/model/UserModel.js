const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, "ism kiritishingiz majburiy"],
         trim: true,
      },

      email: {
         type: String,
         unique: true,
         required: true,
         validate: [validator.isEmail, "Iltimos to'g'ri email kiriting"],
      },
      password: {
         type: String,
         unique: true,
         required: [true, "siz parol kiritishingiz shart"],
      },

      avatar: {
         id: { type: String },
         url: {
            type: String,
            default:
               "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png",
         },
      },

      roles: {
         type: [String],
         default: "admin",
         required: true,
         enum: ["admin", "seller", "user"],
      },

      store: {
         type: mongoose.Types.ObjectId,
         ref: "stories",
      },
      updateBy: {
         user: {
            type: mongoose.Types.ObjectId,
            ref: "users",
         },
      },

      refreshToken: [String],
      blocked: {
         type: Boolean,
         default: false,
      },
   },

   { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
