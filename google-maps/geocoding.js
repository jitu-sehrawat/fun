const googleMapsClient = require("@google/maps").createClient({
  key: "AIzaSyCnHwY8MVdtzB0Qh7HNNrWcDjDwX_Rdzvw",
  Promise: Promise
});

/* Geocoding
Geocoding is the process of converting addresses (like a street address)
into geographic coordinates (like latitude and longitude), which you can
use to place markers on a map, or position the map.
*/
async function geocoding(address, components) {
  return new Promise((resolve, reject) => {
    googleMapsClient
      .geocode({ address, components })
      .asPromise()
      .then(response => {
        // console.log(JSON.stringify(response.json.results, null, 2));
        resolve(response.json.results);
      })
      .catch(err => {
        // console.log(err);
        reject(err);
      });
  });
}

async function getLatLong() {
  let location = await geocoding(`New Delhi`, { country: "IN" });
  console.log(JSON.stringify(location));
}

getLatLong();

/* Reverse Geocoding
The term geocoding generally refers to translating a human-readable address into a
location on a map. The process of doing the opposite, translating a location on the
map into a human-readable address, is known as reverse geocoding.
*/
async function reverseGeocoding(latlng) {
  return new Promise((resolve, reject) => {
    googleMapsClient
      .reverseGeocode({ latlng: [...latlng] })
      .asPromise()
      .then(response => {
        // console.log(JSON.stringify(response.json.results, null, 2));
        resolve(response.json.results);
      })
      .catch(err => {
        // console.log(err);
        reject(err);
      });
  });
}

async function getAddressUsingLatLng() {
  let location = await reverseGeocoding([28.5584419, 77.1213569]);
  console.log(JSON.stringify(location));
}

getAddressUsingLatLng();

/* Reverse Geocoding
The place ID of the place for which you wish to obtain the human-readable address.
The place ID is a unique identifier that can be used with other Google APIs.
*/
async function reverseGeocodingUsingPlaceId(place_id) {
  return new Promise((resolve, reject) => {
    googleMapsClient
      .reverseGeocode({ place_id })
      .asPromise()
      .then(response => {
        // console.log(JSON.stringify(response.json.results, null, 2));
        resolve(response.json.results);
      })
      .catch(err => {
        // console.log(err);
        reject(err);
      });
  });
}

async function getAddressUsingPlaceId() {
  let location = await reverseGeocodingUsingPlaceId(
    `ChIJd8BlQ2BZwokRAFUEcm_qrcA`
  );
  console.log(JSON.stringify(location));
}

getAddressUsingPlaceId();
