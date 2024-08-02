import { resolve } from "path"

const login = {
    email: 'vaniagomes@gmail.com',
    password: '123456'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(login)
    }, 3000)
})