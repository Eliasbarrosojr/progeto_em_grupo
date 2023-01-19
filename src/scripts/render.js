import { updateProfile, readProfile } from "./request.js";

async function renderAvatar(){
    const containerPicture = document.querySelector('.section__container--picture')
    const getProfile = await  readProfile()
    const createAvata = createAvatar(getProfile)

    containerPicture.innerHTML = ""
    containerPicture.append(createAvata)

}

async function renderUser(){
    const sectionUserInformation = document.querySelector('.section__container--information')
    const getProfile = await readProfile()

    const createProfileInformation = createInfomationUser(getProfile)
    const createButton = createButtons()

    sectionUserInformation.append(createProfileInformation)
    sectionUserInformation.append(createButton)
}

function createAvatar({avatar_url}){
    const pictureImg = document.createElement('img')
    pictureImg.classList.add('picture--img')
    pictureImg.src = avatar_url
    pictureImg.alt = "Avatar"

    return pictureImg
}

function createInfomationUser({name, email }){
    const containerInfomation = document.querySelector(".container__information--user")
    containerInfomation.innerHTML = ""

    const userName = document.createElement('p')
    userName.innerHTML = `<span class="information__user--span">Nome:</span> ${name}`
    userName.classList.add('information__user')

    const userEmail = document.createElement('p')
    userEmail.innerHTML = `<span class="information__user--span">E-mail:</span> ${email}`
    userEmail.classList.add('information__user')

    const userBirthday = document.createElement('p')
    userBirthday.innerHTML = `<span class="information__user--span">Data de nascimento:</span> N/A`
    userBirthday.classList.add('information__user')

    containerInfomation.append(userName, userEmail, userBirthday)

    return containerInfomation

}

function createButtons(){
    const containerInfomationButton = document.querySelector('.container__information--button')
    containerInfomationButton.innerHTML = ""

    const updateButton = document.createElement('button')
    updateButton.classList.add('information__button--update')
    updateButton.id = "updateButton"
    updateButton.innerText = "Atualizar Informações"

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('information__button--delete')
    deleteButton.id = 'deleteButton'
    deleteButton.innerText = "Deletar Conta"

    const showModalUpdate = document.getElementById('showUpdateModal')

    updateButton.addEventListener('click', () => {
        showModalUpdate.showModal()
    })

    const updateCloseButton = document.querySelector('.update__close--button')
    updateCloseButton.addEventListener('click', () =>{
        showModalUpdate.close()
    })

    containerInfomationButton.append(updateButton, deleteButton)

    return containerInfomationButton
}


export{
    renderAvatar,
    renderUser,
}