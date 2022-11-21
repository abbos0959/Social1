const mongoose = require("mongoose");

const DB = async () => {
   try {
      await mongoose.connect(process.env.URL);
      console.log("mongodb ulandiiiii".bgGreen.bold);
   } catch (error) {
      console.log("mongodb ulanmadi".bgRed.bold, error);
   }
};

module.exports = DB;
