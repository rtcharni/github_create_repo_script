const puppeteer = require("puppeteer");

// TODO error handling and text checking
(async () => {
  const projectName = process.argv[2];
  const gitPassword = process.argv[3];
  
  const browser = await puppeteer.launch({ headless: false });
  const page = (await browser.pages())[0];
  await page.goto("https://github.com/new");

  let element = await page.$("#login_field");
  await element.type("rtcharni");
  element = await page.$("#password");
  await element.type(gitPassword);
  element = await page.$(`input[name='commit']`);
  await element.click();
  await page.waitForNavigation();

  element = await page.$(`#repository_name`);
  await element.type(projectName);
  // TODO if name contains whitespace, join with _ or simillar
  element = await page.$(`button.btn.first-in-line`);
  await element.click({ delay: 2000 });
  await page.waitForNavigation();
  browser.close();
  console.log(`Github repository created`);
})();
