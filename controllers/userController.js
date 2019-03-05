const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find()
        .then(users => {
            res.render('users/index', {users})
        })
    },
    new: (req, res) => {
        res.render('users/new')
    },
    create: (req, res) => {
        res.send('Create a new user in the db')
    },
    show: (req, res) => {
        User.findById(req.params.userId).then((user) => {
            res.render('users/show', {user})
        })
    },
    edit: (req, res) => {
        User.findById(req.params.userId).then((user) => {
            res.render('users/edit', {user})
        })
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.userId, req.body, {new: true}).then((updatedUser) => {
            res.redirect(`/${req.params.userId}`)
        })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId).then(() => {
            console.log(`Donut with id of ${req.params.userId}`)
            res.redirect('/')
        })
    }
}

module.exports = userController