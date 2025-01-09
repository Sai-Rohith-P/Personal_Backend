import express from 'express'
import userModel from '../model/UserDetails.js';
const users = express.Router()


users.post('/', async (req, res) => {
    const { name, email, message, phone } = req.body;
    try {
        const user = await new userModel({ name: name, email: email, phone: phone, message: message });
        await user.save();
        res.send("Data sended safely.");
    }
    catch (e) {
        console.error('There was an error!', e);
    }
})

export default users;