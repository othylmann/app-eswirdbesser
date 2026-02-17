#!/usr/bin/env node
// Fix paths for GitHub Pages deployment

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'dist', 'index.html');
const manifestPath = path.join(__dirname, 'dist', 'manifest.json');
const nojekyllPath = path.join(__dirname, 'dist', '.nojekyll');

// Fix index.html
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// Fix specific absolute paths (NOT generic replacements to avoid doubling base href)
indexHtml = indexHtml.replace(/<link rel="icon" href="\//g, '<link rel="icon" href="/app-eswirdbesser/');
indexHtml = indexHtml.replace(/<script src="\/_expo/g, '<script src="/app-eswirdbesser/_expo');

// Add base tag for relative URLs (fonts, assets, etc.)
indexHtml = indexHtml.replace(
  '<head>',
  '<head>\n    <base href="/app-eswirdbesser/">'
);

fs.writeFileSync(indexPath, indexHtml);

console.log('✅ Fixed index.html paths');

// Fix manifest.json
let manifest = fs.readFileSync(manifestPath, 'utf8');
manifest = manifest.replace(/"\/icon-/g, '"/app-eswirdbesser/icon-');
manifest = manifest.replace(/"start_url": "\//g, '"start_url": "/app-eswirdbesser/');
fs.writeFileSync(manifestPath, manifest);

console.log('✅ Fixed manifest.json paths');

// Create .nojekyll to disable Jekyll
fs.writeFileSync(nojekyllPath, '');
console.log('✅ Created .nojekyll file');

console.log('✅ All paths fixed for GitHub Pages!');
