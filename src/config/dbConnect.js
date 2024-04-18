import mongoose from "mongoose"

mongoose.connect(process.env.DATABASE_CONNECT_MONGO_URL);

let db = mongoose.connection;

export default db;