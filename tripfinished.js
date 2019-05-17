const tripDats = {
    "_id" : "5ca32edd1c78de4f56402507",
    "isAccepted" : "pending",
    "tripDate" : "2019-04-02T09:32:35.344Z",
    "startTime" : "2019-04-02T10:30:00.000Z",
    "vehicleId" : "5ca32a2cf0be8456dfc5f0bd",
    "source" : {
        "address" : "Plot No: 262, Second Floor, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015, India",
        "latitude" : 28.4981769,
        "longitude" : 77.0808393
    },
    "groupName" : "FMS",
    "passengers" : [ 
        {
            "startOTPStatus" : false,
            "stopOTPStatus" : false,
            "_id" : "5ca32edd1c78de4f5640250b",
            "name" : "Akhilesh",
            "mobile" : "9876543213",
            "destination" : {
                "address" : "Gurugram Rd, Old, Palam Colony, Gurugram, Haryana 122015, India",
                "latitude" : 28.4946066,
                "longitude" : 77.0630994000001
            }
        }, 
        {
            "startOTPStatus" : false,
            "stopOTPStatus" : false,
            "_id" : "5ca32edd1c78de4f5640250a",
            "name" : "jitu",
            "mobile" : "8989767876",
            "destination" : {
                "address" : "Gurugram Rd, Old, Palam Colony, Gurugram, Haryana 122015, India",
                "latitude" : 28.4946066,
                "longitude" : 77.0630994000001
            }
        }, 
        {
            "startOTPStatus" : false,
            "stopOTPStatus" : false,
            "_id" : "5ca32edd1c78de4f56402509",
            "name" : "avinash",
            "mobile" : "7867654234",
            "destination" : {
                "address" : "Gurugram Rd, Old, Palam Colony, Gurugram, Haryana 122015, India",
                "latitude" : 28.4946066,
                "longitude" : 77.0630994000001
            }
        }, 
        {
            "startOTPStatus" : false,
            "stopOTPStatus" : false,
            "_id" : "5ca32edd1c78de4f56402508",
            "name" : "ankur ",
            "mobile" : "8787846463",
            "destination" : {
                "address" : "Gurugram Rd, Old, Palam Colony, Gurugram, Haryana 122015, India",
                "latitude" : 28.4946066,
                "longitude" : 77.0630994000001
            }
        }
    ],
    "createdBy" : "5c9b24e9447a2d14b444a6e5",
    "createdAt" : "2019-04-02T09:43:57.948Z",
    "updatedAt" : "2019-04-04T10:28:29.153Z",
    "__v" : 0,
    "driverId" : "5ca3524ef0be8456dfc5f0de",
    "tripStartedAt" : "2019-04-04T10:27:00.903Z",
    "tripStopedAt" : "2019-04-04T10:28:29.153Z"
};

function finishTrip() {
    try {
        let trip = tripDats;
        let passengerCount = trip.passengers.length;
        let passengers = trip.passengers;
        let stopOTPStatusArray = [];

        stopOTPStatusArray = passengers.filter((passenger) => {
            // console.log(`==> `,passenger);
            return !passenger.stopOTPStatus;
        });
        if (passengerCount === stopOTPStatusArray.length) {
            console.log(`FINISHED`);
        }
    } catch (e) {

    }
};

finishTrip();

