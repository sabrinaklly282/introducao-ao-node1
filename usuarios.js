const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json())
const db = require('./database')

const listarUsuarios = db.prepare(`
    SELECT * FROM usuarios
`)

const adicionarUsuarios = db.prepare(`
    INSERT INTO usuarios (nome, email, telefone)
    VALUES (?, ?, ?)
`)



let usuarios = [
    {
        id: 8,
        nome: "Raimunda",
        email: "mundinha@hotmail.com",
        telefone: "(85) 982002345"
    },
    {
        id: 4,
        nome: "Davi",
        email: "d4vizinhodatuf@gmail.com",
        telefone: "(11) 40028922"
    },
    {
        id: 1,
        nome: "Ruan",
        email: "ruan@hotmail.com",
        telefone: "(21) 988003232"
    },
    {
        id: 1,
        nome: "Lia",
        email: "htinha@gmail.com",
        telefone: "(85) 966404829"
    },
    {
        id: 83,
        nome: "Gerardo",
        email: "gerardocastro@gmail.com",
        telefone: "(85) 98888888"
    },
]

function salvar() {
    const jsonData = JSON.stringify(usuarios, null, 2);

    fs.writeFile("usuarios.json", jsonData, 'utf8', (err) => {
        if (err) {
            console.error('Erro ao salvar arquivo', err);
        } else {
            console.log('Arquivo salvo com sucesso');
        }
    });
}

function ler() {
    //fs.readFile("usuarios.json", (err, data) => {
    //    if(err) throw err
    //    usuarios = JSON.parse(data)
    //    console.log('Arquivo carregado com sucesso');
    //})

    dados = fs.readFileSync('usuarios.json')
    usuarios = JSON.parse(dados)
    console.log('Arquivo carregado com sucesso');
}

app.get("/usuarios", (req, res) => {
    ler()
    const resposta = listarUsuarios.all()
    res.json(resposta)
})

app.get("/usuarios/:id", (requerimento, resposta) => {
    ler()
    let encontrado = usuarios.find((usuario) => requerimento.params.id == usuario.id)
    resposta.json(encontrado)
})

app.post("/usuarios", (req, res) => {
    if (req.body.nome && req.body.email && req.body.telefone) {
        let novousuario = {
            id: Date.now(),
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone
        }
        usuarios.push(novousuario)
        salvar()
        res.json(novousuario)
    } else {
        res.send("Erro")
    }
})

app.patch("/usuarios/:id", (req, res) => {
    let encontrado = usuarios.find((usuario) => usuario.id == req.params.id)
    if (encontrado) {
        let novosdados = {}
        if (req.body.nome) novosdados.nome = req.body.nome
        if (req.body.email) novosdados.email = req.body.email
        if (req.body.telefone) novosdados.telefone = req.body.telefone
        Object.assign(encontrado, novosdados)
    }
    salvar()
    res.json(encontrado)
})

app.delete("/usuarios/:id", (req, res) => {
    let encontrado = usuarios.find((usuario) => usuario.id == req.params.id)
    if (encontrado) {
        // usuarios = usuarios.filter( (usuario) => usuario.id != req.params.id )
        usuarios = usuarios.filter((usuario) => usuario.id != req.params.id)
        salvar()
        res.send("DELETADO")
    } else {
        res.send("Não encontrei o usuário")
    }
})

app.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000");
})


// ATIVIDADE: Salvar a lista de usuários em um arquivo .json
