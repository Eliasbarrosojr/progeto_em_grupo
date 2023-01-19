import{ toast } from './toast.js'
const token = localStorage.getItem('@kenziePet:token')


async function loginUser(data) {
    const loginData = await fetch(`http://localhost:3333/session/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    const response = await loginData.json()

    if(loginData.ok){
        window.location.replace('src/pages/dashboard_user.html')
        toast('Login realizado com sucesso', '#4fee05f1')
        localStorage.setItem('@kenziePet:token', response.token)
    }else {
        const modal = document.querySelector('.modal_container')
         modal.close()
        toast('Dados ínvalidos', '#e72f26')
    }

    return response
}

// Create User
async function createUser(data) {
    const userData = await fetch(`http://localhost:3333/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
       const response = await userData.json()

    return response
}


//Read All
async function readAll() {
    const readUser = await fetch("http://localhost:3333/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })

    const response = await readUser.json()

    return response
}

// Read Profile
async function readProfile(){
    const readUserProfile = await fetch(`http://localhost:3333/users/profile`, {
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    
    const response = await readUserProfile.json()

    return response
}

//Update Profile

async function updateProfile(data) {
    const updateProfileData = await fetch(`http://localhost:3333/users/profile`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })

    const responseUpdateProfile = await updateProfileData.json()

    if(updateProfileData.ok) {
        alert('Perfil atualizado')
    } else {
        alert('Algo deu errado!')
    }

    return responseUpdateProfile
}

//Delete Profile
async function deleteProfile() {
    const deleteProfileUser = await fetch(`http://localhost:3333/users/profile`, {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    const response = await deleteProfileUser.json()

    return response

}

//Create Pet
async function createPet(data) {
    const petData = await fetch(`http://localhost:3333/pets`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })

    const response = await petData.json()

    if(petData.ok) {
        alert('Pet Cadastrado')
    } else {
        alert('Algo deu errado!')
    }

    return response
}

//Read All Pets
async function readAllPets() {
    const allPetsData = await fetch("http://localhost:3333/pets", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })

    const response = await allPetsData.json()

    return response
}


//Read All My Pets
async function readAllMyPets() {
    const myPetsData = await fetch("http://localhost:3333/pets/my_pets", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })

    const response = await myPetsData.json()

    return response
}

//Update Pet By Id
async function updatePetById(data, id){
    const updatePet = await fetch(`http://localhost:3333/pets/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })

    const response = await updatePet.json()

    if(updatePet.ok) {
        alert('Perfil atualizado')
    } else {
        alert('Algo deu errado!')
    }
    return response
}


async function deletePetById(id) {
    const deletePet = await fetch(`http://localhost:3333/pets/${id}`, {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    const response = await deletePet.json()

    return response
}

//Create Adoption
async function createAdoption(data) {
    const adoptionData = await fetch(`http://localhost:3333/adoptions`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })

    const response = await adoptionData.json()

    if(response.ok) {
        alert('Doação Cadastrada')
    } else {
        alert('Algo deu errado!')
    }

    return response
}

//Read All Adoptions
async function readAllAdoptions() {
    const readAdoptions = await fetch("http://localhost:3333/adoptions", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })

    const response = await readAdoptions.json()

    return response
}

//Read Adoption By Id
async function readAdoptionById(id) {
    const readMyAdoptions = await fetch(`http://localhost:3333/adoptions/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })

    const response = await readMyAdoptions.json()

    return response
}

//Read My Adoptions
async function readMyAdoptions() {
    const myAdoptionsData = await fetch("http://localhost:3333/adoptions/myAdoptions", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })

    const response = await myAdoptionsData.json()

    return response
}

//Update Adoption By Id
async function updateAdoptionById(data, id) {
    const updateAdoption = await fetch(`http://localhost:3333/adoptions/update/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })

    const response = await updateAdoption.json()

    if(updateAdoption.ok) {
        alert('Perfil atualizado')
    } else {
        alert('Algo deu errado!')
    }

    return response
}

//Delete Adoption By Id
async function deleteAdoptionById(id) {
    const deleteAdoption = await fetch(`http://localhost:3333/adoptions/update/${id}`, {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    const response = await deleteAdoption.json()
    
    return response
}

export{
    loginUser,
    createUser,
    readAll,
    readProfile,
    updateProfile,
    deleteProfile,
    createPet,
    readAllPets,
    readAllMyPets,
    updatePetById,
    deletePetById,
    createAdoption,
    readAllAdoptions,
    readAdoptionById,
    readMyAdoptions,
    updateAdoptionById,
    deleteAdoptionById,
}