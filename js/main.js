'use strict'

import { getFilmes, getFilme, postFilme} from "./filmes.js"

function criarCard(filme) {
    const card = document.createElement('div')
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome
    const texto = document.createElement('textarea')
    texto.textContent = filme.sinopse

    card.append (titulo, texto)

    return card
}

// async function preencherContainer() {
//     const container = document.querySelector('body')

//     const filmes = await getFilmes()

//     filmes.forEach(filme => {
//         const card = criarCard(filme)
//         container.appendChild(card)
//     })
// }

/////TESTE/////////
const filme = {  
        "nome": "Senai",
        "sinopse": "Um drama emocionante que explora os segredos de uma pequena cidade no interior.",
        "duracao": "02:15:00",
        "data_lancamento": "2022-08-25",
        "data_relancamento": null,
        "foto_capa": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adorocinema.com%2Ffilmes%2Ffilme-128312%2F&psig=AOvVaw0y4R2hi4MrnYgJRRIxpUOj&ust=1710507682537000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKCqkOjn84QDFQAAAAAdAAAAABAE",
        "valor_unitario": 29.99
}

//postFilme(filme)

preencherContainer()