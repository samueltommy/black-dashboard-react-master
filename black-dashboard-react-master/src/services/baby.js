import apiClient from "../utils/api"

const BabyService = {
    baby: async (payload, config) => {
        return (await apiClient.post('/baby',payload,config)).data
    }
}

export default BabyService;