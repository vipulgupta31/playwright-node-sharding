const { exec } = require('child_process');
const start = Date.now();

console.log('🚀 Running Shard 1 of 2...');
const shard1 = exec('npx playwright test --shard=1/2 --workers=2 --reporter=list --config=playwright.config.ts', (err, stdout, stderr) => {
  if (stdout) console.log('[Shard1]\n' + stdout);
  if (stderr) console.error('[Shard1 Error]\n' + stderr);
  if (err) console.error(err);
});

console.log('🚀 Running Shard 2 of 2...');
const shard2 = exec('npx playwright test --shard=2/2 --workers=2 --reporter=list --config=playwright.config.ts', (err, stdout, stderr) => {
  if (stdout) console.log('[Shard2]\n' + stdout);
  if (stderr) console.error('[Shard2 Error]\n' + stderr);
  if (err) console.error(err);
});

let finished = 0;
function done() {
  finished++;
  if (finished === 2) {
    const end = Date.now();
    console.log(`\n⏱️ Total Execution Time (Sharded Parallel): ${((end-start)/1000).toFixed(2)}s`);
  }
}

shard1.on('exit', done);
shard2.on('exit', done);
