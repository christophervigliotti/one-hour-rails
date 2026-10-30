const { defineConfig, devices } = require("@playwright/test");

const PORT = 3100;

module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  // KEEP_OPEN pauses without a time limit, so the test timeout is turned off.
  timeout: process.env.KEEP_OPEN ? 0 : 30_000,
  reporter: [["list"]],
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    trace: "retain-on-failure",
    // HEADED=1 shows the browser. SLOW_MO=500 waits 500ms between each browser action.
    headless: !process.env.HEADED,
    launchOptions: { slowMo: Number(process.env.SLOW_MO || 0) },
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    // Runs the Rails app against the test database on its own port, so the
    // development server and data are not touched.
    command: `bin/rails server -e test -p ${PORT} -b 127.0.0.1 -P tmp/pids/e2e-server.pid`,
    cwd: "..",
    url: `http://127.0.0.1:${PORT}/up`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
