import { defineConfig } from '@playwright/test';

const buildName = 'Playwright Node Sharding';
const ltUsername = process.env.LT_USERNAME;
const ltAccessKey = process.env.LT_ACCESS_KEY;

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
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
        }
      }
    },
    {
      name: 'Firefox-macOS',
      use: {
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
            JSON.stringify({
              browserName: 'pw-firefox',
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
        }
      }
    }
  ]
});
