const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const errorController = require("../controller/errorController");
const userRouter = require("../router/userRouter");
const CategoryRouter = require("../router/categoryRouter");
const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use("/api/v1", userRouter);
app.use("/api/v1", CategoryRouter);

app.use(errorController);
module.exports = app;
