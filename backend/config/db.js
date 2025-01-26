import mongoose from "mongoose" ;

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstackkk:testt12456@cluster0.oawb3.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}