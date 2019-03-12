// ALL COMMENTS BELOW ARE MY CODE AND WILL BE USED FOR MY UPDATES, PREPPING

const Shop = require('../models/Shop')

const shopController = {
    index: (req, res) => {
        Shop.find()
            .then(shops => {
                res.render('shops/index', { shops })
            })
    },
    new: (req, res) => {
        res.render('shops/new')
    },
    create: (req, res) => {
        Shop.create(req.body).then(shop => {
            res.redirect('/shop')
        })
    },
    show: (req, res) => {
        Shop.findById(req.params.shopId).then((shop) => {
            res.render('shops/show', { shop })
        })
    },
    // edit and update currently disabled, will add with updated features
    // edit: (req, res) => {
    //     Shop.findById(req.params.shopId).then((shop) => {
    //         res.render('shops/edit', {shop})
    //     })
    // },
    // update: (req, res) => {
    //     Shop.findByIdAndUpdate(req.params.shopId, req.body, {new: true}).then((updatedShop) => {
    //         res.redirect(`/${req.params.shopId}`)
    //     })
    // },
    delete: (req, res) => {
        Shop.findByIdAndDelete(req.params.shopId).then(() => {
            console.log(`shop with id of ${req.params.shopId}`)
            res.redirect('/shop')
        })
    }
}

module.exports = shopController