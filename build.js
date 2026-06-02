const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting custom build wrapper to handle Windows directory creation...');

// Clean .next folder
try {
  fs.rmSync(path.join(__dirname, '.next'), { recursive: true, force: true });
  console.log('Cleaned .next directory.');
} catch (e) {}

// Start checking/creating .next/server/pages in the background
const interval = setInterval(() => {
  const pagesDir = path.join(__dirname, '.next', 'server', 'pages');
  const serverDir = path.join(__dirname, '.next', 'server');
  if (fs.existsSync(serverDir)) {
    if (!fs.existsSync(pagesDir)) {
      try {
        fs.mkdirSync(pagesDir, { recursive: true });
        console.log('Successfully pre-created .next/server/pages directory to prevent Windows rename error.');
      } catch (e) {}
    }
  }
}, 100);

// Run next build
const child = spawn('npx', ['next', 'build'], { shell: true, stdio: 'inherit' });

child.on('close', (code) => {
  clearInterval(interval);
  console.log(`Build process finished with code ${code}`);
  process.exit(code);
});
