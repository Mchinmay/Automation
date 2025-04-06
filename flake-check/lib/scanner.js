const fs = require("fs");
const chalk = require("chalk");
const rules = require("./rules");

function scanFile(filePath, options = {}) {
  const content = fs.readFileSync(filePath, "utf-8");
  const issues = [];

  for (const rule of Object.values(rules)) {
    if (rule.check(content)) {
      issues.push({
        rule: rule.name,
        message: rule.message || "Rule triggered",
      });
    }
  }

  if (issues.length > 0) {
    console.log(chalk.yellow(`⚠️  Issues in ${filePath}`));
    issues.forEach(issue =>
      console.log(` - ${chalk.red(issue.rule)}: ${issue.message}`)
    );
  } else if (options.verbose) {
    console.log(chalk.green(`✅ ${filePath}`));
  }
}

module.exports = { scanFile };
