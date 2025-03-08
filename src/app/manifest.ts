import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "gram.blue",
    short_name: "gram.blue",
    description: "Bluesky web client designed to looke like classic Instagram",
    start_url: "/dashboard/home",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#115688",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
