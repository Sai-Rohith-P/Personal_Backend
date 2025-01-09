import express from 'express'
import ConnectingDB from './Db.js'
import users from './Routes/UserRoute.js'
import cors from 'cors'
import 'dotenv/config'
const app = express()

app.use(cors());
app.use(cors({ origin: 'https://personal-frontend-rgfa.onrender.com' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
ConnectingDB()

app.use('/', users)
const port = process.env.PORT;
app.listen(port, () => {
    console.log("server is running....");
})