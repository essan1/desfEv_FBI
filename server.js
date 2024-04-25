import express from "express";
import router from "./src/routes/routes.js";
import path from "path";
const app = express();
const PORT = process.env.PORT || 3033;
const __dirname = import.meta.dirname;


//carpetos publicas
app.use(express.static(path.join(__dirname, "src/assets")));
app.use(express.static(path.join(__dirname, "src/controllers")));
app.use(express.static(path.join(__dirname, "src/views")));

app.use(router);

app.listen(PORT, () =>
  console.log(`🔥Server Running on http://localhost:${PORT}`)
);
