import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Tommydemian/real-world-vue-3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    contentType: "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
