import { renderAvatar, renderUser } from "./render.js";
import { updateProfile, readProfile } from "./request.js";


function backToHome(){
    const homeButton = document.getElementById("homeButton")

    homeButton.addEventListener('click', () =>{
        window.location.replace("/")
    })
}

async function sendUpdateProfile(){
    const user = await readProfile()
    const {email, username} = user
    const inputs = document.querySelectorAll(".form__input")
    const modal = document.getElementById('showUpdateModal')
    const submit = document.getElementById('sendUpdate')
    const updateUser = {}

    inputs.forEach(input => {
        if(input.name === 'username') {
          input.value = username
        } else if (input.name === 'email') {
          input.value = email
        }
      })
    

    submit.addEventListener('click', async (event) =>{
        event.preventDefault()

        inputs.forEach(input => {
          updateUser[input.name] = input.value
        })
    
        if(updateUser.email === email || updateUser.email === '') {
          delete updateUser.email
        } 
    

        const send = await updateProfile(updateUser)
        modal.close()
      })




}

function logout() {
    const logoutBtn = document.getElementById('logoutButton')
  
    logoutBtn.addEventListener('click', () => {
      localStorage.clear()
      window.location.replace('/')
    })
  }
    
  
backToHome()
renderAvatar()
renderUser()
sendUpdateProfile()
logout()