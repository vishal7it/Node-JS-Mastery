import { User } from "../Models/User.js"

export const userRegister = async (req, res) => {
    // console.log(`getting data from body == `, req.body)
    try {
        let user = await User.create(req.body);
        res.json({
            message: "User created successfully",
            NewUser: user,
            success: true,
        })
    } catch (error) {
        res.json({ message: error.message })
    }
    res.json({ message: "Your form has been submtted.....!", success: true })
}