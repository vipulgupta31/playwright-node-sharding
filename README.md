# Playwright Node.js Sharding Demo (LambdaTest Integration)

This project demonstrates running Playwright tests on LambdaTest cloud grid with and without sharding, and measures execution time for understanding the execution speed enhancement with sharding.

## 🚀 Setup

1. Install dependencies:
```bash
npm install
```

2. Set your LambdaTest credentials:
```bash
export LT_USERNAME=your_username
export LT_ACCESS_KEY=your_access_key
```

## ▶️ Run tests normally (parallel by default):
```bash
npm run test:normal
```

## 🔀 Run tests with sharding (two shards in parallel):
```bash
npm run test:shard
```

Check console logs for total execution times.

## 📂 Project Structure
 
- tests/home.test.ts
- tests/checkbox.test.ts
- package.json
- playwright.config.ts        //LambdaTest config to execute on 2 OS and browser combination
- run-normal.js               //runs tests normally and logs total execution time
- run-sharded.js         //runs 2 shards in parallel and logs total execution time
