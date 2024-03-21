'use strict'

import { getFilmes, getFilme, postFilme, putFilme, deleteFilme, getFilmebyTitle} from "./filmes.js"

async function criarCard (filme) {

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

 function showMovieInfos(filme){

    const img_header = document.getElementById('img_header')
    img_header.classList.add('w-2/3')
    img_header.style.backgroundImage = `url(${filme.foto_capa})`

    const title = document.getElementById('title')
    title.textContent = filme.nome

    const duracao = document.getElementById('duration')
    duracao.textContent = filme.duracao

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

    const more = document.getElementById('more_info')
    more.classList.remove('hidden')
}

const input = document.getElementById('busca')
input.addEventListener('keypress',(event) => verifyKeyPress(event) )

function verifyKeyPress(event) {
    if (event.keyCode === 13) {
        const filme = input.value
        console.log(filme);
        console.log('oiiiii');

        buscaFilme(filme)
    }
  }


async function buscaFilme(titulo){

    const filmeNome = titulo

    const filme = await getFilmebyTitle(filmeNome)
    console.log(filme);

    console.log('oi');
    showMovieInfos(filme)
}

/////TESTE/////////
// const filme = {  
//         "id":4,
//         "nome": "Parasita",
//         "sinopse": "Em Parasita, toda a família de Ki-taek (Song Kang Ho) está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.",
//         "duracao":"02:12:00",
//         "data_lancamento": "2019-11-07",
//         "data_relancamento": null,
//         "foto_capa": "https://img.elo7.com.br/product/zoom/2D25B68/big-poster-filme-parasita-2019-lo001-tamanho-90x60-cm-nerd.jpg",
//         "valor_unitario": 49.40
// }



//postFilme(filmeput)
//getFilme(5)
//putFilme(filme)
// deleteFilme(7)