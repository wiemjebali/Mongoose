const mongoose = require("mongoose")

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoose connected")
    } catch(err) {
        console.error(err);
    }
}

module.exports = ConnectDB