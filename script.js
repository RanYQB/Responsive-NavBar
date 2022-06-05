const showMenu = ()=>{
    const menuBtn = document.querySelector('.burger-btn')
    const menu = document.querySelector('.menu-list')

    menuBtn.addEventListener('click', ()=>
        menu.classList.toggle('menu-clicked')
    )
}

showMenu()

