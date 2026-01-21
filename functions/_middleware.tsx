import React from "react";
import vercelOGPagesPlugin from "@cloudflare/pages-plugin-vercel-og";

export const onRequest = vercelOGPagesPlugin({
  imagePathSuffix: "/social-image.png",
  component: ({ title, siteTitle }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "#fdfdfd", // --minima-background-color
        padding: "80px",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      {/* Garis aksen atas mirip border di Minima */}
      <div 
        style={{ 
          display: "flex",
          position: "absolute", 
          top: 0, 
          left: 0, 
          right: 0, 
          height: "8px", 
          backgroundColor: "#e7e7e7" // --minima-border-color-01
        }} 
      />

      {/* Judul Situs (Site Title) */}
      <div
        style={{
          fontSize: "24px",
          color: "#818181", // --minima-brand-color
          marginBottom: "20px",
          fontWeight: "normal",
        }}
      >
        {siteTitle || "My Jekyll Blog"}
      </div>

      {/* Judul Postingan (Heading) */}
      <div
        style={{
          display: "flex",
          fontSize: "65px",
          fontWeight: "bold",
          color: "#111", // --minima-heading-color
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </div>

      {/* Link simulasi atau aksen bawah */}
      <div
        style={{
          display: "flex",
          marginTop: "40px",
          fontSize: "20px",
          color: "#1e69d8", // --minima-link-base-color
          borderBottom: "1px solid #1e69d8",
          width: "fit-content",
        }}
      >
        read more
      </div>
    </div>
  ),
  extractors: {
    on: {
      // Mengambil Judul Postingan
      "meta[property='og:title']": (element) => ({
        title: element.getAttribute("content"),
      }),
      // Mengambil Nama Situs (biasanya ada di og:site_name dari jekyll-seo-tag)
      "meta[property='og:site_name']": (element) => ({
        siteTitle: element.getAttribute("content"),
      }),
    },
  },
  autoInject: {
    openGraph: true,
  },
});
