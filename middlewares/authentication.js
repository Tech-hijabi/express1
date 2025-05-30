const checkinvite = (req, res, next) => {
    const accesscard = true
    const presenter = true
    if (accesscard && presenter) {
        next('route')
    }
    else if (accesscard) {
        next()
    }
    else {
        return res.send('You are not invited to this conference')
    }
}
const checkoutfit =  (req, res, next) => {
    const outfit = 'formal'
    if (outfit) {
        next()
    }
    else {
        return res.send('You are not dressed properly for the conference, kindly return')
    }
}
const conferenceroom = (req, res) => {
    res.send('Welcome to the conference room, please have your sit')
}
const podium = (req, res) => {
    res.send('Proceed to the podium, you are the presenter')
}
module.exports = {
    checkinvite,
    checkoutfit,
    conferenceroom,
    podium
}