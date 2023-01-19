import { createUser, } from "./request.js"
import { toast } from "./toast.js"

function cadastroForm(){
    const inputs = document.querySelectorAll('.inputCadastro')
    const button = document.querySelector('.btnCadastrar')
    const newUser = {}

    button.addEventListener('click', async (event) =>{
        event.preventDefault()
        
        inputs.forEach(input => {
           
            newUser[input.name] = input.value
            
        })
       
        const request = await createUser(newUser)

        if(request.id){
            const modal = document.querySelector('.modal_container_register')
            modal.close()
            toast('Cadastro realizado com sucesso', '#4fee05f1')
        } else{
           const modal = document.querySelector('.modal_container_register')
           modal.close()
           toast('Dados ínvalidos', '#e72f26')
         
        }

        localStorage.setItem('user', JSON.stringify(request))

        return newUser
    })
}

cadastroForm()