const axios = require('axios');
const app_id = `X3It9lBEVcuTCSU986Bp`;
const app_code = `fqzMmjvPBYqnyqmh3wsimA`;


// The HERE Geocoder API is a REST API that allows you to:
// Obtain geocoordinates for addresses
// Obtain addresses or administrative areas for locations
// Obtain geocoordinates for known landmarks
async function geocoderAPI(address){
  // The await keyword saves us from having to write a .then() block.
  try {
    let json = await axios.get(`https://geocoder.api.here.com/6.2/geocode.json?app_id=${app_id}&app_code=${app_code}&searchtext=${address}`);
    return json.data;
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}

async function searchAddress () {
  let addressinfo = await geocoderAPI(`686, Udyog Vihar Phase V, Gurugram, Haryana 122016`);

  console.log(JSON.stringify(addressinfo));
}
searchAddress();