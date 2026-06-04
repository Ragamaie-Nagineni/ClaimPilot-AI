import { useState } from "react";
import { analyzeClaim } from "../../services/api";
import "./UploadForm.css";

export default function UploadForm({
    setLoading,
    setResult
}) {

    const [files, setFiles] = useState([]);

    const handleSubmit = async () => {

        if (files.length === 0) {
            alert("Please upload a document");
            return;
        }

        try {

            setLoading(true);

            const result =
                await analyzeClaim(files);

            setResult(result);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="upload-container">

            <div className="upload-card">

                <h2>
                    Upload Claim Documents
                </h2>

                <p>
                    Upload prescriptions, bills,
                    invoices, or claim PDFs for
                    AI-powered adjudication.
                </p>

                <label
                    htmlFor="claim-upload"
                    className="upload-box"
                >
                    <div className="upload-icon">
                        📄
                    </div>

                    <h3>
                        Drag & Drop Files
                    </h3>

                    <span>
                        or click to browse
                    </span>

                    <input
                        id="claim-upload"
                        type="file"
                        multiple
                        hidden
                        onChange={(e) =>
                            setFiles(
                                Array.from(
                                    e.target.files
                                )
                            )
                        }
                    />
                </label>

                {files.length > 0 && (

                    <div className="file-list">

                        <h4>
                            Uploaded Files
                        </h4>

                        {files.map(
                            (file, index) => (

                                <div
                                    key={index}
                                    className="file-item"
                                >
                                    📎 {file.name}
                                </div>

                            )
                        )}

                    </div>

                )}

                <button
                    className="analyze-btn"
                    onClick={handleSubmit}
                >
                    Analyze Claim
                </button>

            </div>

        </div>
    );
}