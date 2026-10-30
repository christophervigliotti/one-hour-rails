// Usage: npm run test:e2e -- [--headed] [--slow[=ms]] [--keep-open] [any playwright args]
// Examples:
//   npm run test:e2e -- --slow
//   npm run test:e2e -- --headed --slow=1500 --keep-open
//   npm run test:e2e -- -g "create article"

const { spawn } = require("child_process");

const DEFAULT_SLOW_MS = 800;
const env = { ...process.env };
const playwrightArgs = [];

for (const arg of process.argv.slice(2)) {
  if (arg === "--headed") {
    env.HEADED = "1";
  } else if (arg === "--slow") {
    env.HEADED = "1";
    env.SLOW_MO = String(DEFAULT_SLOW_MS);
  } else if (arg.startsWith("--slow=")) {
    env.HEADED = "1";
    env.SLOW_MO = arg.slice("--slow=".length);
  } else if (arg === "--keep-open") {
    env.HEADED = "1";
    env.KEEP_OPEN = "1";
  } else {
    playwrightArgs.push(arg);
  }
}

const child = spawn("npx", ["playwright", "test", ...playwrightArgs], { env, stdio: "inherit" });
child.on("exit", (code) => process.exit(code ?? 1));
