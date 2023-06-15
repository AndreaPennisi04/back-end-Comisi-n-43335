import express from "express";
import userRouter from "./routes/users.router.js";
import mongoose from "mongoose"; // importamos mongoose tambien a nuestro archivo principal

const app = express();
const server = app.listen(8080, () => console.log("Listening on Port: 8080"));

mongoose.connect("mongodb+srv://", (error) => {
  //   useUnifiedTopology: true;
  //   useNewUrlParser: true;
  if (error) {
    console.log("Cannot connect to database: " + error);
    process.exit();
  }
});

app.use("/api/users", userRouter);
