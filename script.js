const audio = document.querySelector('#audioplayer');

const button = document.querySelector('button');
const main_img = document.querySelector(".main-img")

const buttonOK = document.querySelector('.OK')
const buttonKOK = document.querySelector('.KOK')

buttonOK.addEventListener('mouseover', ()=>{
    main_img.src = "./img/meo-hoicham.png"
})

buttonOK.addEventListener('mouseout', ()=>{
    main_img.src = "./img/shy_dog.png"
})

buttonKOK.addEventListener('mouseover', ()=>{
    main_img.src = "./img/meo-hoicham.png"
})

buttonKOK.addEventListener('mouseout', ()=>{
    main_img.src = "./img/shy_dog.png"
})

buttonKOK.addEventListener('click', ()=>{
    main_img.src = "./img/download-removebg-preview.png"
})

buttonOK.addEventListener('click', ()=>{
    const div_fun = document.querySelector(".fun")
    const div_not_fun = document.querySelector(".not-fun")
    const body = document.querySelector('body')
    const video = div_not_fun.querySelector('video')
    video.play()
    div_fun.setAttribute("style", "display:none");
    div_not_fun.setAttribute("style", "display: flex;")
    body.setAttribute("style", "background-color: black")
})
