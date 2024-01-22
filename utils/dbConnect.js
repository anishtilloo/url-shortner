const mongoose = require("mongoose");

const connectToDb = (url) => {
    try {
        mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToDb;