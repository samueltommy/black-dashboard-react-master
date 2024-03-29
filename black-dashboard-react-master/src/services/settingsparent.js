import apiClient from "../utils/api"

const SettingsParentService = {
    settingsparent: async (payload, config) => {
        const userId = localStorage.getItem('inputId'); // Update this line to use 'inputId'

        if (!userId) {
            console.error('Input ID not found in local storage.');
            return;
        }

        if (userId) {
            console.log('ID from User ID:', userId);

            const redirectUrl = `https://staging-antro.srv.kirei.co.id/parent/${userId}`;
            console.log('Redirect URL:', redirectUrl);

            const response = await apiClient.put(redirectUrl, payload, config);

            return response.data;
        } else {
            console.error('Matching object not found for the given user ID.');
        }
    }
}

export default SettingsParentService;
