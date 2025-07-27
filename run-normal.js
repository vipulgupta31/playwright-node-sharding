const { exec } = require('child_process');
const start = Date.now();
console.log('🚀 Running all tests in parallel (normal)...');
exec('npx playwright test --workers=2 --reporter=list --config=playwright.config.ts', (err, stdout, stderr) => {
  const end = Date.now();
  console.log(stdout);
  if (stderr) console.error(stderr);
  if (err) console.error(err);
  console.log(`\n⏱️ Total Execution Time (Normal Parallel): ${((end-start)/1000).toFixed(2)}s`);
});
