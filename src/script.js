const body = document.querySelector('body')

mostraCatDogRandon()
pegarDadosDog()
pegarDadosCat()
addEvent()
 function mostraCatDogRandon(){
    const main = document.createElement('main')
    body.append(main)

    const divDog = document.createElement('div')
    divDog.className = 'cardDog'
    const divCat = document.createElement('div')
    divCat.className = 'cardCat'
    main.append(divDog, divCat)

    const figDog = document.createElement('figure')
    figDog.className = 'figDog'
    divDog.append(figDog)
    const figCat = document.createElement('figure')
    figCat.className = 'figCat'
    divCat.append(figCat)

    const imgDog = document.createElement('img')
    imgDog.className = 'imgDog'
    figDog.append(imgDog)
    const imgCat = document.createElement('img')   
    imgCat.className = 'imgCat'
    figCat.append(imgCat)

    const btnAtualizaDog = document.createElement('button')
    btnAtualizaDog.className = 'btnDog'
    btnAtualizaDog.innerText = 'Atualizar'
    divDog.append(btnAtualizaDog)
    const btnAtualizaCat = document.createElement('button')
    btnAtualizaCat.className = 'btnCat'
    btnAtualizaCat.innerText = 'Atualizar'
    divCat.append(btnAtualizaCat)
}
async function pegarDadosDog(){
    const url = 'https://api.thedogapi.com/v1/images/search'
    const apiDog = await fetch(url).then((response) => {
        return response.json()
    })
    resyncImgDog(apiDog)
    return apiDog
}
async function pegarDadosCat(){
    const url = 'https://api.thecatapi.com/v1/images/search'
    const apiCat = await fetch(url).then((response) => {
        return response.json()
    })
    resyncImgCat(apiCat)
    return apiCat
}
async function resyncImgDog(url){
    const imgDog = document.querySelector('.imgDog')
    
    imgDog.src = await url[0].url
    console.log(url)
    
}
async function resyncImgCat(url){
    const imgDog = document.querySelector('.imgCat')
    
    imgDog.src = await url[0].url
    console.log(url)
    
}
function addEvent(){
    const btnDog = document.querySelector('.btnDog')
    const btnCat = document.querySelector('.btnCat')

    btnDog.addEventListener('click', async (event) => {
        await pegarDadosDog()
        
    })
    btnCat.addEventListener('click', async (event) => {
        await pegarDadosCat()
        
    })
}

