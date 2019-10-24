const fs = require(`fs`);
const moment = require(`moment`);
const puppeteer = require(`puppeteer`);
const Handlebars = require(`handlebars`);
const tripInvoiceHtml = `table.html`;

let data = {
  carLimit: 5,
  cars: [6571, 6572, 6573, 6574, 6575, 6576, 6577, 6578, 6579, 6580],
  tableContent: {
    '6571': [
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
    ],
    '6572': [
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
    ],
    '6573': [
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
    ],
    '6574': [
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
    ],
    '6575': [
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
    ],
    '6576': [
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
    ],
    '6577': [
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
    ],
    '6578': [
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
    ],
    '6579': [
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
    ],
    '6580': [
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
  },
  dates: [1571875200000, 1571961600000, 1572048000000]
};

async function generateTripInvoiceHtml(htmlFile, data) {
  Handlebars.registerHelper(`ifCond`, index => {
    if (index === 0) {
      return 3;
    } else {
      return 2;
    }
  });
  Handlebars.registerHelper(`getKMS`, (date, car, Datas) => {
    let dataobj = Datas[car].find(data => data['date'] === date);
    console.log(`car: `, car, `date: `, moment.utc(date).format(`DD-MM-YYYY`));
    return dataobj.tkms || 0;
  });
  Handlebars.registerHelper(`getHRS`, (date, car, Datas) => {
    let dataobj = Datas[car].find(data => data['date'] === date);
    return dataobj.thrs || 0;
  });
  Handlebars.registerHelper(`formatDate`, date => {
    return moment.utc(date).format(`DD MMM YY`);
  });

  Handlebars.registerHelper('times', function(n, block) {
    let data;

    if (block.data) {
      data = Handlebars.createFrame(block.data);
    }

    let accum = '';
    for (let i = 0; i < n; i += 1) {
      if (data) {
        data.CustomIndex = i;
      }
      accum += block.fn(i, { data: data });
    }
    return accum;
  });

  Handlebars.registerHelper(`looping`, (cars, limit) => {
    return Math.ceil(cars.length / limit);
  });
  Handlebars.registerHelper(`slicing`, (cars, index, limit) => {
    return cars.slice(index * limit, (index + 1) * limit);
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
  await generateTripInvoiceHtml(tripInvoiceHtml, data);
  // let htmlFile = await generateTripInvoiceHtml(tripInvoiceHtml, data);
  // let pdf = await generateTripInvoicePDF(htmlFile);

  // deleting generated HTML
  // fs.unlinkSync(`${__dirname}/${htmlFile}`);
}
generateInvoice();
