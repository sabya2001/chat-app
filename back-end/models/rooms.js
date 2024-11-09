const mongoose=require('mongoose');
const RoomSchema = new mongoose.Schema({
    roomName:{
        type:String,
        required:true,
    },
    isGroupChat:{
        type:Boolean,
        required:true
    },
    admins:{
        type:[mongoose.SchemaTypes.ObjectId],
        required:true
    },
    participants:{
        type:[mongoose.SchemaTypes.ObjectId],
        required:true
    },
    dateCreated:{
        type:Date,
        default:Date.now
    },
    roomProfilePic:{
        type:String,
        default:null
    },
    roomSettings:{
        type:Object,
        default:null
    }
},{collection:"rooms"},{timestamps:true})
const room = mongoose.model('room',RoomSchema)
export default room
