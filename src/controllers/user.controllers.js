import agentes from "../../public/data/agentes.js"
import jwt from "jsonwebtoken"
import path from "path";
const __dirname = import.meta.dirname;
process.loadEnvFile();

const secretKey = process.env.SECRET_KEY;


export const signIn = (req, res) => {
    try {
        const {email, password } = req.query;
        const agent = agentes.find((agent) => {
        return agent.email === email && agent.password === password;
        })

        let token = jwt.sign({ email }, secretKey, { expiresIn: "2m"});
        //validacion
        agent
          ? res.send(`<center><h1>Agente Autorizado ✅</h1> <p>¡Bienvenido: <b>${email}</b>! <br>
        [[[Token almacenado en sessionStorage]]]</p>
        <a href="/dashboard?token=${token}&email=${email}"> Ir al Dashboard</a></center>
        <script>
            sessionStorage.setItem('token', JSON.stringify("${token}"))
        </script>`)
          : res.send("Usuario o Password Incorrecta");

    } catch (error) {
        console.log(error.message);
    }
} 


export const dashboardHome = (req, res) => {
    const { token, email } = req.query;
    try {
    jwt.verify(token, secretKey,(err,data)=> {
        if(err){
            res.status(401).send(`Error: ${err.message}`)
        } else {
            res.sendFile(path.join(__dirname, "../views/dashboard.html"));
        }
    });
  } catch (error) {
    res.status(401).json({ error: '401 Unathorized', message: error.message });
  }
};