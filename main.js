const span = document.querySelector('span.mess-with-me')
span.style.fontSize = "40px"
span.addEventListener('click', ()=>{
span.style.color = "orange"
})
const paragraph = document.querySelector('p.mess-with-me')
paragraph.style.backgroundColor = "green"

const dino1 = document.querySelector('#triceratops')
dino1.style.width = "324px"
dino1.addEventListener('click', ()=>{
    dino1.style.border = "10px solid red"
})
const dino2 = document.querySelector('#hide-me-area')
dino2.style.display = "none"
//dino2.hidden = true
const dino3 = document.querySelector('#biggify')
dino3.addEventListener('mouseover', ()=>{
    dino3.style.width = "200px"
})
dino3.addEventListener('mouseout', ()=>{
    dino3.style.width = "162px"
})
const dino4 = document.querySelector('#feathers')
dino4.addEventListener('click', ()=>{
    dino4.style.opacity = "50%"
})
const behindButton = document.querySelector('#row')
const button = document.querySelector('#toggle')
toggle.addEventListener('click', ()=>{
    if(behindButton.style.backgroundColor === 'white'){
        behindButton.style.backgroundColor = 'purple'
    }else{
        behindButton.style.backgroundColor = 'white'
    }
})
