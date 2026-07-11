import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance();

export async function getCompanyData(symbol: string) {
  try {
    const quote: any = await yahooFinance.quote(symbol);

    const history: any[] = await yahooFinance.historical(symbol, {
      period1: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      period2: new Date(),
      interval: "1d",
    });

    return {
      company: quote.longName ?? quote.shortName ?? symbol,
      symbol: quote.symbol,
      price: quote.regularMarketPrice,
      marketCap: quote.marketCap,
      peRatio: quote.trailingPE,
      currency: quote.currency,

      history: history.map((item) => ({
        date: item.date.toISOString().split("T")[0],
        close: item.close,
      })),
    };
  } catch (error) {
    console.error("Yahoo Finance Error:", error);
    return null;
  }
}