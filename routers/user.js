const router = require('express')
const Router = router()

const {
    readSubs,
    readUser,
    readUserAcc,
    barokahPage,
    createProfile,
    createinfo,
    createUserAccount,
    updateUser,
    deleteUser
} = require('../controllers/userController')

const {checkinvite, checkoutfit, conferenceroom, podium} = require('../middlewares/authentication')

Router
.get('/subs', readSubs)
.get('/', readUser)
.get('/barokah.com', barokahPage)
.get('/conference', checkinvite, checkoutfit, conferenceroom)
.get('/conference', podium)
.get('/users', readUserAcc)

.post('/profileinfo', createProfile)
.post('/create', createinfo)
.post('/register', createUserAccount)

.put('/updateprofile', updateUser)
.delete('/deleteprofilepics', deleteUser)

module.exports = Router;