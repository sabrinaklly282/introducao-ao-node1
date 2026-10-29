const express = require("express")
const app = express()
app.use(express.json())

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

function salvar() {
    const jsonData = JSON.stringify(usuarios, null, 2);

    FileSystem.writeFile("usuarios.json", jsonData, 'utf8', (err) => {
        if (err) {
            console.error('erro ao salvar arquivo', err);
        } else {
            console.log('arquivo salvo com sucesso');
        }
    });
}

function ler() {
    FileSystem.readFile("usuarios.json", (err, data) => {
        if(err) throw err
        usuarios = JSON.parse(data)
        console.log('arquivo carregado com sucesso');
    })
}

app.get("/usuarios", (req, res) => {
    res.json(usuarios)

})



app.get("/usuarios/:id", (requerimento, resposta) => {
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
        res.json(novousuario)
    } else {
        res.send("erro")
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
    res.json(encontrado)
})

app.delete("/usuarios/:id", (req, res) => {
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

