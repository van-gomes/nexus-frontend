import { resolve } from "path"

const login = {
    name: 'Vânia Gomes',
    email: 'vaniagomes@gmail.com',
    password: '123456',
    balance: 60.000
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(login)
    }, 3000)
})