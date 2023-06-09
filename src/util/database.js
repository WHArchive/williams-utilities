try {
    const mongoose = require("mongoose");

    require("dotenv").config();

    module.exports = async () => {
        mongoose.connect(process.env.database, {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Connected to Database!");
        }).catch(err => {
            console.error(err);
        })
    }
} catch(err) {
    console.log(err);
}