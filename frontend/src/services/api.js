/* import axios from "axios";

export const analyzeClaim =
async (files) => {

    const formData =
        new FormData();

    files.forEach(file => {
        formData.append(
            "documents",
            file
        );
    });

    const response =
        await axios.post(
           "https://claimpilot-ai-04z9.onrender.com/api/claims/analyze",
            formData
        );

    return response.data;
}; */
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default API;