const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser"); 

const AuthRouter = require("./routes/Auth.routes");
const UserRouter = require("./routes/User.routes"); 
const ProductRouter = require("./routes/Product.routes");
dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log("Error connecting to db", err));
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});
app.use("/auth", AuthRouter);
app.use("/user", UserRouter);
app.use("/product", ProductRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
