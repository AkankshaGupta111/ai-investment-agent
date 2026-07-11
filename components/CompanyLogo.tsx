interface Props {
  symbol: string;
}

export default function CompanyLogo({ symbol }: Props) {
  return (
    <div className="flex justify-center mb-6">
      <img
        src={`https://logo.clearbit.com/${symbol.toLowerCase()}.com`}
        alt={symbol}
        className="w-24 h-24 rounded-full shadow-lg border bg-white p-2"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}