module.exports = {
    name: "fragile-selector",
    message: "Avoid using brittle selectors like [class^=\"\"], [id*=\"\"] etc.",
    check: content =>
      /\[class[*^$]?=/.test(content) || /\[id[*^$]?=/.test(content)
  };
  
  