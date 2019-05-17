const puppeteer = require('puppeteer')

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('file:///home/ag/Jeetu/Fun/invoice-html-sample/billing.html');
  const pdf = await page.pdf({ format: 'A4', path: 'invoice1.pdf' });

  await browser.close();
  return pdf
};

printPDF();

