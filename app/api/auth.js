import client from "./client";

const login = (email, password) => {
  return client.post("/auth", { email, password });
};

const register = (userInfo) => {
  return client.post("/users", userInfo);
};

export default {
  login,
  register,
};
