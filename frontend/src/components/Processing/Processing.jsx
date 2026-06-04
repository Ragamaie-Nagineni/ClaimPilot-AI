import "./Processing.css";

export default function Processing() {

    return (

        <div className="processing-container">

            <div className="processing-card">

                <div className="spinner"></div>

                <h2>
                    Analyzing Claim...
                </h2>

                <p>
                    ClaimPilot AI is processing
                    your documents
                </p>

                <div className="steps">

                    <div className="step">
                        📄 Reading Documents
                    </div>

                    <div className="step">
                        🤖 Extracting Information
                    </div>

                    <div className="step">
                        📋 Validating Policy Rules
                    </div>

                    <div className="step">
                        🛡 Running Fraud Checks
                    </div>

                    <div className="step">
                        ✅ Generating Decision
                    </div>

                </div>

            </div>

        </div>
    );
}