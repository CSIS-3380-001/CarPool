const mongoose = require("mongoose");

let connect = async () => {
    try {
        console.log("Connecting to database...");
        await mongoose.connect(process.env.DB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = connect;