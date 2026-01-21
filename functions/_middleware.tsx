import React from "react";
import vercelOGPagesPlugin from "@cloudflare/pages-plugin-vercel-og";

export const onRequest = vercelOGPagesPlugin({
  // Gunakan nama file saja untuk menghindari double slash //
  imagePathSuffix: "social-image.png",
  
  component: ({ title, siteTitle }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "#fdfdfd",
        padding: "80px",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", position: "absolute", top: 0, left: 0, right: 0, height: "8px", backgroundColor: "#e7e7e7" }} />
      <div style={{ fontSize: "24px", color: "#818181", marginBottom: "20px" }}>
        {siteTitle || "Blog"}
      </div>
      <div style={{ display: "flex", fontSize: "65px", fontWeight: "bold", color: "#111", lineHeight: 1.2 }}>
        {title || "Untitled Post"}
      </div>
      <div style={{ display: "flex", marginTop: "40px", fontSize: "20px", color: "#1e69d8" }}>
        read more...
      </div>
    </div>
  ),
  
  extractors: {
    on: {
      "meta[property='og:title']": (element) => ({
        title: element.getAttribute("content")
      }),
      "meta[property='og:site_name']": (element) => ({
        siteTitle: element.getAttribute("content")
      }),
    },
  },
  autoInject: {
    openGraph: true,
  },
});
