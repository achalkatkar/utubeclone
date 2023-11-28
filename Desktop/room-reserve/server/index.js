import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

const connectMongoDB = async () =>{
  const connection = await mongoose.connect(`mongodb+srv://11achalkatkar:XttBLmlVXCmQbT1B@cluster0.ezstvyj.mongodb.net/room-reserve`);
  if(connection){
    console.log("Connected to MongoDB");
  }
}
connectMongoDB();

const PORT = 5000;


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});