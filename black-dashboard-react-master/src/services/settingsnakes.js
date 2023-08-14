import apiClient from "../utils/api"

const SettingsNakesService = {
    settingsnakes: async (payload, config) => {
        const userId = localStorage.getItem('id');

        const respon = await fetch('https://staging-antro.srv.kirei.co.id/nakes', config)
        const responData = await respon.json();
        console.log('Data fetched:', responData);

        // Find the object that matches the user_id
        const matchingObject = responData.data.data.find(obj => obj.user_id === userId);

        if (matchingObject) {
            const idFromUserId = matchingObject.id;
            console.log('ID from User ID:', idFromUserId);

            const redirectUrl = `https://staging-antro.srv.kirei.co.id/nakes/${idFromUserId}`;
            console.log('Redirect URL:', redirectUrl);

            const response = await apiClient.put(redirectUrl, payload, config);

            return response.data;
        }
    }
}

export default SettingsNakesService;