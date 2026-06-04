export default function ResultCard({ result }) {

    return (
        <div>

            <h1>Claim Result</h1>

            <h2>
                {result.decision.decision}
            </h2>

            <p>
                {result.decision.reason}
            </p>

            <hr />

            <h3>Extracted Data</h3>

            <pre>
                {
                    JSON.stringify(
                        result.extractedData,
                        null,
                        2
                    )
                }
            </pre>

        </div>
    );
}