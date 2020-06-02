import mongoose from "mongoose";

import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  try {
    await mongoose.connect("mongodb://tickets-mongo-srv:27017/tickets", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("Aum Namah Sivaya DB Connected");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Aum Namah Sivaya 3000");
  });
};

start();
