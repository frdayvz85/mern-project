import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../models/User.js";



export const signin = async (req, res) => {
    // const user = req.body;
    const { email, password } = req.body;
    // const newUser = new User(user)

    try {
        const exsistingUser = await User.findOne({ email })
        if (!exsistingUser) {
            return res.status(404).json({ message: "User doesn't exsist!" })
        }
        const isPasswordCorrect = await bcrypt.compare(password, exsistingUser.password)
        if (!isPasswordCorrect) {
            return res.status(404).json({ message: "Password is wrong!" })
        }
        const token = jwt.sign({ email: exsistingUser.email, id: exsistingUser.id }, 'test', { expiresIn: '1h' })

        res.status(200).json({ result: exsistingUser, token });
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const signup = async (req, res) => {
    // const user = req.body;
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    try {
        const exsistingUser = await User.findOne({ email })

        if (exsistingUser) return res.status(400).json({ message: "User already exsist!" })

        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords doesn't match!" })

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` })
        const token = jwt.sign({ email: result.email, id: result.id }, 'test', { expiresIn: '1h' })
        res.status(200).json({ result, token });
    } catch (error) {
        res.status(409).json({ message: error })
    }

}