// optimize-style.js

const fs = require('fs/promises');
const path = require('path');
const Beasties = require('beasties');

const buildDir = path.join(__dirname, '_site');

/**
 * The main asynchronous function that orchestrates the optimization process.
 */
async function optimizeHtmlFiles() {
  console.log(`🚀 Starting CSS optimization with Beasties in directory: ${buildDir}`);

  const beast = new Beasties({

    path: buildDir,

    pruneSource: true,
    reduceInlineStyles: true,
    mergeStylesheets: true,
  });

  try {
    const allFilePaths = await fs.readdir(buildDir, { recursive: true });
    const htmlFiles = allFilePaths.filter(file => file.endsWith('.html'));

    if (htmlFiles.length === 0) {
      console.warn('⚠️ No HTML files found to optimize.');
      return;
    }

    console.log(`🔎 Found ${htmlFiles.length} HTML files to process...`);

    await Promise.all(
      htmlFiles.map(async (relativeFilePath) => {
        const absoluteFilePath = path.join(buildDir, relativeFilePath);
        
        try {
          const originalHtml = await fs.readFile(absoluteFilePath, 'utf8');
          const optimizedHtml = await beast.process(originalHtml);
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

optimizeHtmlFiles();
