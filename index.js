import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://waytonine:admin@cluster0.ebwrhrh.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB is OK"))
  .catch((err) => console.log("DB error is", err));

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.post("/auth/login", (req, res) => {
  const secretInfo = jwt.sign(
    {
      email: req.body.email,
      password: req.body.password,
    },
    "123"
  );
  res.json({
    success: true,
    info: secretInfo,
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server is OK");
});
