module.exports = {
    name: "noHardcodedWait",
    message: "Hardcoded wait > 1s",
    check: (content) => {
        console.log("✅ checking hardcoded wait");
        return (
          /t\.wait\(\s*\d{4,}\s*\)/.test(content) ||
          /waitForTimeout\(\s*\d{4,}\s*\)/.test(content) || 
          /setTimeout\(\s*.*\d{4,}.*\s*\)/.test(content)
        );
      }      
  };
  
  
  
  