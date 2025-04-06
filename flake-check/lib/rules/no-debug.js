module.exports = {
    name: "no-debugger",
    message: "Avoid using the 'debugger' statement.",
    check: content => content.includes("debugger")
  };
  