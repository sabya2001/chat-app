import express from 'express'
import User from '../models/user.js'
import bcrypt from 'bcryptjs'
const userApi = express()
//GET routes
//This route "/api/user/:userId" return a summary of some details
//of the user provided in userID parameter. This api is used to load the home page
userApi.get('/user/:userId', async (req, res) => {
    const { userId } = req.params
    try {
        const user = await User.findOne({ userName: userId })
        if (user) {
            const userDetails = {
                chatsCount: user.chats.length,
                friendsCount: user.friends.length,
                profilePic: user.profilePic,
                unreadMessages: user.unreadMessages.length,
                preferences: user.userPreferences,
            }
            return res.status(200).json({ data: userDetails })
        }
        res.status(404).json({ message: "User not found" })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

});
// Route - "/api/user/:userId" used to create a new user after 
//hashing the normal password
userApi.put('/user/:userId', async (req, res) => {
    try {
        const { userName, email, password, currentClientDate, profilePic,
            userPreferences } = req.body //destructing the data from req.body
        const saltRounds = 14
        //hashing the normal password
        const hashedPassword = await bcrypt.hash((password), saltRounds)
        const newUser = new User({
            userName: userName,
            email: email,
            password: hashedPassword,
            chats: [],
            friends: [],
            dateJoined: currentClientDate,
            profilePic: profilePic,
            userPreferences: userPreferences,
            unreadMessages: []
        })

        const data = await newUser.save() //saving the data to DB
        res.status(201).json({ message: "New user created!!" })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

export default userApi