import { defineConfig } from '@playwright/test';

const buildName = 'Playwright Node Sharding Demo';
const ltUsername = process.env.LT_USERNAME;
const ltAccessKey = process.env.LT_ACCESS_KEY;

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 0,
  reporter: [['list'], ['html', { open: 'never' }]],

  // ✅ Define two separate projects: Chrome on Windows and Firefox on macOS
  projects: [
    {
      name: 'Chrome-Windows',
      use: {
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
            JSON.stringify({
              browserName: 'Chrome',
              browserVersion: 'latest',
              'LT:Options': {
                platform: 'Windows 10',
                build: buildName,
                name: 'Chrome on Windows',
                user: ltUsername,
                accessKey: ltAccessKey
              }
            })
          )}`
        },
        browserName: 'chromium'
      }
    },
    {
      name: 'Firefox-macOS',
      use: {
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
            JSON.stringify({
              browserName: 'Firefox',
              browserVersion: 'latest',
              'LT:Options': {
                platform: 'macOS Sonoma',
                build: buildName,
                name: 'Firefox on macOS',
                user: ltUsername,
                accessKey: ltAccessKey
              }
            })
          )}`
        },
        browserName: 'firefox'
      }
    }
  ]
});
