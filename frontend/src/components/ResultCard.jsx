export default function ResultCard({ result }) {
  return (
    <div>
      <h1>Claim Result</h1>

      <h2>{result.decision}</h2>
    </div>
  );
}