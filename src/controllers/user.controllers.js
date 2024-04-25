import agentes from "../../public/data/agentes.js"
import jwt from "jsonwebtoken"
process.loadEnvFile();

const secretKey = process.env.SECRET_KEY;


const signInControl = (req, res) => {
    try {
        const {email, password } = req.query;
        const agent = agentes.find((agent) => {
        return agent.email === email && agent.password === password;
        })
        let token = jwt.sign({ email }, secretKey, { expiresIn: "1m"});
        agent ? res.send(`<p>Agente Autorizado, bienvenido <b>${email}</b>
        Su Token esta en el sessionStorage</p>
        <a href="/dashboard?token=${token}"> Ir al Dashboard</a>
        <script>
            sessionStorage.setItem('token', JSON.stringify("${token}"))
        </script>`) : res.send("Usuario o Password Incorrecta")
    } catch (error) {
        console.log(error.message);
    }
} 

export {
    signInControl
}