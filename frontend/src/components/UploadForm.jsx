import { useState } from "react";
import { analyzeClaim } from "../services/api";

export default function UploadForm({setLoading,setResult,}) {
    const [files, setFiles] = useState([]);

  const handleSubmit = async () => {

    try {

        setLoading(true);

        const result =
            await analyzeClaim(files);

        console.log("BACKEND RESPONSE:");
        console.log(result);

        setResult(result);

    } catch (error) {

        console.error(error);

    } finally {

        setLoading(false);

    }
};

    return (
        <div>

            <h1>PlumClaim AI</h1>

            <input
                type="file"
                multiple
                onChange={(e) =>
                    setFiles(
                        Array.from(e.target.files)
                    )
                }
            />

            <button onClick={handleSubmit}>
                Analyze Claim
            </button>

        </div>
    );
}