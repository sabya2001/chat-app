const mongoose=require('mongoose');
const MessageSchema = new mongoose.Schema({
    sender:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    reciever:{
        type:[mongoose.SchemaTypes.ObjectId],
        required:true,
    },
    chat:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    messageType:{
        type:String,
        required:true
    },
    dateCreated:{
        type:Date,
        default:Date.now
    },
    readReciept:{
        type:[(mongoose.SchemaTypes.ObjectId,Date)],
        default:null
    }
},{collection:"messages"},{timestamps:true})
const message = mongoose.model('message',MessageSchema)
export default message
