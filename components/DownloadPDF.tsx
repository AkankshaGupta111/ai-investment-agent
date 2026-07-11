"use client";

import jsPDF from "jspdf";

interface Props {
  result: any;
}

export default function DownloadPDF({ result }: Props) {
  if (!result) return null;

  const { finance, analysis } = result;

  const generatePDF = () => {
    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(22);
    doc.text("AI Investment Report", 20, y);

    y += 15;

    doc.setFontSize(14);
    doc.text(`Company: ${finance.company}`, 20, y);

    y += 10;
    doc.text(`Symbol: ${finance.symbol}`, 20, y);

    y += 10;
    doc.text(`Current Price: ${finance.price} ${finance.currency}`, 20, y);

    y += 10;
    doc.text(`Market Cap: ${finance.marketCap}`, 20, y);

    y += 10;
    doc.text(`P/E Ratio: ${finance.peRatio}`, 20, y);

    y += 15;

    doc.setFontSize(18);
    doc.text("AI Recommendation", 20, y);

    y += 12;

    doc.setFontSize(13);
    doc.text(`Decision: ${analysis.decision}`, 20, y);

    y += 10;
    doc.text(`Confidence: ${analysis.confidence}%`, 20, y);

    y += 15;

    doc.setFontSize(16);
    doc.text("Summary", 20, y);

    y += 10;

    const summary = doc.splitTextToSize(
      analysis.summary,
      170
    );

    doc.text(summary, 20, y);

    y += summary.length * 8 + 10;

    doc.setFontSize(16);
    doc.text("Pros", 20, y);

    y += 10;

    analysis.pros.forEach((pro: string) => {
      const lines = doc.splitTextToSize(`• ${pro}`, 170);
      doc.text(lines, 20, y);
      y += lines.length * 8;
    });

    y += 10;

    doc.setFontSize(16);
    doc.text("Cons", 20, y);

    y += 10;

    analysis.cons.forEach((con: string) => {
      const lines = doc.splitTextToSize(`• ${con}`, 170);
      doc.text(lines, 20, y);
      y += lines.length * 8;
    });

    y += 15;

    doc.setFontSize(10);
    doc.text(
      `Generated on: ${new Date().toLocaleString()}`,
      20,
      y
    );

    doc.save(`${finance.symbol}-Investment-Report.pdf`);
  };

  return (
    <button
      onClick={generatePDF}
      className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
    >
      📄 Download Report PDF
    </button>
  );
}