const mongoose = require("mongoose");

const dbConnectionTibaquira = async () => {
    try {
        await mongoose.connect(process.env.BD_CONNECTION_TIBAQUIRA, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true,
            
        });
        console.log("Connection with MongoDB: OK");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error);
    }
}

module.exports = {dbConnectionTibaquira};