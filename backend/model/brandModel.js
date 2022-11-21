const mongoose = require("mongoose");

const brandModel = new mongoose.Schema(
   {
      title: {
         type: String,
         required: [true, "siz brand kiritishingiz shart"],
         trim: true,
         unique: [true, "bunday brand avvaldan mavjud"],
      },
      description: {
         type: String,
         required: [true, "siz description kiritishingiz shart"],
      },
      addedBy: {
         type: mongoose.Types.ObjectId,
         ref: "users",
         required: true,
      },
      updatedBy: {
         type: mongoose.Types.ObjectId,
         ref: "users",
         required: true,
      },
      discontinued: { Boolean, default: false },
   },
   { timestamps: true }
);

module.exports = mongoose.model("brands", brandModel);
