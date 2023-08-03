import apiClient from "../utils/api"

const summaryService = {
    summary: async () => {
        return (await apiClient.get('/summary/faskes')).data
    }
}

export default summaryService;