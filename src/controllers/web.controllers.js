import path from "path";
const __dirname = import.meta.dirname;

//ruta principal
export const homePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};


//ruta generica
 export const rutaGenerica = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/404.html"));
};