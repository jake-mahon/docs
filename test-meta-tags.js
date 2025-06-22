// Test script to check meta tags implementation
// Run this in the browser console on http://localhost:3005/docs/1secure

console.log('=== META TAGS TEST ===');
console.log('Current URL:', window.location.href);
console.log('Current pathname:', window.location.pathname);

// Check for debug banner
const debugBanner = document.querySelector('div[style*="background-color: blue"]');
if (debugBanner) {
  console.log('✅ Debug banner found:', debugBanner.textContent);
} else {
  console.log('❌ Debug banner NOT found');
}

// Check for meta tags
const productNameMeta = document.querySelector('meta[name="product-name"]');
const productVersionMeta = document.querySelector('meta[name="product-version"]');
const productMeta = document.querySelector('meta[name="product"]');

console.log('Meta tags found:');
console.log('- product-name:', productNameMeta?.content || 'NOT FOUND');
console.log('- product-version:', productVersionMeta?.content || 'NOT FOUND');
console.log('- product:', productMeta?.content || 'NOT FOUND');

// Check for any React errors
const reactErrors = window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__;
console.log('React errors:', reactErrors || 'None detected');

// URL pattern analysis
const urlParts = window.location.pathname.split('/').filter(Boolean);
console.log('URL parts:', urlParts);

if (urlParts[0] === 'docs' && urlParts[1]) {
  console.log('✅ Docs URL detected');
  console.log('Product path:', urlParts[1]);
  console.log('Version:', urlParts[2] || 'none (non-versioned)');
} else {
  console.log('❌ Not a docs URL');
}

console.log('=== END TEST ===');
