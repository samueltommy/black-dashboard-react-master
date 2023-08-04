import apiClient from "../utils/api"

const MonitorService = {
    monitor: async (payload, config) => {
        return (await apiClient.post('/monitoring',payload,config)).data
    }
}

export default MonitorService;