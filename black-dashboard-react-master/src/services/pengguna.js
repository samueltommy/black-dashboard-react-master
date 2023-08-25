import apiClient from "../utils/api"

const PenggunaService = {
    pengguna: async (payload, config) => {
        return (await apiClient.get('/parent',payload,config)).data
    }
}

export default PenggunaService;