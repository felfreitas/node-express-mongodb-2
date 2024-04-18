import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {

    console.log(erro);

    if (erro instanceof mongoose.Error.CastError) {

        res.status(400).send({ message: "Um ou mais dados fornecidos estão incorretos." });

    } else if (erro instanceof mongoose.Error.ValidationError) {

        console.log(erro.errors);
        const mensagensErro = Object.values(erro.errors)
            .map(erro => erro.message)
            .join("; ");

        res.status(400).send({ message: `Os seguintes erros foram encontrados: ${mensagensErro}` });

    } else {

        res.status(500).send({ message: "erro interno do servidor" });

    }
}

export default manipuladorDeErros;