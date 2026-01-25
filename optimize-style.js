// optimize-style.js

// Use the built-in 'fs/promises' module for cleaner async/await file handling.
const fs = require('fs/promises');
const path = require('path');

// CORRECTED IMPORT: The 'beasties' package exports the class directly (default export).
// We assign the entire result of require() to the Beasties constant.
const Beasties = require('beasties');

// Define the path to the Jekyll build output directory.
// `__dirname` refers to the directory where this script is located (your project root).
const buildDir = path.join(__dirname, '_site');

/**
 * The main asynchronous function that orchestrates the optimization process.
 */
async function optimizeHtmlFiles() {
  console.log(`🚀 Starting CSS optimization with Beasties in directory: ${buildDir}`);

  // Initialize Beasties ONCE outside the loop for better performance.
  // This will now work correctly because `Beasties` is a valid constructor.
  const beast = new Beasties({
    pruneSource: true,
    reduceInlineStyles: true,
    mergeStylesheets: true,
  });

  try {
    // 1. Read all file and directory names within the build directory, recursively.
    const allFilePaths = await fs.readdir(buildDir, { recursive: true });

    // 2. Filter the list to get only the .html files.
    const htmlFiles = allFilePaths.filter(file => file.endsWith('.html'));

    if (htmlFiles.length === 0) {
      console.warn('⚠️ No HTML files found to optimize.');
      return;
    }

    console.log(`🔎 Found ${htmlFiles.length} HTML files to process...`);

    // 3. Process each HTML file in parallel.
    await Promise.all(
      htmlFiles.map(async (relativeFilePath) => {
        const absoluteFilePath = path.join(buildDir, relativeFilePath);
        
        try {
          // READ the content of the HTML file into a string.
          const originalHtml = await fs.readFile(absoluteFilePath, 'utf8');

          // PROCESS the HTML string using the configured Beasties instance.
          const optimizedHtml = await beast.process(originalHtml);

          // WRITE the optimized HTML string back to the original file.
          await fs.writeFile(absoluteFilePath, optimizedHtml, 'utf8');

          console.log(`✅ Successfully optimized: ${relativeFilePath}`);
        } catch (fileError) {
          console.error(`❌ Failed to process file ${relativeFilePath}:`, fileError);
        }
      })
    );

    console.log('\n🎉 All HTML files have been successfully optimized!');

  } catch (error) {
    console.error('❌ A fatal error occurred during the optimization process:', error);
    process.exit(1);
  }
}

// Call the main function to start the entire process.
optimizeHtmlFiles();
