import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

routes(app);

//middleware de erro: essa função serve para interceptar qualque erro que for identificado na aplicação
app.use(manipuladorDeErros);

export default app;
