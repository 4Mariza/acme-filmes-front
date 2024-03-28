'use strict'

import { getFilmes, getFilme, getFilmebyTitle, putFilme } from "./filmes.js"

async function criarCard(filme) {

    const card = document.createElement('img')
    card.src = filme.foto_capa
    card.classList.add('w-48', 'h-72', 'rounded-lg', 'transform', 'transition', 'duration-500', 'hover:scale-150', 'hover:shadow-md', 'hover:shadow-white')

    return card
}


async function preencherContainer() {
    const container = document.getElementById('container_img')

    const filmes = await getFilmes()

    filmes.forEach(async filme => {
        const card = await criarCard(filme)
        container.appendChild(card)

        card.addEventListener('mouseover', () => showMovieInfos(filme))
    })
}

preencherContainer()

function showMovieInfos(filme) {
    console.log(filme);
    const img_header = document.getElementById('img_header')
    img_header.classList.add('w-2/3')
    img_header.style.backgroundImage = `url(${filme.foto_fundo})`

    const title = document.getElementById('title')
    title.textContent = filme.nome

    const duracao = document.getElementById('duration')
    duracao.textContent = moment.utc(filme.duracao).format('HH:mm:ss')

    const sinopse = document.getElementById('sinopse')
    sinopse.textContent = filme.sinopse

    const valor_unitario = document.getElementById('valor_unitario')
    valor_unitario.textContent = `R$${filme.valor_unitario.toFixed(2)}`

    const titleDuration = document.getElementById('title_duration')
    titleDuration.append(title, duracao)

    const titleDurationBox = document.getElementById('box')
    titleDurationBox.appendChild(titleDuration)

    const container = document.getElementById('container')

    const buy_button = document.getElementById('buy_button')
    buy_button.appendChild(valor_unitario)

    const botoesContainer = document.getElementById('botoes')
    botoesContainer.classList.remove('hidden')
    botoesContainer.appendChild(buy_button)


    container.append(titleDurationBox, sinopse, botoesContainer)

    const moreInfo = document.getElementById('more_info')
    moreInfo.classList.remove('hidden')
}

const input = document.getElementById('busca')
input.addEventListener('keypress', (event) => verifyKeyPress(event))

function verifyKeyPress(event) {

    if (event.keyCode === 13) {
        event.preventDefault()

        const filme = input.value
        buscaFilme(filme)
    }
}


async function buscaFilme(titulo) {

    const filmeNome = titulo

    const filme = await getFilmebyTitle(filmeNome)

    showMovieInfos(filme)
}

/////TESTE/////////
// const filme = {
//     "id": 3,
//     "nome": "Coraline",
//     "sinopse": "Entediada em sua nova casa, Caroline Jones (Dakota Fanning) um dia encontra uma porta secreta. Através dela tem acesso a uma outra versão de sua própria vida, a qual aparentemente é bem parecida com a que leva. A diferença é que neste outro lado tudo parece ser melhor, inclusive as pessoas com quem convive. Caroline se empolga com a ...",
//     "categoria": "Ficção Científica",
//     "duracao": "01:40:00",
//     "data_lancamento": "2009-02-13",
//     "data_relancamento": null,
//     "foto_capa": "https://petletras.paginas.ufsc.br/files/2022/09/22b31b1bcf3aeb7078bf37e249543183.jpg",
//     "foto_fundo": "",
//     "valor_unitario": 16
// }



//postFilme(filmeput)
//getFilme(5)
// putFilme(filme)
// deleteFilme(7)