import apiClient from "../utils/api"

const MonitorService = {
    monitor: async (payload) => {
        return (await apiClient.post('/monitoring',payload)).data
    }
}

export default MonitorService;