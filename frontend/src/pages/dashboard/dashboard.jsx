import { useState } from "react";
import "./dashboard.css";
import UploadForm from "../../components/UploadForm/UploadForm.jsx";
import Processing from "../../components/Processing/Processing.jsx";
import ResultCard from "../../components/ResultCard/ResultCard.jsx";
import Header from "../../components/Header/Header.jsx";

export default function Dashboard() {

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);

  return (

    <div  className="dashboard">
      <Header/>
      <div className="main-container">
      {!loading && !result && (

        <UploadForm
          setLoading={setLoading}
          setResult={setResult}
        />

      )}

      {loading && (
        <Processing />
      )}

      {result && (
        <ResultCard
          result={result}
        />
      )}
     </div>
    </div>

  );
}
