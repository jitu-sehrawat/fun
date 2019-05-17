const fs = require(`fs`);
const Handlebars = require(`handlebars`);
const puppeteer = require(`puppeteer`);

const tripInvoiceHtml = `tripInvoice.html`;
const tripData = {
  crn: `CRN351388649`,
  customer: `Neeraj`,
  billDetails: {
    tripCost: 274,
    baseFare: 70,
    first20km: 120,
    after20km: 42,
    rideTimeFare: 85.5,
    fareDecrease: -63.5,
    rideFare: 254,
    taxes: 19.3,
    totalBill: 273,
    insurancePremium: 1,
    totalPayable: 274
  },
  driverDetails: {
    name: `Siraj Khan`
  },
  vehicleDetails: {
    model: `Prime Play - White Swift Dzire`
  },
  trip: {
    tripDate: `17 May, 2019`,
    tripStartedAt: `01:55 AM`,
    tripStartedSource: `870, Phase V, Udyog Vihar, Sector 19, Gurugram, Haryana 122008, India`,
    tripStopedAt: `01:55 AM`,
    tripStopeddestination: `Baba Deep Singh Ji Shaheed Marg, Sector 50, Faridabad, Haryana 122011, India`
  }
};

async function generateTripInvoiceHtml(htmlFile, tripData) {
  let template = Handlebars.compile(fs.readFileSync(`${__dirname}/${htmlFile}`, `utf8`));
  let invoiceHtml = template(tripData);
  let fileName = `${new Date().getTime()}.html`;
  fs.writeFileSync(fileName, invoiceHtml);
  return fileName;
}

async function generateTripInvoicePDF(fileName) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/${fileName}`);
  const pdf = await page.pdf({
    format: `A4`,
    path: `${fileName.split('.')[0]}.pdf`
  });
  await browser.close();
  console.log(`DONE, Generating PDF.`);
  return pdf;
}

async function generateInvoice () {
  let htmlFile = await generateTripInvoiceHtml(tripInvoiceHtml, tripData);
  let pdf = await generateTripInvoicePDF(htmlFile);

  // deleting generated HTML
  fs.unlinkSync(`${__dirname}/${htmlFile}`);
};
generateInvoice();
