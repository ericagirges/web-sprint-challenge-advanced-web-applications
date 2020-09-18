import axios from "axios";

export const fetchColors = () => {
    return axios
    .get("http://localhost:5000/api/colors")
    .then(res => {
        return (res.data)
    }) 
  }