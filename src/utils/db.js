import mongoose from "mongoose";
const { username, password } = process.env;

console.log(username, password);

const MONGODB_URI = `mongodb+srv://sumit6:sumit2011@nextuserdatabase.ilrg5.mongodb.net/userDatabase?retryWrites=true&w=majority&appName=NextUserDatabase`;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable in .env.local"
  );
}

async function connectToDatabase() {
  try {
    const connection = await mongoose.connect(MONGODB_URI);
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export default connectToDatabase;
