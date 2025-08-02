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
npx playwright test
```

## 🔀 Run tests with sharding (two shards in parallel):
```bash
npx playwright test --shard=X/Y
```

## 📂 Project Structure
 
- tests/home.spec.ts
- tests/checkbox.spec.ts
- tests-examples/demo-todo-app.spec.ts
- package.json
- playwright.config.ts        //LambdaTest config to execute on 2 OS and browser combinations
