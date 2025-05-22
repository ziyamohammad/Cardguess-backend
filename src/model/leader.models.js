import mongoose from "mongoose";

const leaderSchema = mongoose.Schema({
    moves:{
        type:Number,
        required:true,
    },
    usename:{
        type:String,
        required:true,
        lowercase:true
    }
},{timestamps:true})
const leader = new mongoose.model("leader",leaderSchema)

export default leader;