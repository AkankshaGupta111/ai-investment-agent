// interface Props {
//   result: any;
// }

// export default function ResultCard({ result }: Props) {
//   if (!result) return null;

//   const { finance, analysis } = result;

//   return (
//     <div className="bg-white mt-8 p-8 rounded-xl shadow-lg w-full max-w-3xl">

//       <h2 className="text-3xl font-bold mb-6">
//         {finance.company}
//       </h2>

//       <div className="grid grid-cols-2 gap-4 mb-8">

//         <div className="bg-slate-100 p-4 rounded-lg">
//           <p className="text-gray-500">Symbol</p>
//           <h3 className="text-xl font-bold">{finance.symbol}</h3>
//         </div>

//         <div className="bg-slate-100 p-4 rounded-lg">
//           <p className="text-gray-500">Current Price</p>
//           <h3 className="text-xl font-bold">
//             {finance.price} {finance.currency}
//           </h3>
//         </div>

//         <div className="bg-slate-100 p-4 rounded-lg">
//           <p className="text-gray-500">Market Cap</p>
//           <h3 className="text-xl font-bold">
//             {finance.marketCap?.toLocaleString()}
//           </h3>
//         </div>

//         <div className="bg-slate-100 p-4 rounded-lg">
//           <p className="text-gray-500">P/E Ratio</p>
//           <h3 className="text-xl font-bold">
//             {finance.peRatio}
//           </h3>
//         </div>

//       </div>

//       <div className="mb-6">
//         <h3 className="text-xl font-bold">
//           Decision
//         </h3>

//         <p className={`text-2xl font-bold ${
//           analysis.decision === "INVEST"
//             ? "text-green-600"
//             : "text-red-600"
//         }`}>
//           {analysis.decision}
//         </p>
//       </div>

//       <div className="mb-6">
//         <h3 className="text-xl font-bold">
//           Confidence
//         </h3>

//         <p>{analysis.confidence}%</p>
//       </div>

//       <div className="mb-6">
//         <h3 className="text-xl font-bold">
//           Summary
//         </h3>

//         <p>{analysis.summary}</p>
//       </div>

//       <div className="mb-6">
//         <h3 className="text-xl font-bold">
//           Pros
//         </h3>

//         <ul className="list-disc ml-6">
//           {analysis.pros?.map((pro: string, index: number) => (
//             <li key={index}>{pro}</li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h3 className="text-xl font-bold">
//           Cons
//         </h3>

//         <ul className="list-disc ml-6">
//           {analysis.cons?.map((con: string, index: number) => (
//             <li key={index}>{con}</li>
//           ))}
//         </ul>
//       </div>

//     </div>
//   );
// }



import StockChart from "./StockChart";
import DownloadPDF from "./DownloadPDF";
import CompanyLogo from "./CompanyLogo";
import { ResultData } from "../types";

interface Props {
  result: ResultData | null;
}

export default function ResultCard({ result }: Props) {
  if (!result) return null;

  const { finance, analysis, news } = result;

  return (
    <div className="bg-white mt-8 p-8 rounded-2xl shadow-xl w-full max-w-5xl">

      {/* Company Logo */}
      <CompanyLogo symbol={finance.symbol} />

      {/* Company Name */}
      <h2 className="text-4xl font-bold mb-8 text-center">
        {finance.company}
      </h2>

      {/* Financial Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">

        <div className="bg-blue-50 p-5 rounded-xl text-center shadow hover:shadow-lg transition">
          <p className="text-gray-500">Symbol</p>
          <h3 className="text-2xl font-bold">
            {finance.symbol}
          </h3>
        </div>

        <div className="bg-green-50 p-5 rounded-xl text-center shadow hover:shadow-lg transition">
          <p className="text-gray-500">Current Price</p>
          <h3 className="text-2xl font-bold">
            {finance.price} {finance.currency}
          </h3>
        </div>

        <div className="bg-yellow-50 p-5 rounded-xl text-center shadow hover:shadow-lg transition">
          <p className="text-gray-500">Market Cap</p>
          <h3 className="text-lg font-bold break-words">
            {finance.marketCap?.toLocaleString()}
          </h3>
        </div>

        <div className="bg-purple-50 p-5 rounded-xl text-center shadow hover:shadow-lg transition">
          <p className="text-gray-500">P/E Ratio</p>
          <h3 className="text-2xl font-bold">
            {finance.peRatio}
          </h3>
        </div>

      </div>

      {/* Stock Chart */}
      <div className="mb-10">

        <h3 className="text-2xl font-bold mb-5">
          📈 Last 30 Days Stock Price
        </h3>

        <StockChart history={finance.history} />

      </div>

      {/* Latest News */}
      <div className="mb-10">

        <h3 className="text-2xl font-bold mb-5">
          📰 Latest News
        </h3>

        <div className="space-y-4">

          {news?.length > 0 ? (
            news.map((article, index) => (
              <div
                key={index}
                className="border rounded-xl p-5 hover:bg-slate-50 hover:shadow-md transition"
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-600 hover:underline"
                >
                  {article.title}
                </a>

                <p className="text-gray-500 mt-2">
                  {article.source}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No recent news available.
            </p>
          )}

        </div>

      </div>

      {/* AI Recommendation */}
      <div className="mb-8">

        <h3 className="text-2xl font-bold mb-4">
          🤖 AI Recommendation
        </h3>

        <span
          className={`inline-block px-6 py-3 rounded-full text-white text-xl font-bold ${
            analysis.decision === "INVEST"
              ? "bg-green-600"
              : "bg-red-600"
          }`}
        >
          {analysis.decision}
        </span>

      </div>

      {/* Confidence */}
      <div className="mb-8">

        <h3 className="text-2xl font-bold mb-2">
          Confidence
        </h3>

        <p className="text-xl font-semibold text-blue-700">
          {analysis.confidence}%
        </p>

      </div>

      {/* Summary */}
      <div className="mb-8">

        <h3 className="text-2xl font-bold mb-2">
          Summary
        </h3>

        <p className="leading-8 text-gray-700">
          {analysis.summary}
        </p>

      </div>

      {/* Pros */}
      <div className="mb-8">

        <h3 className="text-2xl font-bold text-green-700 mb-3">
          ✅ Pros
        </h3>

        <ul className="list-disc ml-6 space-y-2">
          {analysis.pros.map((pro, index) => (
            <li key={index}>{pro}</li>
          ))}
        </ul>

      </div>

      {/* Cons */}
      <div className="mb-8">

        <h3 className="text-2xl font-bold text-red-700 mb-3">
          ❌ Cons
        </h3>

        <ul className="list-disc ml-6 space-y-2">
          {analysis.cons.map((con, index) => (
            <li key={index}>{con}</li>
          ))}
        </ul>

      </div>

      {/* Disclaimer */}
      <div className="border-t pt-6">

        <p className="text-sm text-gray-500 italic text-center">
          Disclaimer: This report is AI-generated using live financial data and recent news.
          It is intended for educational purposes only and should not be considered financial advice.
        </p>

      </div>

      {/* Download PDF */}
      <div className="mt-8 flex justify-center">
        <DownloadPDF result={result} />
      </div>

    </div>
  );
}