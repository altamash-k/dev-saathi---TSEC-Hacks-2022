import axios from '../axiosConfig'

export const updateProfile = async (data) =>
    await axios.post('/update-user', { ...data })