const googleMapsClient = require("@google/maps").createClient({
  key: "AIzaSyCnHwY8MVdtzB0Qh7HNNrWcDjDwX_Rdzvw",
  Promise: Promise
});

/* Distance Matrix API

The Distance Matrix API is a service that provides travel distance and time for a matrix
of origins and destinations. The API returns information based on the recommended route
between start and end points, as calculated by the Google Maps API, and consists of rows
containing duration and distance values for each pair.
*/
async function distanceMatrix(options) {
  return new Promise((resolve, reject) => {
    googleMapsClient
      .distanceMatrix(options)
      .asPromise()
      .then(response => {
        // console.log(JSON.stringify(response.json));
        resolve(response.json);
      })
      .catch(err => {
        // console.log(err);
        reject(err);
      });
  });
}

async function getDistance() {
  /**
   * If you pass an address, the service geocodes the string and converts it to a latitude/longitude
   * coordinate to calculate distance. This coordinate may be different from that returned by the
   * Geocoding API, for example a building entrance rather than its center.
   */

  /**
   * If you pass latitude/longitude coordinates, they are used unchanged to calculate distance. Ensure
   * that no space exists between the latitude and longitude values.
   */

  let options = {
    origins: ["AdGlobal360 India Pvt. Ltd"],
    destinations: [
      "Holiday Inn New Delhi International Airport",
      "ITC Maurya, A Luxury Collection Hotel, New Delhi",
      "PVR Rivoli"
    ],
    language: "en",
    units: "metric",
    region: "in",
    mode: "driving",
    departure_time: "now"
  };
  let distance = await distanceMatrix(options);
  console.log(JSON.stringify(distance));
}
getDistance();

const data = {
  destination_addresses: [
    "Aerocity Access Rd, Aerocity, Hospitality District, Asset Area 12, New Delhi, Delhi 110037, India",
    "Sardar Patel Marg, Akhaura Block, Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi 110021, India",
    "Regal Building, Baba Kharak Singh Rd, Connaught Place, New Delhi, Delhi 110001, India"
  ],
  origin_addresses: [
    "Plot No 685 & 686, Udyog Vihar Phase V, Gurugram, Haryana 122016, India"
  ],
  rows: [
    {
      elements: [
        {
          distance: { text: "9.0 km", value: 9042 },
          duration: { text: "18 mins", value: 1101 },
          duration_in_traffic: { text: "18 mins", value: 1091 },
          status: "OK"
        },
        {
          distance: { text: "19.3 km", value: 19318 },
          duration: { text: "33 mins", value: 1982 },
          duration_in_traffic: { text: "35 mins", value: 2115 },
          status: "OK"
        },
        {
          distance: { text: "23.5 km", value: 23452 },
          duration: { text: "40 mins", value: 2403 },
          duration_in_traffic: { text: "42 mins", value: 2491 },
          status: "OK"
        }
      ]
    }
  ],
  status: "OK"
};
