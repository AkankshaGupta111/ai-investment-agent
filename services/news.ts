export async function getCompanyNews(company: string) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        company
      )}&pageSize=5&sortBy=publishedAt&language=en&apiKey=${process.env.NEWS_API_KEY}`
    );

    const data = await response.json();

    if (!data.articles) {
      return [];
    }

    return data.articles.map((article: any) => ({
      title: article.title,
      source: article.source.name,
      publishedAt: article.publishedAt,
      url: article.url,
    }));
  } catch (error) {
    console.error("News API Error:", error);
    return [];
  }
}