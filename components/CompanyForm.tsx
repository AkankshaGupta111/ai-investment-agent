"use client";

import { useState } from "react";

interface Props {
  onAnalyze: (company: string) => void;
  loading: boolean;
}

export default function CompanyForm({
  onAnalyze,
  loading,
}: Props) {
  const [company, setCompany] = useState("");

  function handleClick() {
    const value = company.trim();

    if (!value) {
      alert("Please enter a company name.");
      return;
    }

    if (value.length < 2) {
      alert("Company name is too short.");
      return;
    }

    if (value.length > 30) {
      alert("Company name is too long.");
      return;
    }

    onAnalyze(value);
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">

      <h2 className="text-2xl font-bold mb-6 text-slate-800 text-center">
        Company Analysis
      </h2>

      <input
        type="text"
        placeholder="Enter Company Name (TSLA, MSFT, AAPL...)"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full border p-3 rounded-lg mb-4"
      />

      <button
        onClick={handleClick}
        disabled={loading}
        className={`w-full p-3 rounded-lg text-white transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Analyzing..." : "Analyze Company"}
      </button>

    </div>
  );
}