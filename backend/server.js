const app = require("./middleware/app");
const dotenv = require("dotenv");
const colors = require("colors");
const DB = require("./connect/DB");
dotenv.config({});
DB();
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`server ishladi ${process.env.PORT}`.bgBlue.bold.underline));
