import { useState } from "react";
import UploadForm from "../components/UploadForm";
import Processing from "../components/Processing";
import ResultCard from "../components/ResultCard";


export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  return (
    <div>
      {!loading && !result && (
        <UploadForm
          setLoading={setLoading}
          setResult={setResult}
        />
      )}

      {loading && <Processing />}

      {result && <ResultCard result={result} />}
    </div>
  );
}