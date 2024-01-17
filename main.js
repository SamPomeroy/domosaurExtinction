const paragraph = document.querySelector('span.mess-with-me')
paragraph.style.fontSize = "40px"
paragraph.addEventListener('click', function(){
paragraph.style.color = "orange"
})
const para2 = document.querySelector('p.mess-with-me')
para2.style.backgroundColor = "green"

const dino1 = document.querySelector('#triceratops')
dino1.style.width = "324px"
dino1.addEventListener('click', function(){
    dino1.style.border = "10px solid red"
})
const dino2 = document.querySelector('#hide-me-area')
dino2.style.display = "none"
const dino3 = document.querySelector('#biggify')
dino3.addEventListener('mouseover', ()=>{
    dino3.style.width = "200px"
})
const dino4 = document.querySelector('#feathers')
dino4.addEventListener('click', function(){
    dino4.style.opacity = "50%"
})
const behindButton = document.querySelector('#row')
const button = document.querySelector('#toggle')
toggle.addEventListener('click', ()=>{
    behindButton.style.backgroundColor = "purple"
})