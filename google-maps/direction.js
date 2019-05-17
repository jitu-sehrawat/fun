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
async function direction(options) {
  return new Promise((resolve, reject) => {
    googleMapsClient
      .directions(options)
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

async function getDirection() {
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
    origin: "AdGlobal360 India Pvt. Ltd",
    destination: "ITC Maurya, A Luxury Collection Hotel, New Delhi",
    language: "en",
    units: "metric",
    region: "in",
    mode: "driving",
    departure_time: "now",
    // waypoints: [
    //   "Kapashera Police Station",
    //   "Holiday Inn New Delhi International Airport"
    // ],
    // alternatives: true,
    avoid: ["tolls", "ferries"],
    traffic_model: "optimistic",
    optimize: true
  };
  let distance = await direction(options);
  console.log(JSON.stringify(distance));
}

getDirection();

const data = {
  geocoded_waypoints: [
    {
      geocoder_status: "OK",
      place_id: "ChIJJY1iUEQZDTkRDWrK0wOC4E8",
      types: ["establishment", "point_of_interest"]
    },
    {
      geocoder_status: "OK",
      place_id: "ChIJnwAUvOUbDTkRexkX9qcD3v0",
      types: ["establishment", "point_of_interest", "police"]
    },
    {
      geocoder_status: "OK",
      place_id: "ChIJo7kBM2ocDTkR2TXLzP1eBUk",
      types: [
        "bar",
        "establishment",
        "food",
        "lodging",
        "point_of_interest",
        "restaurant"
      ]
    }
  ],
  routes: [
    {
      bounds: {
        northeast: { lat: 28.5507583, lng: 77.12352109999999 },
        southwest: { lat: 28.5013164, lng: 77.0840307 }
      },
      copyrights: "Map data ©2019 Google",
      legs: [
        {
          distance: { text: "5.0 km", value: 5026 },
          duration: { text: "12 mins", value: 717 },
          end_address:
            "D Block, 324, Old Delhi Gurgaon Rd, D Block, Kapas Hera Extension, Kapas Hera Estate, New Delhi, Delhi 110037, India",
          end_location: { lat: 28.5296356, lng: 77.0872187 },
          start_address:
            "Plot No 685 & 686, Udyog Vihar Phase V, Gurugram, Haryana 122016, India",
          start_location: { lat: 28.5051238, lng: 77.08431139999999 },
          steps: [
            {
              distance: { text: "39 m", value: 39 },
              duration: { text: "1 min", value: 9 },
              end_location: { lat: 28.5053898, lng: 77.0845708 },
              html_instructions: "Head <b>northeast</b>",
              polyline: { points: "_l~lD}onuMu@s@" },
              start_location: { lat: 28.5051238, lng: 77.08431139999999 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "0.1 km", value: 111 },
              duration: { text: "1 min", value: 38 },
              end_location: { lat: 28.5060919, lng: 77.0842892 },
              html_instructions:
                "Turn <b>left</b> toward <b>Shankar Chowk Rd</b>",
              maneuver: "turn-left",
              polyline: { points: "um~lDqqnuMsAjBw@s@" },
              start_location: { lat: 28.5053898, lng: 77.0845708 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "1.7 km", value: 1744 },
              duration: { text: "4 mins", value: 212 },
              end_location: { lat: 28.5081365, lng: 77.0943947 },
              html_instructions:
                'Turn <b>right</b> onto <b>Shankar Chowk Rd</b><div style="font-size:0.9em">Pass by Pillar Number RP2U (on the right in 1.1&nbsp;km)</div>',
              maneuver: "turn-right",
              polyline: {
                points:
                  "ar~lDyonuMMMp@aA|DcGT]bCoDvDuFd@{@j@}@pAqBHMvCoE\\e@LONe@BO@KAKAKAGwBeBGEgAy@OMo@g@WSkA}@s@i@k@c@qB{A}AcA]U[Qm@[o@SSGWGi@Qi@Mk@Ik@Gk@Am@?k@Di@HSBQDSDQFQFQHQFQJ"
              },
              start_location: { lat: 28.5060919, lng: 77.0842892 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "78 m", value: 78 },
              duration: { text: "1 min", value: 7 },
              end_location: { lat: 28.5086962, lng: 77.0939199 },
              html_instructions: "Keep <b>left</b>",
              maneuver: "keep-left",
              polyline: {
                points: "{~~lD}npuMC@A@C@C@C@A@CBC@IHIFKHIFIHIHKHIH"
              },
              start_location: { lat: 28.5081365, lng: 77.0943947 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "1.7 km", value: 1659 },
              duration: { text: "4 mins", value: 222 },
              end_location: { lat: 28.5217983, lng: 77.0980775 },
              html_instructions:
                'Keep <b>left</b><div style="font-size:0.9em">Pass by Pillar Number RP9R (on the right in 1.6&nbsp;km)</div>',
              maneuver: "keep-left",
              polyline: {
                points:
                  "kb_mD_lpuMW\\[\\Y\\[X]Z]V]V_@V]P[R_@N]N_@N_@L_@J_@JE?E@E@G@E?E@E?G@W@W?YAWCWEWGWGWIeAE{AQ_@Iu@OyBmAwC{Am@[UMaAk@WOwBqA{GcEiCaBqEgCeBcAkAq@UMgAo@iAq@_B}@WS"
              },
              start_location: { lat: 28.5086962, lng: 77.0939199 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "1.4 km", value: 1367 },
              duration: { text: "4 mins", value: 220 },
              end_location: { lat: 28.5297134, lng: 77.087418 },
              html_instructions:
                "Turn <b>left</b> onto <b>Rao Matadin Yadav Marg</b>",
              maneuver: "turn-left",
              polyline: {
                points:
                  "gtamD_fquMm@vAi@fAeExFcE|F}BvC_@\\GHgAxAyBvCeBbCa@h@i@|@GJS\\_@j@e@t@ILyAnCSb@OXSXMLURURS\\gAlBSZ_@j@e@p@cA~A"
              },
              start_location: { lat: 28.5217983, lng: 77.0980775 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "28 m", value: 28 },
              duration: { text: "1 min", value: 9 },
              end_location: { lat: 28.5296356, lng: 77.0872187 },
              html_instructions:
                'Turn <b>left</b> at <b>Kapashera Chowk</b> onto <b>Old Delhi Gurgaon Rd</b><div style="font-size:0.9em">Destination will be on the left</div>',
              maneuver: "turn-left",
              polyline: { points: "uecmDkcouMGXTL" },
              start_location: { lat: 28.5297134, lng: 77.087418 },
              travel_mode: "DRIVING"
            }
          ],
          traffic_speed_entry: [],
          via_waypoint: []
        },
        {
          distance: { text: "7.2 km", value: 7155 },
          duration: { text: "20 mins", value: 1173 },
          end_address:
            "Aerocity Access Rd, Aerocity, Hospitality District, Asset Area 12, New Delhi, Delhi 110037, India",
          end_location: { lat: 28.5498807, lng: 77.123094 },
          start_address:
            "D Block, 324, Old Delhi Gurgaon Rd, D Block, Kapas Hera Extension, Kapas Hera Estate, New Delhi, Delhi 110037, India",
          start_location: { lat: 28.5296356, lng: 77.0872187 },
          steps: [
            {
              distance: { text: "0.4 km", value: 395 },
              duration: { text: "1 min", value: 70 },
              end_location: { lat: 28.5265121, lng: 77.08528869999999 },
              html_instructions:
                "Head <b>southwest</b> on <b>Old Delhi Gurgaon Rd</b> toward <b>Rao Chatur Bhuj Marg</b>",
              polyline: { points: "gecmDcbouMx@`@zBjAt@\\lH|Dz@f@ZN" },
              start_location: { lat: 28.5296356, lng: 77.0872187 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "1.4 km", value: 1438 },
              duration: { text: "6 mins", value: 336 },
              end_location: { lat: 28.5378197, lng: 77.09223220000001 },
              html_instructions:
                'Make a <b>U-turn</b><div style="font-size:0.9em">Pass by ICICI Bank ATM (on the left)</div>',
              maneuver: "uturn-right",
              polyline: {
                points:
                  "uqbmDavnuMGNsC{Aq@_@u@_@s@_@uAy@{@a@o@]y@a@_@S{@e@KImCyAmC_Be@WiAu@IEiBgAgAq@oCeBOKiAo@cB}@IEw@c@_EyBaBu@iAg@cAa@_@Oy@[wAg@"
              },
              start_location: { lat: 28.5265121, lng: 77.08528869999999 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "23 m", value: 23 },
              duration: { text: "1 min", value: 19 },
              end_location: { lat: 28.5380148, lng: 77.0923068 },
              html_instructions:
                "Continue straight to stay on <b>Old Delhi Gurgaon Rd</b>",
              maneuver: "straight",
              polyline: { points: "kxdmDmapuMe@O" },
              start_location: { lat: 28.5378197, lng: 77.09223220000001 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "1.7 km", value: 1678 },
              duration: { text: "2 mins", value: 147 },
              end_location: { lat: 28.5348703, lng: 77.1089774 },
              html_instructions: "Turn <b>right</b> onto <b>UER II</b>",
              maneuver: "turn-right",
              polyline: {
                points:
                  "qydmD}apuMSCBUZ_DR}AvA_Md@eFX_Db@oD^sDb@kE|@}I^iEJoAHaALmAN}@ZyBJu@d@uCBUt@aFr@uED]"
              },
              start_location: { lat: 28.5380148, lng: 77.0923068 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "0.1 km", value: 147 },
              duration: { text: "1 min", value: 16 },
              end_location: { lat: 28.5351779, lng: 77.1104185 },
              html_instructions: "Slight <b>left</b>",
              maneuver: "turn-slight-left",
              polyline: { points: "}edmDcjsuMCiAAi@CWCUGYESKWMc@GS" },
              start_location: { lat: 28.5348703, lng: 77.1089774 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "1.0 km", value: 1018 },
              duration: { text: "2 mins", value: 102 },
              end_location: { lat: 28.5414581, lng: 77.1173433 },
              html_instructions:
                'Continue straight<div style="font-size:0.9em">Pass by the gas station (on the left in 950&nbsp;m)</div>',
              maneuver: "straight",
              polyline: {
                points:
                  "{gdmDcssuM]eAYu@Sg@qD{I_@{@iAkCqAwCO[KQa@q@g@m@g@g@c@_@s@g@{@_@sAg@a@MwAg@A?A?CAAAo@WoCeAuAa@]G"
              },
              start_location: { lat: 28.5351779, lng: 77.1104185 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "36 m", value: 36 },
              duration: { text: "1 min", value: 5 },
              end_location: { lat: 28.5417813, lng: 77.11731920000001 },
              html_instructions: "Slight <b>left</b>",
              maneuver: "turn-slight-left",
              polyline: { points: "coemDk~tuMG?w@B" },
              start_location: { lat: 28.5414581, lng: 77.1173433 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "0.1 km", value: 127 },
              duration: { text: "1 min", value: 15 },
              end_location: { lat: 28.5428617, lng: 77.116894 },
              html_instructions: "Keep <b>right</b>",
              maneuver: "keep-right",
              polyline: { points: "cqemDg~tuMYFs@RwAh@q@N" },
              start_location: { lat: 28.5417813, lng: 77.11731920000001 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "0.8 km", value: 804 },
              duration: { text: "2 mins", value: 110 },
              end_location: { lat: 28.5465675, lng: 77.1233987 },
              html_instructions: "At the roundabout, take the <b>2nd</b> exit",
              maneuver: "roundabout-left",
              polyline: {
                points:
                  "{wemDq{tuMEBGBEBGBE@G@G@E?W@QEOGOKMKKOGQGS?AAEAGAEAG?E?G?E?EOeAWwAQy@Sy@c@cACGu@eBe@iAGQqA_D[u@k@}AO]EOKUa@gA_@}@[k@i@y@SU"
              },
              start_location: { lat: 28.5428617, lng: 77.116894 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "0.5 km", value: 521 },
              duration: { text: "2 mins", value: 90 },
              end_location: { lat: 28.5486341, lng: 77.119145 },
              html_instructions: "Turn <b>left</b> onto <b>IGI Rd</b>",
              maneuver: "turn-left",
              polyline: {
                points:
                  "aofmDgdvuMk@OSEOAG?G@GBIBKp@YvBG`@g@zBAB_@jAGPg@nBOj@e@`B[bAo@tB"
              },
              start_location: { lat: 28.5465675, lng: 77.1233987 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "0.4 km", value: 373 },
              duration: { text: "1 min", value: 88 },
              end_location: { lat: 28.5476311, lng: 77.1225717 },
              html_instructions:
                "Make a <b>U-turn</b> at <b>Northern Access Rd</b>",
              maneuver: "uturn-right",
              polyline: { points: "}{fmDsiuuMe@Wx@kEDOr@gCNe@dByFBQ" },
              start_location: { lat: 28.5486341, lng: 77.119145 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "0.3 km", value: 337 },
              duration: { text: "1 min", value: 72 },
              end_location: { lat: 28.5505545, lng: 77.1234739 },
              html_instructions:
                "Turn <b>left</b> onto <b>Aerocity Access Rd</b>",
              maneuver: "turn-left",
              polyline: { points: "uufmDa_vuMOEaAWaAOWGUCKCSEmE{@wCs@" },
              start_location: { lat: 28.5476311, lng: 77.1225717 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "88 m", value: 88 },
              duration: { text: "1 min", value: 26 },
              end_location: { lat: 28.5507583, lng: 77.1226025 },
              html_instructions: "Turn <b>left</b>",
              maneuver: "turn-left",
              polyline: { points: "}ggmDudvuMIb@Kr@StA" },
              start_location: { lat: 28.5505545, lng: 77.1234739 },
              travel_mode: "DRIVING"
            },
            {
              distance: { text: "0.2 km", value: 170 },
              duration: { text: "1 min", value: 77 },
              end_location: { lat: 28.5498807, lng: 77.123094 },
              html_instructions:
                'Turn <b>left</b><div style="font-size:0.9em">Restricted usage road</div><div style="font-size:0.9em">Destination will be on the left</div>',
              maneuver: "turn-left",
              polyline: { points: "gigmDg_vuMZFzBj@@?B?@CBGTyB?C?CAAACEA" },
              start_location: { lat: 28.5507583, lng: 77.1226025 },
              travel_mode: "DRIVING"
            }
          ],
          traffic_speed_entry: [],
          via_waypoint: []
        }
      ],
      overview_polyline: {
        points:
          "_l~lD}onuMu@s@sAjBeAaAhKsOvDuFd@{@|BoDlEsGRu@?WCS_CkB_DcC}GgF{ByAiAm@eCu@uAWwAIyAD}@LiAZy@^a@Xi@b@w@z@u@z@y@t@{@n@}@h@{@b@}@^eBd@eAJq@Ao@Io@OWIeAE{B[u@OyBmAeEwBwAy@uPgKyKkGiGsDwA~CiKvN}BvC_@\\oAbB_FzGkAfBaBjCgCzEa@f@k@f@oCrEiBpCGXTLtDlBbJzEvAv@GNsC{AgB_AiCyAeEuBgAo@{GyDcF{CwEwCyA{@eJaFkD}AcBq@qCcAy@S^uDjB}O~@eKbAcJ`BiPj@yGVoCj@wDjBcMx@sFEsBGm@Mm@_AuC_GuNwDqIiA_BkAgAs@g@{@_@uBu@_Bi@q@YoCeAuAa@e@Gw@BYFkC|@w@R[Lm@Da@M]WSa@GUG[?Yg@}Ce@sBcC{FaDeIcAkC{@iB}@oA_AUWAODIBKp@a@xCi@~Bg@|Aw@zCaAdDo@tBe@W~@{EbAmDhBkGqA]{B_@aFaAwCs@Ib@_@hCvCr@D?DKT}BAEGE"
      },
      summary: "Rao Matadin Yadav Marg",
      warnings: [],
      waypoint_order: [0]
    }
  ],
  status: "OK"
};
