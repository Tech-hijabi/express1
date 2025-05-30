const subscriberDb = require('../database/subscriberdb')
const User = require('../models/userSchema')



const createUserAccount = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.json({message: 'User created succesfully!'})
    }
    catch (err) {
        console.log('Unable to create user account', err)
    }
}

const readUserAcc = async (req, res) => {
    const users = await User.find()
    res.json(users)
}


const readSubs = async (req, res) => {
    res.send(subscriberDb)
}
const readUser = async (req, res) => {
    res.send('Welcome to my page')
}
const barokahPage = async (req, res) => {
    res.send('Profile Page: Welcome! I am Barokah')
}
const createProfile = async (req, res) => {
    res.send('Profile info successfully created')
}
const createinfo = async (req, res) => {
    subscriberDb.push(req.body)
    res.send(subscriberDb)
}
const updateUser = async (req, res) => {
    res.send('Profile Updated')
}
const deleteUser = async (req, res) => {
    res.send('Profile picture has been removed')
}

module.exports = {
    readSubs,
    readUser,
    readUserAcc,
    barokahPage,
    createProfile,
    createinfo,
    createUserAccount,
    updateUser,
    deleteUser
}