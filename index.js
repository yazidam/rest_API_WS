const express = require("express");
const app = express();
require("dotenv").config(0);

const connectDB = require("./config/connectDB");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
app.use(express.json());
connectDB();

app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
const port = 5000;

app.listen(port, (err) => {
  err
    ? console.log("errr", err)
    : console.log(`this server run on port ${port}`);
});
