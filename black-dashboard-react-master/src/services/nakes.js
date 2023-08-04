import apiClient from "../utils/api"

const NakesService = {
    nakes: async (payload, config) => {
        return (await apiClient.post('/nakes',payload,config)).data
    }
}

export default NakesService;