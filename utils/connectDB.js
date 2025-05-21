import mongoose from "mongoose";
// process.env.MONGODB_URI
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Database Connected");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;
