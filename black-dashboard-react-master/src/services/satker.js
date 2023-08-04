import apiClient from "../utils/api"

const SatkerService = {
    satker: async (payload, config) => {
        return (await apiClient.post('/satker',payload,config)).data
    }
}

export default SatkerService;