import apiClient from "../utils/api"

const UsersService = {
    users: async (payload, config) => {
        return (await apiClient.post('/users',payload,config)).data
    }
}

export default UsersService;