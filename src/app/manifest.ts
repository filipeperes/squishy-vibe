import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Squishy Vibe", short_name: "Squishy Vibe", description: "A global guide to squishy toys", start_url: "/en", display: "standalone", background_color: "#fffbf5", theme_color: "#7153e8", icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }] };
}
