/* eslint-disable no-useless-catch */
import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/login`, {
      nom_utilisateur: username,
      password: password,
    });

    return response.data.token;
  } catch (error) {
    throw error;
  }
};

export default {
  login,
};
