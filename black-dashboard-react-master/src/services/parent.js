import apiClient from "../utils/api"

const ParentService = {
    parent: async (payload, config) => {
        return (await apiClient.post('/parent',payload,config)).data
    }
}

export default ParentService;