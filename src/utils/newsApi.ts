export interface Article {
    source: { id: string | null; name: string };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export async function fetchNews(): Promise<Article[]> {
    const apiKey = process.env.API_KEY;
    console.log('apiKey: ', apiKey);
    const response = await fetch(`https://newsapi.org/v2/everything?domains=readwrite.com&pageSize=5&apiKey=${apiKey}`);
    const data = await response.json();
    console.log()
    return data.articles;
}