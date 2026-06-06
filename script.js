const menu_icon = document.querySelector('.menu_icon');
const nav = document.querySelector('.nav');

menu_icon.addEventListener('click', () =>{

    if(nav.classList.contains('ativo')){
        nav.classList.remove('ativo');
        document.querySelector('.menu_icon img').src = 'img/menu.png'
    }
    else{
        nav.classList.add('ativo')
        document.querySelector('.menu_icon img').src = 'img/close.png'
    }
})