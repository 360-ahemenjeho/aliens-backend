import mongoose from "mongoose";

const uri =
  "mongodb+srv://c8tor:Password123@sandbox.vbnnia8.mongodb.net/?retryWrites=true&w=majority&appName=Sandbox";
const options = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

export async function connectDB() {
  try {
    await mongoose.connect(uri, options);
    await mongoose.connection.db?.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
}
