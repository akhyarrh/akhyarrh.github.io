# Review Guide

## 1. Dates and Sorting
- **Format:** Jekyll requires the `YYYY-MM-DD` format for proper chronological sorting. 
- **Location:** The date can be located either in the **Front Matter** (`date: 2024-05-20`) or as a **prefix in the filename** (`2024-05-20-post-title.md`).
- **Validation:** Flag a date as **CRITICAL** severity if it exists but uses an incorrect format (like `DD-MM-YYYY` or `MM/DD/YY`), as this will break Jekyll's post-sorting logic.

## 2. Front Matter
- **Layout:** DO NOT flag missing `layout` fields. This is handled by site defaults in `_config.yml`.
- **Title:** Every post must have a `title`.

## 3. Paths & Links
- **Hardcoded Paths:** If a local path (e.g., `/assets/img/photo.jpg`) is used, flag it as **MEDIUM** severity as a general warning/reminder.

## 4. Image Handling
- **Optimization:** DO NOT comment on image compression or file-type optimization. This is handled by Imgbot and Jampack.
- **Large Files:** 
    - If an image is **> 5MB**, flag as **MEDIUM** severity.
    - If an image is **> 10MB**, flag as **HIGH** severity.
- **Accessibility:** Missing `alt` text for images should be flagged as **MEDIUM** severity.

## 5. Liquid Syntax
- **Integrity:** Ensure all `{% %}` and `{{ }}` tags are properly closed.
- **Severity:** Flag unclosed tags as **CRITICAL** severity, as they will break the Jekyll build.

## 6. Configuration & Metadata
- **YAML (.yml):** 
    - Flag any syntax or indentation errors in `_config.yml` or `_data/` files as **CRITICAL**.
      
- **Webmanifest (.webmanifest):** 
    - This is a JSON file. Flag missing quotes or trailing commas as **HIGH** severity
    
- **Robots.txt (.txt):** 
    - Flag as **MEDIUM** severity if `Disallow: /` is present, as it blocks all search engine indexing.
    - Ensure a `Sitemap:` link is present.
      
