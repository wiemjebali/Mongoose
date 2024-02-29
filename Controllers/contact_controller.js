const PersonModel = require("../Models/person")


exports.getPersonById = async(req, res) => {
    try {
        let id = req.params.id;
        let result = await PersonModel.findById(id)
        res.send({msg: "Person found", result})
    } catch (err) {
        console.error(err)
    }
}

exports.getPeople = async(req, res) => {
    try {
        let result = await PersonModel.find()
        res.send({msg: "Person found", result})
    } catch (err) {
        console.error(err)
    }
}

exports.getPeopleByName = async(req, res) => {
    try {
        let name = req.params.name
        let result = await PersonModel.find({name: name})
        res.send({msg: "Person found", result})
    } catch (err) {
        console.error(err)
    }
}

exports.addPerson = async(req, res) => {
    try {
        const newPerson = {
            name: req.body.name,
            age: req.body.age,
            favoriteFoods: req.body.favoriteFoods
        }
        const result = await PersonModel.create(newPerson)
        res.send({msg: "person created", result})

    } catch (err) {
        console.error(err)
    }
}

exports.deletePerson = async(req, res) => {
    try {
        let id = req.params.id;
        const result = await PersonModel.deleteOne({_id: id})
        res.send({msg: "Person deleted", result})
    } catch (err) {
        console.error(err)
    }
}

exports.updatePersonByName = async(req, res) => {
    try {
        let name = req.params.name
        const result = await PersonModel.findOneAndUpdate({name: name}, {$set:{age: 20}}, {new: true})
        res.send({msg: "person updated", result})
    } catch (err) {
        console.error(err)
    }
}

exports.deletePersonMary = async(req, res) => {
    try {
        const result = await PersonModel.deleteMany({name: "Mary"})
        res.send({msg: "Mary deleted", result})
    } catch (err) {
        console.error(err)
    }
}