const express = require("express")
const app = express()
const dados = {
    nome: "Gerardo Castro",
    cargo: "Desenvolvedor Fullstack",
    contato: "+55 (85) 98774-4745"
}
const produtos = [
    {
        id: 1,
        nome: "Mouse",
        preco: 80,
        desc: "Mouse gamer RGB"
    },
    {
        id: 2,
        nome: "Teclado",
        preco: 100,
        desc: "Teclado gamer RGB"
    },
    {
        id: 3,
        nome: "Monitor",
        preco: 399,
        desc: "Monitor portátil"
    },
    {
        id: 4,
        nome: "Headphone",
        preco: 25,
        desc: "Fone de ouvido básico"
    },
    {
        id: 5,
        nome: "Tablet",
        preco: 700,
        desc: "Cintiq Tablet"
    },
    {
        id: 6,
        nome: "Suporte de Headset",
        preco: 150,
        desc: "Suporte com leds"
    },
]

app.get("/produtos", (req, res) => {
    res.json(produtos)
})

app.get("/produtos/:id", (req, res) => {
    if(req.query.campo) res.json(produtos[req.params.id-1][req.query.campo])
    else res.json(produtos[req.params.id - 1])
})

//app.get("/usuario", (req, res) => {
//    res.json(dados)
//})

app.get("/contato", (req, res) => {
    res.send(`<h1 style="color: Red">${dados.nome}</h1>
        <h4>${dados.cargo}</h4>
        <p>Contato: ${dados.contato} whatsapp</p>`)
})

app.get("/curriculo", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Currículo - Gerardo Castro</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; color: #1f2937; margin: 0; padding: 40px 20px; line-height: 1.6;">

            <div style="max-width: 900px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); overflow: hidden; display: flex; flex-wrap: wrap;">
                
                <!-- BARRA LATERAL (Esquerda) -->
                <div style="background-color: #1f2937; color: #ffffff; padding: 40px; flex: 1; min-width: 280px; box-sizing: border-box;">
                    <!-- Nome e Título -->
                    <div style="margin-bottom: 40px;">
                        <h1 style="margin: 0 0 10px 0; font-size: 32px; font-weight: 700; letter-spacing: -0.5px; color: #ffffff;">Gerardo Castro</h1>
                        <p style="margin: 0; font-size: 16px; color: #38bdf8; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Dev Fullstack Sênior</p>
                    </div>

                    <!-- Contato -->
                    <div style="margin-bottom: 40px;">
                        <h3 style="margin: 0 0 15px 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; border-bottom: 1px solid #374151; padding-bottom: 5px;">Contato</h3>
                        <p style="margin: 0 0 10px 0; font-size: 14px; color: #e5e7eb;">📍 São Paulo, SP</p>
                        <p style="margin: 0 0 10px 0; font-size: 14px; color: #e5e7eb;">✉️ gerardo.castro@email.com</p>
                        <p style="margin: 0 0 10px 0; font-size: 14px; color: #e5e7eb;">🔗 ://linkedin.com</p>
                        <p style="margin: 0 0 10px 0; font-size: 14px; color: #e5e7eb;">🐙 ://github.com</p>
                    </div>

                    <!-- Hard Skills -->
                    <div style="margin-bottom: 40px;">
                        <h3 style="margin: 0 0 15px 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; border-bottom: 1px solid #374151; padding-bottom: 5px;">Hard Skills</h3>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                            <span style="background-color: #374151; padding: 6px 12px; border-radius: 20px; font-size: 12px; color: #f3f4f6;">Node.js / Express</span>
                            <span style="background-color: #374151; padding: 6px 12px; border-radius: 20px; font-size: 12px; color: #f3f4f6;">TypeScript</span>
                            <span style="background-color: #374151; padding: 6px 12px; border-radius: 20px; font-size: 12px; color: #f3f4f6;">React / Next.js</span>
                            <span style="background-color: #374151; padding: 6px 12px; border-radius: 20px; font-size: 12px; color: #f3f4f6;">Vue.js</span>
                            <span style="background-color: #374151; padding: 6px 12px; border-radius: 20px; font-size: 12px; color: #f3f4f6;">PostgreSQL / MongoDB</span>
                            <span style="background-color: #374151; padding: 6px 12px; border-radius: 20px; font-size: 12px; color: #f3f4f6;">Docker / K8s</span>
                            <span style="background-color: #374151; padding: 6px 12px; border-radius: 20px; font-size: 12px; color: #f3f4f6;">AWS (S3, EC2, Lambda)</span>
                            <span style="background-color: #374151; padding: 6px 12px; border-radius: 20px; font-size: 12px; color: #f3f4f6;">CI/CD (GitHub Actions)</span>
                        </div>
                    </div>

                    <!-- Idiomas -->
                    <div>
                        <h3 style="margin: 0 0 15px 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; border-bottom: 1px solid #374151; padding-bottom: 5px;">Idiomas</h3>
                        <p style="margin: 0 0 5px 0; font-size: 14px; color: #e5e7eb;">🇺🇸 Inglês — Fluente</p>
                        <p style="margin: 0; font-size: 14px; color: #e5e7eb;">🇧🇷 Português — Nativo</p>
                    </div>
                </div>

                <!-- CONTEÚDO PRINCIPAL (Direita) -->
                <div style="padding: 40px; flex: 2; min-width: 320px; box-sizing: border-box; background-color: #ffffff;">
                    
                    <!-- Perfil Profissional -->
                    <div style="margin-bottom: 35px;">
                        <h2 style="margin: 0 0 15px 0; font-size: 20px; color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Sobre Mim</h2>
                        <p style="margin: 0; color: #4b5563; font-size: 15px; text-align: justify;">
                            Engenheiro de Software Fullstack com mais de 8 anos de experiência no desenho, desenvolvimento e manutenção de aplicações web escaláveis e de alta performance. Especialista no ecossistema JavaScript/TypeScript, construindo arquiteturas robustas de microsserviços no backend e interfaces ricas e responsivas no frontend. Foco contínuo em boas práticas (Clean Code, SOLID, TDD) e otimização de infraestrutura em nuvem.
                        </p>
                    </div>

                    <!-- Experiência Profissional -->
                    <div style="margin-bottom: 35px;">
                        <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Experiência</h2>
                        
                        <!-- Cargo 1 -->
                        <div style="margin-bottom: 25px;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; margin-bottom: 5px;">
                                <h4 style="margin: 0; font-size: 16px; color: #111827;">Dev Fullstack Sênior Tech Lead</h4>
                                <span style="font-size: 13px; color: #6b7280; font-weight: 500;">2023 - Presente</span>
                            </div>
                            <p style="margin: 0 0 10px 0; font-size: 14px; color: #0284c7; font-weight: 600;">TechSolutions Corp</p>
                            <ul style="margin: 0; padding-left: 20px; color: #4b5563; font-size: 14.5px;">
                                <li style="margin-bottom: 5px;">Liderança técnica de um time de 6 desenvolvedores na rearquitetura de uma plataforma legada para microsserviços em Node.js e Next.js.</li>
                                <li style="margin-bottom: 5px;">Redução de 40% no tempo de carregamento das páginas através de Server-Side Rendering (SSR) e estratégias avançadas de cache com Redis.</li>
                                <li style="margin-bottom: 5px;">Implementação de pipelines de CI/CD automatizados, diminuindo o tempo de deploy de horas para minutos.</li>
                            </ul>
                        </div>

                        <!-- Cargo 2 -->
                        <div style="margin-bottom: 25px;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; margin-bottom: 5px;">
                                <h4 style="margin: 0; font-size: 16px; color: #111827;">Desenvolvedor Fullstack Pleno/Sênior</h4>
                                <span style="font-size: 13px; color: #6b7280; font-weight: 500;">2019 - 2023</span>
                            </div>
                            <p style="margin: 0 0 10px 0; font-size: 14px; color: #0284c7; font-weight: 600;">Inovação Digital Ltda</p>
                            <ul style="margin: 0; padding-left: 20px; color: #4b5563; font-size: 14.5px;">
                                <li style="margin-bottom: 5px;">Desenvolvimento de APIs RESTful integradas a gateways de pagamento e sistemas de terceiros utilizando Express e PostgreSQL.</li>
                                <li style="margin-bottom: 5px;">Criação de dashboards dinâmicos em React.js consumindo dados complexos em tempo real via WebSockets.</li>
                                <li style="margin-bottom: 5px;">Garantia de qualidade de código atingindo mais de 85% de cobertura de testes unitários e de integração utilizando Jest.</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Educação / Certificações -->
                    <div>
                        <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Formação e Certificados</h2>
                        
                        <div style="margin-bottom: 15px;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap;">
                                <h4 style="margin: 0; font-size: 15px; color: #111827;">Graduação em Engenharia de Software</h4>
                                <span style="font-size: 13px; color: #6b7280;">FIAP</span>
                            </div>
                        </div>

                        <div>
                            <h4 style="margin: 0 0 5px 0; font-size: 15px; color: #111827;">Certificações relevantes:</h4>
                            <p style="margin: 0; color: #4b5563; font-size: 14px;">• AWS Certified Solutions Architect – Associate</p>
                            <p style="margin: 0; color: #4b5563; font-size: 14px;">• Certified Kubernetes Administrator (CKA)</p>
                        </div>
                    </div>

                </div>
            </div>

        </body>
        </html>

        `)
})

app.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000");
})


// Rotas /contato e /curriculo.
// Devem retornar uma página estruturada e estilizada em HTML e CSS INLINE

// npm init
// npm install express