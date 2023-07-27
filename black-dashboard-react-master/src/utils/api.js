import axios from "axios";

const apiClient = axios.create({
    baseURL: `https://staging-antro.srv.kirei.co.id`,
    header: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    credential: true
})

export default apiClient