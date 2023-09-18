import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4592ff85af5f483c9ab182e489ac54f7",
  },
});
