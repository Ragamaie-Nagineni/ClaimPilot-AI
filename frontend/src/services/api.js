import axios from "axios";

export const analyzeClaim = async () => {

    const response = await axios.post(
        "http://localhost:3000/api/claims/analyze"
    );

    return response.data;
};