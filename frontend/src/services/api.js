import axios from "axios";

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
            "http://localhost:3000/api/claims/analyze",
            formData
        );

    return response.data;
};