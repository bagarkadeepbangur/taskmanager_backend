import mongoose from "mongoose";
// process.env.MONGODB_URI
const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://TaskManger:Kolkata%4012345@cluster0.9idyals.mongodb.net/taskManager?retryWrites=true&w=majority&appName=Cluster0",
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
