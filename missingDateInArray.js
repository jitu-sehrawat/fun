let alignedVehicleInfo = [
  {
    _id: "5c9c67d5a583ec70602e247e",
    driverId: {
      _id: "5c9b6e97a583ec70602e245d",
      name: "Sakshi",
      mobileNumber: "7210234009"
    },
    vehicleId: {
      _id: "5c9b6f6aa583ec70602e245f",
      registrationNumber: "DL12AS8808"
    },
    from: "2019-03-31T18:30:00.000Z",
    to: "2019-04-11T18:29:59.000Z"
  },
  {
    _id: "5c9c67eea583ec70602e247f",
    driverId: {
      _id: "5c9b6e97a583ec70602e245d",
      name: "Sakshi",
      mobileNumber: "7210234009"
    },
    vehicleId: {
      _id: "5c9b6f6aa583ec70602e245f",
      registrationNumber: "DL12AS8808"
    },
    from: "2019-04-14T18:30:00.000Z",
    to: "2019-04-16T18:29:59.000Z"
  },
  {
    _id: "5c9c67f9a583ec70602e2480",
    driverId: {
      _id: "5c9b6e97a583ec70602e245d",
      name: "Sakshi",
      mobileNumber: "7210234009"
    },
    vehicleId: {
      _id: "5c9b6f6aa583ec70602e245f",
      registrationNumber: "DL12AS8808"
    },
    from: "2019-04-19T18:30:00.000Z",
    to: "2019-04-30T18:29:59.000Z"
  }
];

let bookinData = {
  _id: "5c9b702ba583ec70602e2465",
  status: "pending",
  bookingType: "regular",
  vehicleId: "5c9b6f6aa583ec70602e245f",
  fleetOwnerId: "5c9b1ecb447a2d14b444a6df",
  corporateId: "5c9b24e9447a2d14b444a6e5",
  from: "2019-04-09T18:30:00.000Z",
  to: "2019-04-20T18:29:59.000Z",
  __v: 0,
  createdAt: "2019-03-27T12:44:27.884Z",
  updatedAt: "2019-03-28T09:21:29.946Z"
};
let bookingFromDaysCount = 0;
let bookingToDaysCount = 0;
let bookingBetweenDaysCount = 0;

// Custom Array to be send to frontEnd, with any shift or pop.
const alignedDetails = [...alignedVehicleInfo];
if (!alignedVehicleInfo.length) {
  console.log(`No Alignment at all. Return False from here`);
  process.exit(1);
}

// Total booking days
let bookingDaysCount = calcDays(bookinData.from, bookinData.to);
// console.log(`bookingDaysCount: ${bookingDaysCount}`);

// bookingFromDaysCount = Math.round(Math.abs((new Date(alignedVehicleInfo[0].to).getTime() - new Date(bookinData.from).getTime()) / oneDay));
// bookingFromDaysCount = calcDays(alignedVehicleInfo[0].to, bookinData.from);
// bookingToDaysCount = Math.round(Math.abs((new Date(bookinData.to).getTime() - new Date(alignedVehicleInfo[alignedVehicleInfo.length - 1].from).getTime()) / oneDay));
// bookingToDaysCount = calcDays(bookinData.to, alignedVehicleInfo[alignedVehicleInfo.length - 1].from);

// Removing first element of array if "booking.from" lies between vehicle aligned "from" and "to"
if (
  alignedVehicleInfo.length &&
  alignedVehicleInfo[0].from <= bookinData.from &&
  alignedVehicleInfo[0].to >= bookinData.from
) {
  bookingFromDaysCount = calcDays(alignedVehicleInfo[0].to, bookinData.from);
  alignedVehicleInfo.shift();
}
// Removing last element of array if "booking.to" lies between vehicle aligned "from" and "to"
if (
  alignedVehicleInfo.length &&
  alignedVehicleInfo[alignedVehicleInfo.length - 1].from <= bookinData.to &&
  alignedVehicleInfo[alignedVehicleInfo.length - 1].to >= bookinData.to
) {
  bookingToDaysCount = calcDays(bookinData.to, alignedVehicleInfo[alignedVehicleInfo.length - 1].from);
  alignedVehicleInfo.pop();
}

// calculating days for aligned vehicle between booking from and to
if (alignedVehicleInfo.length) {
  bookingBetweenDaysCount = alignedVehicleInfo
    .map(obj => {
      return calcDays(obj.from, obj.to);
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}

// console.log(
//   `Total Aligned days: ${bookingFromDaysCount + bookingToDaysCount + bookingBetweenDaysCount}`
// );

// Finding missing dates
let bookingDateArray = getDateArray(new Date(bookinData.from).getTime(), new Date(bookinData.to).getTime()).map(e => new Date(e).toLocaleDateString());
console.log(`bookingDateArray: ${bookingDateArray}`);

let alignedDateArray = [];
alignedDetails.map((obj) => {
  let dt = new Date(obj.from);
  while (dt <= new Date(obj.to)) {
    alignedDateArray.push(new Date(dt).toLocaleDateString());
    dt.setDate(dt.getDate() + 1);
  }
});
console.log(`alignedDateArray: ${alignedDateArray}`);

// let alignedDateBetBooking = [];
// console.log(`From: ${new Date(alignedDetails[0].from).toLocaleDateString()}`);
// console.log(`to: ${new Date(alignedDetails[0].to).toLocaleDateString()}`);
// console.log(`bookinData.from: ${new Date(bookinData.from).toLocaleDateString()}`);
// console.log(`bookinData.to: ${new Date(bookinData.to).toLocaleDateString()}`);
if (bookinData.from < alignedDetails[0].from) {
  // Slice "alignedDateArray" from index of "alignedDetails[0].from" in "alignedDateArray".
  alignedDateBetBooking = alignedDateArray.slice(alignedDateArray.indexOf(new Date(alignedDetails[0].from).toLocaleDateString()), alignedDateArray.indexOf(new Date(new Date(bookinData.to).setDate(new Date(bookinData.to).getDate() + 1)).toLocaleDateString())); 
} else if (bookinData.to > alignedDetails[alignedDetails.length - 1].to) {
  // Slice "alignedDateArray" from index of "alignedDetails[alignedDetails.length - 1].to" in "alignedDateArray".
  alignedDateBetBooking = alignedDateArray.slice(alignedDateArray.indexOf(new Date(alignedDetails[0].from).toLocaleDateString()), alignedDateArray.indexOf(new Date(new Date(alignedDetails[alignedDetails.length - 1].to).setDate(new Date(alignedDetails[alignedDetails.length - 1].to).getDate() + 1)).toLocaleDateString())); 
} else {
  // Slice "alignedDateArray" from index of "bookinData.from" in "alignedDateArray".
  alignedDateBetBooking = alignedDateArray.slice(alignedDateArray.indexOf(new Date(bookinData.from).toLocaleDateString()), alignedDateArray.indexOf(new Date(new Date(bookinData.to).setDate(new Date(bookinData.to).getDate() + 1)).toLocaleDateString())); 
}
console.log(`alignedDateBetBooking: ${alignedDateBetBooking}`);

let missingDates = bookingDateArray.map((date) => {
  if (alignedDateBetBooking.indexOf(date) < 0) {
    return new Date(date).toLocaleDateString();
  }
})

let newArray = missingDates.filter((e) => e);
console.log('misingDates', newArray)
let rangeArray = [];
let defaultValue = newArray[0]
newArray.filter((value, i) => {
  if (new Date(new Date(value).setDate(new Date(value).getDate() + 1)).toLocaleDateString() !== newArray[i + 1]) {
    let range = defaultValue + ' - ' + value
    rangeArray.push(range);
    defaultValue = newArray[i + 1]
  }
})
console.log('rangeArray', rangeArray)
// Finding missing dates























// Calculate number days between two dates
function calcDays(startDate, endDate) {
  let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  return Math.round(
    Math.abs(
      (new Date(startDate).getTime() - new Date(endDate).getTime()) / oneDay
    )
  );
}

// Return array of Dates bet two dates
function getDateArray(startDate, endDate) {
  var arr = new Array();
  var dt = new Date(startDate);
  while (dt <= endDate) {
    arr.push(new Date(dt).getTime());
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
}
