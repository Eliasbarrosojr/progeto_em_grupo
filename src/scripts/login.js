import { loginUser } from "./request.js";

function loginForm(){
    const inputs = document.querySelectorAll('.inputLogin')
    const button = document.querySelector('.btnLogin')
    const loginUserData = {}

    button.addEventListener('click', async (event) => {
        event.preventDefault()

        inputs.forEach(input => {
            loginUserData[input.name] = input.value
        })
        const request = await loginUser(loginUserData)

        return request
    })
}
loginForm()
