import React from "react";
import vercelOGPagesPlugin from "@cloudflare/pages-plugin-vercel-og";

/**
 * Define the properties extracted from the HTML meta tags.
 */
interface Props {
  title: string;
  siteTitle: string;
}

export const onRequest = vercelOGPagesPlugin<Props>({
  /**
   * Use 'social-image.png'. 
   * If Jekyll URLs end in '/', this becomes /post-title/social-image.png
   */
  imagePathSuffix: "social-image.png",

  component: ({ title, siteTitle }) => {
    // Constants for fallback and theme
    const FALLBACK_SITE_TITLE = "Blog";
    const FALLBACK_POST_TITLE = "Untitled Post";

    const theme = {
      backgroundColor: "#fdfdfd", // --minima-background-color
      borderColor: "#e7e7e7",     // --minima-border-color-01
      brandColor: "#818181",      // --minima-brand-color
      headingColor: "#111",       // --minima-heading-color
      linkColor: "#1e69d8",       // --minima-link-base-color
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: theme.backgroundColor,
          padding: "80px",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative", // Ensures absolute children are placed correctly
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
            backgroundColor: theme.borderColor
          }} 
        />

        {/* Site Title */}
        <div
          style={{
            display: "flex",
            fontSize: "26px",
            color: theme.brandColor,
            marginBottom: "20px",
            fontWeight: "normal",
          }}
        >
          {siteTitle || FALLBACK_SITE_TITLE}
        </div>

        {/* Post Title */}
        <div
          style={{
            display: "flex",
            fontSize: "68px",
            fontWeight: "bold",
            color: theme.headingColor,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          {title || FALLBACK_POST_TITLE}
        </div>

        {/* "Read more" link simulation */}
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            fontSize: "22px",
            color: theme.linkColor,
            borderBottom: `1px solid ${theme.linkColor}`,
            // Removed width: "fit-content" to prevent Satori crash
          }}
        >
          read more
        </div>
      </div>
    );
  },

  /**
   * Extract data using Cloudflare's HTMLRewriter pattern.
   */
  extractors: {
    on: {
      'meta[property="og:title"]': (props) => ({
        element(element) {
          props.title = element.getAttribute("content") || "";
        },
      }),
      'meta[property="og:site_name"]': (props) => ({
        element(element) {
          props.siteTitle = element.getAttribute("content") || "";
        },
      }),
    },
  },

  /**
   * Automatically inject <meta property="og:image"> into the <head>.
   */
  autoInject: {
    openGraph: true,
  },
});
