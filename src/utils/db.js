import mongoose from "mongoose";
const { username, password } = process.env;

console.log(username, password);

const MONGODB_URI =
  `mongodb+srv://sumit6:sumit2011@nextuserdatabase.ilrg5.mongodb.net/userDatabase?retryWrites=true&w=majority&appName=NextUserDatabase`;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable in .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
