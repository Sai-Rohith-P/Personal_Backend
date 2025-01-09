import mongoose from "mongoose";
import 'dotenv/config'

const url = process.env.MONGOURL;

const ConnectingDB = async () => {
    await mongoose.connect(url)
        .then(() => {
            console.log("Data base Connected.");
        })
        .catch((e) => {
            console.log("Error at Connecting DataBase.");
        })
}

export default ConnectingDB;