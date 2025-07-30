import axios from "axios";
import { login } from "./api";

const API_URL = "http://localhost:8080/login";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
