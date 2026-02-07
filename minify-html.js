// minify-html.js
const fs = require('fs');
const path = require('path');
const minify = require('@minify-html/node');

const BUILD_DIR = '_site'; 

const cfg = {
// Config options: https://docs.rs/minify-html/latest/minify_html/struct.Cfg.html
    keep_closing_tags: true,
    keep_html_and_head_opening_tags: true,
    keep_input_type_text_attr: true
};

function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) {
        console.error(`❌ Directory '${dir}' not found.`);
        return;
    }
    
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

try {
    console.log(`⚡ Starting HTML minification on '${BUILD_DIR}'...`);
    let count = 0;

    walkDir(BUILD_DIR, (filePath) => {
        if (path.extname(filePath) === '.html') {
            try {
                const source = fs.readFileSync(filePath);
                const minified = minify.minify(source, cfg);
                fs.writeFileSync(filePath, minified);
                count++;
            } catch (err) {
                console.error(`Error minifying ${filePath}:`, err);
            }
        }
    });

    console.log(`✅ Successfully minified ${count} HTML files.`);
} catch (e) {
    console.error(`❌ Minification failed:`, e);
    process.exit(1);
}
