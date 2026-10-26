const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Página inicial")
})

app.get("/curriculo", (req,res) => {
    res.send("Página sobre o projeto")
})

app.get("/contato", (req,res) => {
    res.send(`
        <h1>Pagina sobre contato</h1>
        <p>contato </p>
    `)
})

app.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000");
    
})