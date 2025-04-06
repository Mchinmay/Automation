module.exports = {
    name: "vague-names",
    message: "Avoid vague variable names like 'data', 'temp', 'foo'.",
    check: content => /\b(data|temp|foo|thing)\b/.test(content)
  };
  
  