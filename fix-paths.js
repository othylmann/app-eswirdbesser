#!/usr/bin/env node
// Fix paths for GitHub Pages deployment

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'dist', 'index.html');
const manifestPath = path.join(__dirname, 'dist', 'manifest.json');

// Fix index.html
let indexHtml = fs.readFileSync(indexPath, 'utf8');
indexHtml = indexHtml.replace(/href="\//g, 'href="/app-eswirdbesser/');
indexHtml = indexHtml.replace(/src="\//g, 'src="/app-eswirdbesser/');
fs.writeFileSync(indexPath, indexHtml);

console.log('✅ Fixed index.html paths');

// Fix manifest.json
let manifest = fs.readFileSync(manifestPath, 'utf8');
manifest = manifest.replace(/"\/icon-/g, '"/app-eswirdbesser/icon-');
manifest = manifest.replace(/"start_url": "\//g, '"start_url": "/app-eswirdbesser/');
fs.writeFileSync(manifestPath, manifest);

console.log('✅ Fixed manifest.json paths');
console.log('✅ All paths fixed for GitHub Pages!');
