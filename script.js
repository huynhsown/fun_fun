const audio = document.querySelector('#audioplayer');

const button = document.querySelector('button');
const main_img = document.querySelector(".main-img")

const buttonOK = document.querySelector('.OK')

buttonOK.addEventListener('mouseover', ()=>{
    main_img.src = "./img/meo-den.png"
})

buttonOK.addEventListener('mouseout', ()=>{
    main_img.src = "./img/shy_dog.png"
})