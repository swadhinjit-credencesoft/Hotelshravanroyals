const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /Shravan Royal Inn/g, replace: "Unwind Karjat" },
  { regex: /Shravan Royals/g, replace: "Unwind Karjat" },
  { regex: /Shravan Royal/g, replace: "Unwind Karjat" },
  { regex: /Shravan Singh/g, replace: "The Founders" },
  { regex: /Pink City/g, replace: "Karjat" },
  { regex: /Jaipur's/g, replace: "Karjat's" },
  { regex: /Jaipur/g, replace: "Karjat" },
  { regex: /The Royal Ballroom/g, replace: "The Grand Ballroom" },
  { regex: /royal reserves/g, replace: "premium reserves" },
  { regex: /The Royal Standards/g, replace: "Our Standards" },
  { regex: /royal treatment/g, replace: "premium treatment" }
];

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walkDir(filePath));
    } else {
      if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const targetDir = path.join(__dirname, 'src');
const files = walkDir(targetDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  replacements.forEach(r => {
    content = content.replace(r.regex, r.replace);
  });
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
