import mongoose from "mongoose";

// import dotenv from 'dotenv'
// dotenv.config(); // to use environment variables from .env file

function connect() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("connected to MONGODB");
    })
    .catch(err => {
      console.log(err);
    });
}

export default connect;