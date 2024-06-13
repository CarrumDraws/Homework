import mongoose from 'mongoose';

// Should use dotenv as a precaution
mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to Database'))
  .catch((err) => console.error(err));

export default mongoose.connection;
