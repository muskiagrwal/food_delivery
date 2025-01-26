import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    userId: {type:String,requird:true},
    items: {type:Array,requird:true},
    amount: {type:Number,requird:true},
    address: {type:Object,requird:true},
    status: {type:String,default:"Food Processing"},
    date:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
})

const orderModel =  mongoose.models.order || mongoose.model("order",orderSchema)

export default orderModel;