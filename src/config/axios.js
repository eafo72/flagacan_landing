import axios from "axios"

const clienteAxios = axios.create({
 baseURL: "https://api.landing.flagasamascotas.com"
 //baseURL: "http://localhost:4000"
})

export default clienteAxios