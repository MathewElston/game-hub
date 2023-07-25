import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "3c3e5ab1823a4942a8d3952603e65a39"
    }
})
