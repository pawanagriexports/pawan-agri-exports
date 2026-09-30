const fs = require('fs');
const path = require('path');

const catalogPath = path.join(__dirname, 'src', 'lib', 'catalog.ts');
const assetsFolder = path.join(__dirname, 'src', 'assets');

if (!fs.existsSync(catalogPath)) {
  console.log("❌ Error: catalog.ts file nahi mili! Sahi folder me nahi hain.");
  process.exit();
}

const content = fs.readFileSync(catalogPath, 'utf8');
const matches = content.match(/from\s+["']@\/assets\/[^"']+["']/g) || [];

console.log("\n==========================================");
console.log("       IMAGE MATCH CHECK RESULTS         ");
console.log("==========================================\n");

matches.forEach(m => {
  const fileName = m.split('@/assets/')[1].replace(/["']/g, '');
  const fullPath = path.join(assetsFolder, fileName);
  if (fs.existsSync(fullPath)) {
    console.log("✅ FOUND     :", fileName);
  } else {
    console.log("❌ MISMATCH  :", fileName, " <-- (Is file name/extension me galti hai!)");
  }
});

console.log("\n==========================================\n");