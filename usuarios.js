const express = require("express")
const app = express()
let usuarios = [
    {
        id: 1,
        nome: "raimunda",
        email: "mundinha@hotmail.com",
        telefone: "(85)096689001"
    },
    {
        id: 2,
        nome: "davi",
        email: "davi@gmail.com",
        telefone: "(85)600336679"
    },
    {
        id: 3,
        nome: "luana",
        email: "luana@gmail.com",
        telefone: "(85)944667777"
    },
    {
        id: 4,
        nome: "lia",
        email: "htinha@gmail.com",
        telefone: "(85)944772233"
    },
    {
        id: 5,
        nome: "pedro",
        email: "pedro@gmail.com",
        telefone: "(85)966558822"
    }
]

app.get("/usuarios", (req, res) => {
    res.json(usuarios)
})

app.get("/usuarios/:id", (requerimento, resposta) => {
    let encontrado = usuarios.find((usuario) => requerimento.params.id == usuario.id)
    resposta.json(encontrado)
})

app.get("/criarusuario", (req, res) => {
    if (req.query.nome && req.query.email && req.query.telefone) {
        let novousuario = {
            id: Date.now(),
            nome: req.query.nome,
            email: req.query.email,
            telefone: req.query.telefone
        }
        usuarios.push(novousuario)
        res.json(novousuario)
    } else {
        res.send("erro")
    }

})

app.get("/alterarusuario/:id", (req, res) => {
    let encontrado = usuarios.find((usuario) => usuario.id == req.params.id)
    if (encontrado) {
        let novosdados = {}
        if (req.query.nome) novosdados.nome = req.query.nome
        if (req.query.email) novosdados.email = req.query.email
        if (req.query.telefone) novosdados.telefone = req.query.telefone
    }
    res.json(encontrado)
})

app.get("/deletarusuario/:id", (req, res) => {
    let encontrado = usuarios.find((usuario) => usuario.id == req.params.id)
    if (encontrado) {
        usuarios = usuarios.filter((usuario) => usuario.id != req.params.id)
        res.send("deletado")
    } else {
        res.send("nao encontrei o usuario")
    }

})

app.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000");
})