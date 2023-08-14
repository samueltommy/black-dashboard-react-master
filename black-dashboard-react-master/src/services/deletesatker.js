import apiClient from "../utils/api"

const DeleteSatkerService = {
    deletesatker: async (payload, config) => {
        const userId = localStorage.getItem('inputId'); // Update this line to use 'inputId'

        if (!userId) {
            console.error('Input ID not found in local storage.');
            return;
        }

        if (userId) {
            console.log('ID from User ID:', userId);

            const redirectUrl = `https://staging-antro.srv.kirei.co.id/satker/${userId}`;
            console.log('Redirect URL:', redirectUrl);

            const response = await apiClient.delete(redirectUrl, payload, config);

            return response.data;
        } else {
            console.error('Matching object not found for the given user ID.');
        }
    }
}

export default DeleteSatkerService;
