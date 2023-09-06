import puppeteer from "puppeteer";
import hb from "handlebars";

export const generatePdf = async (pdfFileAsString: string) => {
  const data = {};
  const template = hb?.compile(pdfFileAsString, { strict: true });
  const result = template(data);
  const html = result;
  // puppeteer.connect({ browserWSEndpoint: 'wss://chrome.browserless.io?token=YOUR-API-TOKEN' })

  const browser = await puppeteer.connect({
    browserWSEndpoint:
      "wss://chrome.browserless.io?token=c8dc96e8-a6c8-4b7c-97e3-5e7977f7389f",
  });

  const page = await browser.newPage();
  // Add page margin

  await page.evaluate(() => {
    const style = document.createElement("style");
    style.textContent = `
    @page {
      size: A4 landscape;
      margin: 2rem;
      padding-top: 2rem; /* Add top padding between pages */
      padding-bottom: 2rem; /* Add bottom padding between pages */
    }
    body {
      margin: 2rem;
    }
  `;
    document.head.appendChild(style);
  });

  await page.setContent(html);
  const buffer = (await page.pdf({ printBackground: true })).buffer;
  await browser.close();
  return buffer;
};
