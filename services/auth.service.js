import api from "./api";
import Tokenservice from "./token.service";

const API_URL = "/api/v1/auth";

const register = async (username, email, password) => {
  return await api.post(API_URL + "/signup", { username, email, password });
};

const AuthService = {
  register,
};

export default AuthService;
