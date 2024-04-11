import axios from "axios"

const clienteAxios = axios.create({
 baseURL: "https://api.landing.flagasamascotas.com"
 //baseURL: "http://localhost:4000"
})

const clienteAxios2 = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    baseURL: "https://api.instagram.com"
   })

export  {clienteAxios, clienteAxios2}




