const express = require("express")
const router = express.Router()
const {addPerson, getPeople, getPeopleByName, updatePersonByName, deletePerson, deletePersonMary, getPersonById} = require("../Controllers/contact_controller")

    router.get("/getpersonById/:id", getPersonById)

    router.post("/addPerson", addPerson)

    router.get("/getPeople", getPeople)

    router.get("/getPersonByName/:name", getPeopleByName)

    router.delete("/deletePerson/:id", deletePerson)

    router.delete("/deleteMary", deletePersonMary)

    router.put("/updatePerson/:name", updatePersonByName)


module.exports = router
