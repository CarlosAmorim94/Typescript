// Definir uma tipagem para as variáveis, nesse caso um object

type User = { // Letra maipuscula sempre
    name: string
    email: string
    address: {
        city: string
        state?: string // utilizar "?" deixa como valor opcional
    }
}

// "user: User" = definindo a tipagem User para o parametro user
function showWelcomeMessage(user: User) {
    return `Welcome ${user.name}, your e-mail is ${user.email}, Your city is ${user.address.city} - ${user.address.state}.`
}

showWelcomeMessage({
    name: 'Carlos' ,
    email: 'carlos.av.amorim@gmail.com',
    address: {
        city: 'Botucatu',
        state: 'SP'
    }
})
