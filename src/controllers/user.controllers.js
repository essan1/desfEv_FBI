import users from "../../public/data/agentes.js"
import jwt from "jsonwebtoken"
process.loadEnvFile();

const secretKey = process.env.SECRET_KEY;

//genToken
export const getUsers = (req, res) => {
    try {
        const token = jwt.sign(users[1], secretKey);
        res.send(token).status(200);
    } catch (error) {
        res.status(401).json({ message: error.message})
    }
};
