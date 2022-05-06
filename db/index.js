const { connect } = require("mongoose");

// const { mongoURI }= process.env;

// const mongoURI = "mongodb+srv://pallavi:kCEp94ZsgHlSDpBu@cluster0.zqzwh.mongodb.net/Brillio-DB?retryWrites=true&w=majority";

const mongoURI = "mongodb://localhost:27017/brillio-db"

connect(mongoURI)
    .then(() => console.log("MongoDB Connected..."))
    .catch(console.log)