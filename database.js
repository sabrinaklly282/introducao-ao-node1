const Database = require("better-sqlite3")
const db = new Database("usuarios.db")

db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        telefone TEXT NOT NULL UNIQUE
    )
    `)

module.exports = db