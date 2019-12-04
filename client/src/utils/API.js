import axios from "axios";

export default {
  // Logins a user
  login: function (userData) {
    return axios.post("users/login", userData);
  },
  // Creates a user
  signUp: function (userData) {
    return axios.post("users/", userData);
  },
  getUser: function (userData) {
    return axios.get("users/" + userData);
  },
  updateUser: function (userId, userData) {
    return axios.put("users/" + userId, userData);
  }
};
