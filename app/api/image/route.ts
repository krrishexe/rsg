import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("u");
  if (!url) {
    return new Response("Missing 'u' query param", { status: 400 });
  }
  try {
    const upstream = await fetch(url, {
      // Some CDNs require a UA/Referer to serve assets
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
        Referer: "https://www.rajasthanroyals.com/",
      },
      cache: "no-store",
    });

    if (!upstream.ok) {
      return new Response(`Upstream error: ${upstream.status}`, {
        status: 502,
      });
    }

    const contentType = upstream.headers.get("content-type") || "image/jpeg";
    const buf = await upstream.arrayBuffer();

    return new Response(buf, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        // Cache in browser/CDN for a day
        "Cache-Control": "public, max-age=86400, immutable",
      },
    });
  } catch (e) {
    return new Response("Proxy error", { status: 500 });
  }
}

