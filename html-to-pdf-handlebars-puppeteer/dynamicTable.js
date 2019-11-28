const fs = require(`fs`);
const moment = require(`moment`);
const puppeteer = require(`puppeteer`);
const Handlebars = require(`handlebars`);
const tripInvoiceHtml = `table.html`;

let data = {
  dates: [1571875200000, 1571961600000, 1572048000000],
  vehicles: [6571, 6572, 6573, 6574, 6575, 6576, 6577, 6578, 6579, 6580],
  vehicleDetails: {
    "6571": {
      totalKMS: 3,
      totalHRS: 3,
      extraKMS: 0,
      extraHRS: 0,
      vehicleType: "alkdsadkje2k21321",
      kmsHrsData: [
        {
          date: 1571875200000,
          tkms: 1,
          thrs: 1
        },
        {
          date: 1571961600000,
          tkms: 1,
          thrs: 1
        },
        {
          date: 1572048000000,
          tkms: 1,
          thrs: 1
        }
      ]
    },
    "6572": {
      totalKMS: 6,
      totalHRS: 6,
      extraKMS: 0,
      extraHRS: 0,
      vehicleType: "alkdsadkje2k21321",
      kmsHrsData: [
        {
          date: 1571875200000,
          tkms: 2,
          thrs: 2
        },
        {
          date: 1571961600000,
          tkms: 2,
          thrs: 2
        },
        {
          date: 1572048000000,
          tkms: 2,
          thrs: 2
        }
      ]
    },
    "6573": {
      totalKMS: 9,
      totalHRS: 9,
      extraKMS: 0,
      extraHRS: 0,
      vehicleType: "alkdsadkje2k21321",
      kmsHrsData: [
        {
          date: 1571875200000,
          tkms: 3,
          thrs: 3
        },
        {
          date: 1571961600000,
          tkms: 3,
          thrs: 3
        },
        {
          date: 1572048000000,
          tkms: 3,
          thrs: 3
        }
      ]
    },
    "6574": {
      totalKMS: 12,
      totalHRS: 12,
      extraKMS: 0,
      extraHRS: 0,
      vehicleType: "alkdsadkje2k21321",
      kmsHrsData: [
        {
          date: 1571875200000,
          tkms: 4,
          thrs: 4
        },
        {
          date: 1571961600000,
          tkms: 4,
          thrs: 4
        },
        {
          date: 1572048000000,
          tkms: 4,
          thrs: 4
        }
      ]
    },
    "6575": {
      totalKMS: 15,
      totalHRS: 15,
      extraKMS: 0,
      extraHRS: 0,
      vehicleType: "alkdsadkje2k21321",
      kmsHrsData: [
        {
          date: 1571875200000,
          tkms: 5,
          thrs: 5
        },
        {
          date: 1571961600000,
          tkms: 5,
          thrs: 5
        },
        {
          date: 1572048000000,
          tkms: 5,
          thrs: 5
        }
      ]
    },
    "6576": {
      totalKMS: 18,
      totalHRS: 18,
      extraKMS: 0,
      extraHRS: 0,
      vehicleType: "alkdsadkje2k21321",
      kmsHrsData: [
        {
          date: 1571875200000,
          tkms: 6,
          thrs: 6
        },
        {
          date: 1571961600000,
          tkms: 6,
          thrs: 6
        },
        {
          date: 1572048000000,
          tkms: 6,
          thrs: 6
        }
      ]
    },
    "6577": {
      totalKMS: 21,
      totalHRS: 21,
      extraKMS: 0,
      extraHRS: 0,
      vehicleType: "alkdsadkje2k21321",
      kmsHrsData: [
        {
          date: 1571875200000,
          tkms: 7,
          thrs: 7
        },
        {
          date: 1571961600000,
          tkms: 7,
          thrs: 7
        },
        {
          date: 1572048000000,
          tkms: 7,
          thrs: 7
        }
      ]
    },
    "6578": {
      totalKMS: 24,
      totalHRS: 24,
      extraKMS: 0,
      extraHRS: 0,
      vehicleType: "alkdsadkje2k21321",
      kmsHrsData: [
        {
          date: 1571875200000,
          tkms: 8,
          thrs: 8
        },
        {
          date: 1571961600000,
          tkms: 8,
          thrs: 8
        },
        {
          date: 1572048000000,
          tkms: 8,
          thrs: 8
        }
      ]
    },
    "6579": {
      totalKMS: 27,
      totalHRS: 27,
      extraKMS: 0,
      extraHRS: 0,
      vehicleType: "alkdsadkje2k21321",
      kmsHrsData: [
        {
          date: 1571875200000,
          tkms: 9,
          thrs: 9
        },
        {
          date: 1571961600000,
          tkms: 9,
          thrs: 9
        },
        {
          date: 1572048000000,
          tkms: 9,
          thrs: 9
        }
      ]
    },
    "6580": {
      totalKMS: 30,
      totalHRS: 30,
      extraKMS: 0,
      extraHRS: 0,
      vehicleType: "alkdsadkje2k21321",
      kmsHrsData: [
        {
          date: 1571875200000,
          tkms: 10,
          thrs: 10
        },
        {
          date: 1571961600000,
          tkms: 10,
          thrs: 10
        },
        {
          date: 1572048000000,
          tkms: 10,
          thrs: 10
        }
      ]
    }
  }
};

// async function generateTripInvoicePDF(fileName) {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();
//   await page.goto(`file://${__dirname}/${fileName}`);
//   const pdf = await page.pdf({
//     format: `A4`,
//     path: `${fileName.split('.')[0]}.pdf`
//   });
//   await browser.close();
//   console.log(`DONE, Generating PDF.`);
//   return pdf;
// }

async function generateTripInvoiceHtml(htmlFile, data) {
  Handlebars.registerHelper(`ifCond`, index => {
    if (index === 0) {
      return 3;
    } else {
      return 2;
    }
  });
  Handlebars.registerHelper(`getKMS`, (date, vehicle, Datas) => {
    let dataobj = Datas[vehicle]["kmsHrsData"].find(
      data => data["date"] === date
    ); 
    return dataobj.tkms || 0;
  });
  Handlebars.registerHelper(`getHRS`, (date, vehicle, Datas) => {
    let dataobj = Datas[vehicle]["kmsHrsData"].find(
      data => data["date"] === date
    );
    return dataobj.thrs || 0;
  });
  Handlebars.registerHelper(`getTotalKMS`, (vehicle, Datas) => {
    return Datas[vehicle].totalKMS || 0;
  });
  Handlebars.registerHelper(`getTotalHRS`, (vehicle, Datas) => {
    return Datas[vehicle].totalHRS || 0;
  });
  Handlebars.registerHelper(`formatDate`, date => {
    return moment.utc(date).format(`DD MMM YY`);
  });
  // handling customIndex by adding it to block data.
  Handlebars.registerHelper("times", function(n, block) {
    let data;

    if (block.data) {
      data = Handlebars.createFrame(block.data);
    }

    let accum = "";
    for (let i = 0; i < n; i += 1) {
      if (data) {
        data.CustomIndex = i;
      }
      accum += block.fn(i, { data: data });
    }
    return accum;
  });

  Handlebars.registerHelper(`looping`, (vehicles, limit) => {
    return Math.ceil(vehicles.length / limit);
  });
  Handlebars.registerHelper(`slicing`, (vehicles, index, limit) => {
    return vehicles.slice(index * limit, (index + 1) * limit);
  });
  Handlebars.registerHelper(`getColSpan`, limit => {
    return limit * 2 + 1;
  });

  let template = Handlebars.compile(
    fs.readFileSync(`${__dirname}/${htmlFile}`, `utf8`)
  );
  let invoiceHtml = template(data);
  let fileName = `${new Date().getTime()}.html`;
  fs.writeFileSync(fileName, invoiceHtml);
  return fileName;
}

async function generateInvoice() {
  // await generateTripInvoiceHtml(tripInvoiceHtml, data);
  let htmlFile = await generateTripInvoiceHtml(tripInvoiceHtml, data);
  // let pdf = await generateTripInvoicePDF(htmlFile);

  // // deleting generated HTML
  // fs.unlinkSync(`${__dirname}/${htmlFile}`);
}
generateInvoice();
