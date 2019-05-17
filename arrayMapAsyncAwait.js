async function randomNumber(stringLength, number) {
  let text = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  if (number) {
    possible = `012345678901234567890123456789012345678901234567890123456789`;
  }

  for (var i = 0; i < stringLength; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

let tripDetails = {
  "isAccepted": "pending",
  "source": {
    "address": "AdGlobal360 India Pvt. Ltd",
    "longitude": 77.0867342,
    "latitude": 28.5038015
  },
  "passengers": [
    {
      "name": "Jitender",
      "mobile": "9540444847",
      "destination": {
        "address": "Airport Hotel Waves mahipalpur",
        "longitude": 77.127354,
        "latitude": 28.5481457
      },
      "startOTP": 4567,
      "stopOTP": 7890
    },
    {
      "name": "Ahkilesh",
      "mobile": "8564024871",
      "destination": {
        "address": "WZ-1566, Nangal Raya, Janakpuri, New Delhi, Delhi 110045",
        "longitude": 77.112131,
        "latitude": 28.6099613
      },
      "startOTP": 4567,
      "stopOTP": 7890
    },
    {
      "name": "Ankur",
      "mobile": "9540444848",
      "destination": {
        "address": "Da DB Park, Hari Nagar, Block DA, Maya Enclave, Hari Nagar, New Delhi, Delhi 110064",
        "longitude": 77.127354,
        "latitude": 28.625495
      },
      "startOTP": 4567,
      "stopOTP": 7890
    }
  ],
  "groupName": "jitenderahkileshankur",
  "__v": 0,
}


async function buildData() {
  var results = await Promise.all(tripDetails.passengers.map(async (passenger) => {
    let startOTP = await randomNumber(4, true);
    let stopOTP = await randomNumber(4, true);

    return {
      _id: passenger._id,
      name: passenger.name,
      mobile: passenger.mobile,
      destination: passenger.destination,
      startOTP,
      stopOTP
    };
  }));
  console.log(`resulkt = ${JSON.stringify(results)}`);
  // return results;
}
buildData();
