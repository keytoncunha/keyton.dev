const faBars = document.querySelector('.fa-bars') 
const faXmark = document.querySelector('.fa-xmark')
const navBar = document.querySelector('.navBar')
const iconsMenu = document.querySelector('.icons_menu')
const navBarAncora = document.querySelectorAll('.navBar ul li a ')
navBarAncora.forEach((ancora)=>{
    ancora.addEventListener('click',()=>{
        faBars.classList.remove('none')
        faXmark.classList.add('none')
        if(window.innerWidth < 768){
            navBar.classList.add('none')
        }
    })
})

if(window.innerWidth > 768){
    navBar.classList.remove('none')
    iconsMenu.classList.add('none')
}
window.addEventListener('resize',()=>{
    if(window.innerWidth > 768){
        navBar.classList.remove('none')
        iconsMenu.classList.add('none')
    } else{
        navBar.classList.add('none')
        iconsMenu.classList.remove('none')
    }
})

faBars.addEventListener('click',()=>{
    faXmark.classList.remove('none')
    faBars.classList.add('none')
    navBar.classList.remove('none')
})
faXmark.addEventListener('click',()=>{
    faBars.classList.remove('none')
    faXmark.classList.add('none')
    navBar.classList.add('none')
})

navBar.addEventListener('mouseleave',()=>{
    if(window.innerWidth < 768){
        faBars.classList.remove('none')
        faXmark.classList.add('none')
        navBar.classList.add('none')
    }
})

