const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const { Readable } = require("stream");

const links = [
  { url: "/", changefreq: "monthly", priority: 1 },
  { url: "/marketplace", changefreq: "monthly", priority: 0.7 },
  { url: "/hospedaje", changefreq: "monthly", priority: 0.7 },
  { url: "/transporte", changefreq: "monthly", priority: 0.7 },
  // Add more pages as needed
];

const stream = new SitemapStream({
  hostname: "https://mangohouse.netlify.app",
});

// Pipe the generated sitemap to a write stream (to write it to a file)
stream.pipe(createWriteStream("client/public/sitemap.xml"));

// Use a Readable to push your links into the SitemapStream
const linksStream = new Readable({
  read() {
    this.push(links.pop() || null);
  },
});

linksStream.pipe(stream).on("end", () => {
  console.log("Sitemap created successfully");
});
