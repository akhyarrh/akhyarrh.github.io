import React from "react";
import vercelOGPagesPlugin from "@cloudflare/pages-plugin-vercel-og";

/**
 * Define the properties extracted from the HTML meta tags.
 * These will be passed to the React component.
 */
interface Props {
  title: string;
  siteTitle: string;
}

export const onRequest = vercelOGPagesPlugin<Props>({
  /**
   * The suffix for the auto-generated image URL.
   * If your Jekyll URLs end with a trailing slash (e.g., /my-post/),
   * this will result in /my-post/social-image.png
   */
  imagePathSuffix: "social-image.png",

  /**
   * The React component that defines the Open Graph image design.
   * Styled using Minima-inspired CSS variables.
   */
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
      {/* Top border accent matching Minima style */}
      <div 
        style={{ 
          display: "flex",
          position: "absolute", 
          top: 0, 
          left: 0, 
          right: 0, 
          height: "10px", 
          backgroundColor: "#e7e7e7" // --minima-border-color-01
        }} 
      />

      {/* Site Title */}
      <div
        style={{
          fontSize: "26px",
          color: "#818181", // --minima-brand-color
          marginBottom: "20px",
          fontWeight: "normal",
        }}
      >
        {siteTitle || "Blog"}
      </div>

      {/* Post Title */}
      <div
        style={{
          display: "flex",
          fontSize: "68px",
          fontWeight: "bold",
          color: "#111", // --minima-heading-color
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
        }}
      >
        {title || "Untitled Post"}
      </div>

      {/* "Read more" link simulation */}
      <div
        style={{
          display: "flex",
          marginTop: "40px",
          fontSize: "22px",
          color: "#1e69d8", // --minima-link-base-color
          borderBottom: "1px solid #1e69d8",
        }}
      >
        read more
      </div>
    </div>
  ),

  /**
   * Extract data from Jekyll's generated HTML.
   * Uses Cloudflare's HTMLRewriter API to find meta tags.
   */
  extractors: {
    on: {
      'meta[property="og:title"]': (props) => ({
        element(element) {
          // Extracts the content attribute from <meta property="og:title" content="...">
          props.title = element.getAttribute("content") || "";
        },
      }),
      'meta[property="og:site_name"]': (props) => ({
        element(element) {
          // Extracts the content attribute from <meta property="og:site_name" content="...">
          props.siteTitle = element.getAttribute("content") || "";
        },
      }),
    },
  },

  /**
   * Automatically inject <meta property="og:image"> tags 
   * into the <head> if they are missing.
   */
  autoInject: {
    openGraph: true,
  },
});
