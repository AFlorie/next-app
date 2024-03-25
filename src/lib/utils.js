import mongoose from "mongoose";

const connection = {};

const uri =
  "mongodb+srv://fleeflo:florie*1@cluster0.hztjq9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    // const db = await mongoose.connect(process.env.MONGO);
    const db = await mongoose.connect(uri);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
