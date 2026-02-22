const fs = require('fs');
const path = require('path');

function updateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updated = content.replace(/from "react-router"/g, 'from "react-router-dom"');
  
  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`Updated: ${filePath}`);
    return true;
  }
  return false;
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let count = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      count += walkDir(filePath);
    } else if (file.endsWith('.tsx')) {
      if (updateFile(filePath)) {
        count++;
      }
    }
  });
  
  return count;
}

const srcDir = path.join(__dirname, 'src');
const count = walkDir(srcDir);
console.log(`\nTotal files updated: ${count}`);
