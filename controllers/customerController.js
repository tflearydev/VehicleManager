const Customer = require('../models/Customer')

const customerController = {
    index: (req, res) => {
        Customer.find()
        .then(customers => {
            res.render('customers/index', {customers})
        })
    },
    new: (req, res) => {
        res.render('customers/new')
    },
    create: (req, res) => {
        Customer.create(req.body).then(customer => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        Customer.findById(req.params.customerId).then((customer) => {
            res.render('customers/show', {customer})
        })
    },
    edit: (req, res) => {
        Customer.findById(req.params.customerId).then((customer) => {
            res.render('customers/edit', {customer})
        })
    },
    update: (req, res) => {
        Customer.findByIdAndUpdate(req.params.customerId, req.body, {new: true}).then((updatedCustomer) => {
            res.redirect(`/${req.params.customerId}`)
        })
    },
    delete: (req, res) => {
        Customer.findByIdAndDelete(req.params.customerId).then(() => {
            console.log(`Customer with id of ${req.params.customerId}`)
            res.redirect('/')
        })
    }
}

module.exports = customerController