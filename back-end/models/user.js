import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    chats:{
        type:[mongoose.SchemaTypes.ObjectId]
    },
    friends:{
        type:[mongoose.SchemaTypes.ObjectId]
    },
    dateJoined:{
        type:Date,
        default:Date.now
    },
    profilePic:{
        type:String,
        default:null
    },
    userPreferences:{
        type:Object,
        default:null
    },
    unreadMessages:{
        type:[mongoose.SchemaTypes.ObjectId]
    }
},{collection:"users"},{timestamps:true})
const user = mongoose.model('user',UserSchema)
export default user
