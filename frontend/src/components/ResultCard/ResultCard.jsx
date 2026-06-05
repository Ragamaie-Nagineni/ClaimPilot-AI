import "./ResultCard.css";

export default function ResultCard({ result }) {
    
    const decision =
        result?.decision?.decision || "UNKNOWN";

    const amount =
        result?.decision?.approvedAmount || 0;

    const confidence =
        result?.decision?.confidence_score || 0.95;

    const reasons =
        result?.decision?.rejection_reasons || [];

    const data =
        result?.extractedData || {};

    return (

        <div className="result-container">
            <div className="claim-id">
            Claim ID: {
                result?.claim_id ||
                result?.decision?.claim_id ||
                `CLM-${Date.now()}`
            }
        </div>
            <div
                className={`result-status ${
                    decision.toLowerCase()
                }`}
            >

                <h1>
                    {decision}
                </h1>

                <p>
                    Claim adjudication completed
                </p>

            </div>

            <div className="summary-grid">

                <div className="summary-card">

                    <span>
                        Approved Amount
                    </span>

                    <h2>
                        ₹{amount}
                    </h2>

                </div>

                <div className="summary-card">

                    <span>
                        Confidence
                    </span>

                    <h2>
                        {Math.round(
                            confidence * 100
                        )}%
                    </h2>

                </div>

            </div>

            {reasons.length > 0 && (

                <div className="reasons-card">

                    <h3>
                        Rejection Reasons
                    </h3>

                    {reasons.map(
                        (reason, index) => (

                            <div
                                key={index}
                                className="reason"
                            >
                                ⚠️ {reason}
                            </div>

                        )
                    )}

                </div>

            )}

            <div className="data-card">

                <h3>
                    Extracted Claim Information
                </h3>

                <div className="data-grid">

                    <div>
                        <strong>
                            Patient
                        </strong>
                        <span>
                            {data.patientName || "-"}
                        </span>
                    </div>

                    <div>
                        <strong>
                            Doctor
                        </strong>
                        <span>
                            {data.doctorName || "-"}
                        </span>
                    </div>

                    <div>
                        <strong>
                            Registration
                        </strong>
                        <span>
                            {data.doctorReg || "-"}
                        </span>
                    </div>

                    <div>
                        <strong>
                            Diagnosis
                        </strong>
                        <span>
                            {data.diagnosis || "-"}
                        </span>
                    </div>

                    <div>
                        <strong>
                            Hospital
                        </strong>
                        <span>
                            {data.hospital || "-"}
                        </span>
                    </div>

                    <div>
                        <strong>
                            Amount
                        </strong>
                        <span>
                            ₹{data.claimAmount || 0}
                        </span>
                    </div>

                </div>

            </div>

        </div>
    );
}