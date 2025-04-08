// sample-test.js
describe("login test", () => {
    it("should wait", async () => {
      await page.waitForTimeout(4000); // triggers noHardcodedWait
      console.log("debugging...");     // triggers noDebug
      const el = await page.$(".btn"); // triggers fragileSelector
      const username = "user1";        // may trigger vagueNames (if rule looks for 'name', 'data', etc.)
    });
  });
  