
// "use client";

// import { useState } from "react";
// import CompanyForm from "../components/CompanyForm";
// import ResultCard from "../components/ResultCard";
// import { ResultData } from "../types";

// export default function Home() {
//   const [result, setResult] = useState<ResultData | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [history, setHistory] = useState<ResultData[]>([]);

//   async function handleAnalyze(name: string) {
//     if (!name) return;

//     try {
//       setLoading(true);

//       const response = await fetch("/api/analyze", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           company: name,
//         }),
//       });

//       const data = await response.json();

//       console.log(data);

//       if (data.error) {
//         alert(data.error);
//         return;
//       }

//       setResult(data);

//       setHistory((prev) => {
//         const updated = [
//           data,
//           ...prev.filter(
//             (item) => item.finance.symbol !== data.finance.symbol
//           ),
//         ];

//         return updated.slice(0, 5);
//       });
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 flex flex-col items-center py-16 px-4">

//       <h1 className="text-5xl font-bold text-blue-700 mb-2 text-center">
//         AI Investment Research Agent
//       </h1>

//       <p className="text-gray-600 mb-10 text-center">
//         Analyze companies using AI and get investment recommendations.
//       </p>

//       {/* <CompanyForm onAnalyze={handleAnalyze} /> */}
//       <CompanyForm
//   onAnalyze={handleAnalyze}
//   loading={loading}
// />

//       {loading && (
//         <div className="mt-10 flex flex-col items-center">

//           <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-blue-600"></div>

//           <p className="mt-5 text-lg font-semibold text-blue-700">
//             AI is analyzing the company...
//           </p>

//         </div>
//       )}

//       {!loading && history.length > 0 && (
//         <div className="w-full max-w-5xl mt-10">

//           <h2 className="text-2xl font-bold mb-4">
//             📜 Recent Analysis
//           </h2>

//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

//             {history.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => setResult(item)}
//                 className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:bg-blue-50 hover:shadow-lg transition"
//               >
//                 <h3 className="font-bold">
//                   {item.finance.company}
//                 </h3>

//                 <p className="text-sm text-gray-500">
//                   {item.finance.symbol}
//                 </p>

//                 <p
//                   className={`mt-2 font-semibold ${
//                     item.analysis.decision === "INVEST"
//                       ? "text-green-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   {item.analysis.decision}
//                 </p>
//               </div>
//             ))}

//           </div>

//         </div>
//       )}

//       {!loading && <ResultCard result={result} />}

//       {/* Footer */}

//       <footer className="mt-16 text-center text-gray-500 border-t pt-6 w-full max-w-5xl">

//         <p className="font-semibold text-lg">
//           AI Investment Research Agent
//         </p>

//         <p className="mt-2">
//           Powered by Gemini AI • Yahoo Finance • NewsAPI • LangChain
//         </p>

//         <p className="mt-2 text-sm">
//           © 2026 Akanksha Gupta. All Rights Reserved.
//         </p>

//       </footer>

//     </main>
//   );
// }






"use client";

import { useState } from "react";
import CompanyForm from "../components/CompanyForm";
import ResultCard from "../components/ResultCard";
import { ResultData } from "../types";

export default function Home() {
  const [result, setResult] = useState<ResultData | null>(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<ResultData[]>([]);

  async function handleAnalyze(name: string) {
    if (!name) return;

    try {
      setLoading(true);

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: name,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Something went wrong.");
        return;
      }

      setResult(data);

      setHistory((prev) => {
        const updated = [
          data,
          ...prev.filter(
            (item) => item.finance.symbol !== data.finance.symbol
          ),
        ];

        return updated.slice(0, 5);
      });

    } catch (error) {
      console.error(error);

      alert(
        "Unable to connect to the server. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 flex flex-col items-center py-16 px-4">

      <h1 className="text-5xl font-bold text-blue-700 mb-2 text-center">
        AI Investment Research Agent
      </h1>

      <p className="text-gray-600 mb-10 text-center">
        Analyze companies using AI and get investment recommendations.
      </p>

      <CompanyForm
        onAnalyze={handleAnalyze}
        loading={loading}
      />

      {loading && (
        <div className="mt-10 flex flex-col items-center">

          <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-blue-600"></div>

          <p className="mt-5 text-lg font-semibold text-blue-700">
            AI is analyzing the company...
          </p>

        </div>
      )}

      {!loading && history.length > 0 && (
        <div className="w-full max-w-5xl mt-10">

          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            📜 Recent Analysis
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

            {history.map((item, index) => (
              <div
                key={index}
                onClick={() => setResult(item)}
                className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:bg-blue-50 hover:shadow-lg transition"
              >
                <h3 className="font-bold">
                  {item.finance.company}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.finance.symbol}
                </p>

                <p
                  className={`mt-2 font-semibold ${
                    item.analysis.decision === "INVEST"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.analysis.decision}
                </p>
              </div>
            ))}

          </div>

        </div>
      )}

      {!loading && (
        <ResultCard result={result} />
      )}

      <footer className="mt-16 text-center text-gray-500 border-t pt-6 w-full max-w-5xl">

        <p className="font-semibold text-lg">
          AI Investment Research Agent
        </p>

        <p className="mt-2">
          Powered by Gemini AI • Yahoo Finance • NewsAPI • LangChain
        </p>

        <p className="mt-2 text-sm">
          © 2026 Akanksha Gupta. All Rights Reserved.
        </p>

      </footer>

    </main>
  );
}