import { analyzeClaim } from "../services/api";

export default function UploadForm({
  setLoading,
  setResult,
}) {

  const handleSubmit = async () => {

    try {

      setLoading(true);

      const result =
        await analyzeClaim();

      setResult(result);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div>

      <h1>PlumClaim AI</h1>

      <button onClick={handleSubmit}>
        Analyze Claim
      </button>

    </div>
  );
}