const axios = require('axios');

// axios.post('http://103.233.79.43:5000/v1/device/location/unique', {
//   'key': 'eyJ0eXEiOiJNV1QiLCJhbMciOiJSTzI1NiJ8',
//   'IMEI': '111111111111120',
//   'RNGFRM': '1548666000',
//   'RNGTO': ' 1548666060'
// })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

async function getData(requestData) {
  let response = await axios.post('http://103.233.79.43:5000/v1/device/location/unique', requestData);

  return response.data;
};

// let requestData = {
//   key: 'eyJ0eXEiOiJNV1QiLCJhbMciOiJSTzI1NiJ8',
//   IMEI: '111111111111120',
//   RNGFRM: '1548666000',
//   RNGTO: '1548666060'
// }

// getData(requestData)
//   .then((result) => {
//     console.log(`result = ${JSON.stringify(result)}`);
//   })
//   .catch((err) => {
//     console.log(`err = ${JSON.stringify(err)}`);
//   });

async function createPromiseArray () {
  let promiseArr = [];
  let startTime = Date.now();
  let IMEIArray = [{
    key: 'eyJ0eXEiOiJNV1QiLCJhbMciOiJSTzI1NiJ8',
    IMEI: '111111111111120',
    RNGFRM: '1548666000',
    RNGTO: '1548666060'
  }, {
    key: 'eyJ0eXEiOiJNV1QiLCJhbMciOiJSTzI1NiJ8',
    IMEI: '111111111111121',
    RNGFRM: '1548667160',
    RNGTO: '1548667220'
  }];

  for (let index = 0; index < 1000; index++) {

    let requestData = {
      key: 'eyJ0eXEiOiJNV1QiLCJhbMciOiJSTzI1NiJ8',
      IMEI: '111111111111120',
      RNGFRM: '1548666000',
      RNGTO: '1548666060'
    }

    promiseArr.push(getData(requestData));
  }
  // console.log(`promiseArr = ${promiseArr}`);
  let dataArr = await Promise.all(promiseArr);
  let endTime = Date.now();

  console.log(`Time Taken : ${endTime-startTime}`);
  console.log(`dataArr = ${dataArr}`);
};
createPromiseArray();
