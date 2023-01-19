import { createModalLogin, createModalCadastre } from './modal.js'

function renderLogin() {
    const form = createModalLogin()
    const login = document.querySelector('.header__button--login')
    const modal = document.querySelector('.modal_container')
    
    login.addEventListener('click', () => {
        modal.showModal()
    })
    const imgclose = document.querySelector('#fechar')
    imgclose.addEventListener('click', () => {
        modal.close()
    })
}

function renderRegister() {
    createModalCadastre()
    const cadastre= document.querySelector('.header__button--singup')
    const modal = document.querySelector('.modal_container_register')
    
    cadastre.addEventListener('click', () =>{
        modal.showModal()
    })
    const img = document.querySelector('#close')
    img.addEventListener('click', ()=>{
        modal.close()
    })
}

renderLogin()
renderRegister()
