import type { NextApiRequest, NextApiResponse } from "next";
import RSSParser from "rss-parser";

const parser = new RSSParser();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Cache-Control", "no-store");
  try {
    const feed = await parser.parseURL("http://feeds.bbci.co.uk/news/rss.xml");
    res.status(200).json(feed.items);
  } catch (error) {
    console.log('Failed to fetch', error);
    res.status(500).json({ error: "Failed to fetch RSS feed" });
  }
}
