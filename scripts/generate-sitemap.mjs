import fs from "fs/promises";
import path from "path";

const baseUrl = "https://skywheelzs.in";
const routes = [
  "/",
  "/about-us",
  "/services",
  "/contact-us",
  "/drone-services-in-chennai-india",
  "/aerial-drone-services-in-chennai",
  "/drone-services-in-bangalore-skywheelzs",
  "/wedding-drone-services-in-kerala",
  "/beach-wedding-drone-services-andaman",
  "/luxury-drone-services-delhi-ncr"
];

const lastmod = new Date().toISOString();
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) =>
      `  <url>\n    <loc>${baseUrl}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
  )
  .join("\n")}
</urlset>`;

const distPath = path.resolve(process.cwd(), "dist", "sitemap.xml");

await fs.mkdir(path.dirname(distPath), { recursive: true });
await fs.writeFile(distPath, sitemapXml, "utf8");
console.log(`Sitemap generated: ${distPath}`);
