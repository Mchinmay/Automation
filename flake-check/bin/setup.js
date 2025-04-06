#!/usr/bin/env node

const fs = require("fs");
const { glob } = require("glob");
const { program } = require("commander");
const chalk = require("chalk");
const { scanFile } = require("../lib/scanner");

program
  .argument("<pattern>", "Glob pattern for test files")
  .option("-v, --verbose", "Show full logs")
  .parse();

const [pattern] = program.args;
const options = program.opts();

console.log("✅ flake-check CLI is working!");
console.log("🔍 Using glob pattern:", pattern);

(async () => {
  try {
    const files = await glob(pattern);

    if (!files.length) {
      console.log(chalk.yellow("⚠️  No files matched the pattern."));
      return;
    }

    console.log("📂 Files matched:", files);

    for (const file of files) {
      scanFile(file, options);
    }
  } catch (err) {
    console.error(chalk.red("❌ Glob error:"), err);
  }
})();
