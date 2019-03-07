const vehicleController = {
    show: (req, res) => {
        res.send(`Showing vehicle with id of ${req.params.vehicleId}`)
    },
    new: (req, res) => {
        res.send(`Show a form to create a new vehicle`)
    },
    create: (req, res) => {
        res.send('Create the new vehicle in the db')
    },
    edit: (req, res) => {
        res.send(`Show an edit form for the vehicle with id of ${req.params.vehicleId}`)
    },
    update: (req, res) => {
        res.send(`Update the vehicle with id of ${req.params.vehicleId}`)
    },
    delete: (req, res) => {
        res.send(`Delete vehicle with the id of ${req.params.vehicleId}`)
    }
}

module.exports = vehicleController