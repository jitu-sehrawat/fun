const { insideCircle, distanceTo } = require("geolocation-utils");
const center = { lat: 28.5974182, lon: 77.1738331 };
const radius = 50000; // meters

// console.log(insideCircle({ lat: 28.593311, lon: 77.1691982 }, center, radius)); // true
// console.log(insideCircle({ lat: 28.4228855, lon: 76.8493509 }, center, radius)); // false
// console.log(distanceTo({ lat: 51, lon: 4 }, { lat: 51.0006, lon: 4.001 })); // distance in meter

const data = [
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.383703,
      LONG: 77.267677,
      TXNDATE: "2019-05-15T09:01:01.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.383743,
      LONG: 77.267677,
      TXNDATE: "2019-05-15T09:01:02.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.383899,
      LONG: 77.267677,
      TXNDATE: "2019-05-15T09:01:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.383964,
      LONG: 77.2677,
      TXNDATE: "2019-05-15T09:01:22.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.38412,
      LONG: 77.2677,
      TXNDATE: "2019-05-15T09:01:32.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.384307,
      LONG: 77.267715,
      TXNDATE: "2019-05-15T09:01:42.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.384378,
      LONG: 77.267745,
      TXNDATE: "2019-05-15T09:01:49.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.384468,
      LONG: 77.267921,
      TXNDATE: "2019-05-15T09:01:54.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.384691,
      LONG: 77.268272,
      TXNDATE: "2019-05-15T09:02:06.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.384855,
      LONG: 77.268463,
      TXNDATE: "2019-05-15T09:02:09.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.385242,
      LONG: 77.268928,
      TXNDATE: "2019-05-15T09:02:18.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.385274,
      LONG: 77.268974,
      TXNDATE: "2019-05-15T09:02:19.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.385431,
      LONG: 77.269233,
      TXNDATE: "2019-05-15T09:02:24.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.385547,
      LONG: 77.269783,
      TXNDATE: "2019-05-15T09:02:39.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.385562,
      LONG: 77.269874,
      TXNDATE: "2019-05-15T09:02:40.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.385639,
      LONG: 77.270233,
      TXNDATE: "2019-05-15T09:02:45.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.385702,
      LONG: 77.270408,
      TXNDATE: "2019-05-15T09:02:49.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.385742,
      LONG: 77.270515,
      TXNDATE: "2019-05-15T09:02:53.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.385852,
      LONG: 77.270828,
      TXNDATE: "2019-05-15T09:03:01.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.386058,
      LONG: 77.271392,
      TXNDATE: "2019-05-15T09:03:09.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.386444,
      LONG: 77.272407,
      TXNDATE: "2019-05-15T09:03:19.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.386524,
      LONG: 77.272605,
      TXNDATE: "2019-05-15T09:03:21.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.3868,
      LONG: 77.273399,
      TXNDATE: "2019-05-15T09:03:31.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.386819,
      LONG: 77.27349,
      TXNDATE: "2019-05-15T09:03:32.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.386899,
      LONG: 77.274063,
      TXNDATE: "2019-05-15T09:03:39.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.386926,
      LONG: 77.274284,
      TXNDATE: "2019-05-15T09:03:42.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.386966,
      LONG: 77.274658,
      TXNDATE: "2019-05-15T09:03:49.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.386987,
      LONG: 77.274688,
      TXNDATE: "2019-05-15T09:03:51.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.387006,
      LONG: 77.274688,
      TXNDATE: "2019-05-15T09:03:52.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.389282,
      LONG: 77.272613,
      TXNDATE: "2019-05-15T09:04:34.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.389591,
      LONG: 77.272308,
      TXNDATE: "2019-05-15T09:04:44.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.389766,
      LONG: 77.27214,
      TXNDATE: "2019-05-15T09:04:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.390108,
      LONG: 77.271835,
      TXNDATE: "2019-05-15T09:04:52.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.390235,
      LONG: 77.271705,
      TXNDATE: "2019-05-15T09:04:54.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.390735,
      LONG: 77.271118,
      TXNDATE: "2019-05-15T09:05:04.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.390855,
      LONG: 77.271095,
      TXNDATE: "2019-05-15T09:05:08.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.391143,
      LONG: 77.271148,
      TXNDATE: "2019-05-15T09:05:14.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.391599,
      LONG: 77.271308,
      TXNDATE: "2019-05-15T09:05:24.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.39188,
      LONG: 77.271484,
      TXNDATE: "2019-05-15T09:05:31.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.39204,
      LONG: 77.271362,
      TXNDATE: "2019-05-15T09:05:34.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.392259,
      LONG: 77.271148,
      TXNDATE: "2019-05-15T09:05:41.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.392387,
      LONG: 77.271034,
      TXNDATE: "2019-05-15T09:05:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.392475,
      LONG: 77.27095,
      TXNDATE: "2019-05-15T09:05:51.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.392803,
      LONG: 77.270645,
      TXNDATE: "2019-05-15T09:06:01.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.393119,
      LONG: 77.270416,
      TXNDATE: "2019-05-15T09:06:09.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.393188,
      LONG: 77.270347,
      TXNDATE: "2019-05-15T09:06:11.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.393407,
      LONG: 77.270103,
      TXNDATE: "2019-05-15T09:06:21.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.393676,
      LONG: 77.269699,
      TXNDATE: "2019-05-15T09:06:31.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.393692,
      LONG: 77.26966,
      TXNDATE: "2019-05-15T09:06:32.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.393867,
      LONG: 77.269325,
      TXNDATE: "2019-05-15T09:06:40.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.393892,
      LONG: 77.269287,
      TXNDATE: "2019-05-15T09:06:41.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.394128,
      LONG: 77.26889,
      TXNDATE: "2019-05-15T09:06:51.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.394247,
      LONG: 77.268661,
      TXNDATE: "2019-05-15T09:06:55.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.394411,
      LONG: 77.26847,
      TXNDATE: "2019-05-15T09:07:01.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.39451,
      LONG: 77.268402,
      TXNDATE: "2019-05-15T09:07:03.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.3948,
      LONG: 77.268173,
      TXNDATE: "2019-05-15T09:07:11.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.395048,
      LONG: 77.267997,
      TXNDATE: "2019-05-15T09:07:21.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.395135,
      LONG: 77.267921,
      TXNDATE: "2019-05-15T09:07:23.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.395435,
      LONG: 77.267669,
      TXNDATE: "2019-05-15T09:07:31.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.396099,
      LONG: 77.267105,
      TXNDATE: "2019-05-15T09:07:41.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.39624,
      LONG: 77.267005,
      TXNDATE: "2019-05-15T09:07:43.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.396711,
      LONG: 77.266647,
      TXNDATE: "2019-05-15T09:07:51.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.396963,
      LONG: 77.266456,
      TXNDATE: "2019-05-15T09:07:54.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.397455,
      LONG: 77.266113,
      TXNDATE: "2019-05-15T09:08:00.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.397518,
      LONG: 77.266075,
      TXNDATE: "2019-05-15T09:08:01.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.397731,
      LONG: 77.265945,
      TXNDATE: "2019-05-15T09:08:09.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.397758,
      LONG: 77.26596,
      TXNDATE: "2019-05-15T09:08:10.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.39818,
      LONG: 77.266433,
      TXNDATE: "2019-05-15T09:08:19.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.398508,
      LONG: 77.266845,
      TXNDATE: "2019-05-15T09:08:23.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.399868,
      LONG: 77.268539,
      TXNDATE: "2019-05-15T09:08:39.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.400358,
      LONG: 77.269584,
      TXNDATE: "2019-05-15T09:08:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.400491,
      LONG: 77.269836,
      TXNDATE: "2019-05-15T09:08:49.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.40089,
      LONG: 77.270545,
      TXNDATE: "2019-05-15T09:08:55.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.401514,
      LONG: 77.271598,
      TXNDATE: "2019-05-15T09:09:04.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402088,
      LONG: 77.272537,
      TXNDATE: "2019-05-15T09:09:32.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402227,
      LONG: 77.272552,
      TXNDATE: "2019-05-15T09:09:42.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402227,
      LONG: 77.272552,
      TXNDATE: "2019-05-15T09:09:52.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402227,
      LONG: 77.272552,
      TXNDATE: "2019-05-15T09:10:02.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402227,
      LONG: 77.272552,
      TXNDATE: "2019-05-15T09:10:12.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402227,
      LONG: 77.272552,
      TXNDATE: "2019-05-15T09:10:22.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402404,
      LONG: 77.272583,
      TXNDATE: "2019-05-15T09:10:32.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402698,
      LONG: 77.272598,
      TXNDATE: "2019-05-15T09:10:42.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402738,
      LONG: 77.27259,
      TXNDATE: "2019-05-15T09:10:52.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402738,
      LONG: 77.27259,
      TXNDATE: "2019-05-15T09:11:32.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402738,
      LONG: 77.27259,
      TXNDATE: "2019-05-15T09:12:02.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402835,
      LONG: 77.272613,
      TXNDATE: "2019-05-15T09:12:12.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.40323,
      LONG: 77.27246,
      TXNDATE: "2019-05-15T09:12:22.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.404031,
      LONG: 77.271095,
      TXNDATE: "2019-05-15T09:12:39.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.404203,
      LONG: 77.270736,
      TXNDATE: "2019-05-15T09:12:42.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.40459,
      LONG: 77.269935,
      TXNDATE: "2019-05-15T09:12:49.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.40504,
      LONG: 77.268898,
      TXNDATE: "2019-05-15T09:13:00.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.405239,
      LONG: 77.268081,
      TXNDATE: "2019-05-15T09:13:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.405244,
      LONG: 77.267837,
      TXNDATE: "2019-05-15T09:13:09.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.404939,
      LONG: 77.266815,
      TXNDATE: "2019-05-15T09:13:17.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.404827,
      LONG: 77.266571,
      TXNDATE: "2019-05-15T09:13:19.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.404663,
      LONG: 77.266227,
      TXNDATE: "2019-05-15T09:13:22.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.404027,
      LONG: 77.26477,
      TXNDATE: "2019-05-15T09:13:35.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.403911,
      LONG: 77.264205,
      TXNDATE: "2019-05-15T09:13:39.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402927,
      LONG: 77.255897,
      TXNDATE: "2019-05-15T09:14:49.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402832,
      LONG: 77.255302,
      TXNDATE: "2019-05-15T09:14:53.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402551,
      LONG: 77.253532,
      TXNDATE: "2019-05-15T09:15:04.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.402795,
      LONG: 77.252693,
      TXNDATE: "2019-05-15T09:15:09.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.404134,
      LONG: 77.251533,
      TXNDATE: "2019-05-15T09:15:19.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.406063,
      LONG: 77.249725,
      TXNDATE: "2019-05-15T09:15:36.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.4062,
      LONG: 77.249214,
      TXNDATE: "2019-05-15T09:15:39.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.406883,
      LONG: 77.245155,
      TXNDATE: "2019-05-15T09:16:04.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.406963,
      LONG: 77.244911,
      TXNDATE: "2019-05-15T09:16:06.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407815,
      LONG: 77.242103,
      TXNDATE: "2019-05-15T09:16:24.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407934,
      LONG: 77.241737,
      TXNDATE: "2019-05-15T09:16:26.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.408792,
      LONG: 77.240097,
      TXNDATE: "2019-05-15T09:16:36.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.409219,
      LONG: 77.239509,
      TXNDATE: "2019-05-15T09:16:40.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.409786,
      LONG: 77.238723,
      TXNDATE: "2019-05-15T09:16:46.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.41053,
      LONG: 77.237571,
      TXNDATE: "2019-05-15T09:16:56.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.410848,
      LONG: 77.237037,
      TXNDATE: "2019-05-15T09:17:02.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.410987,
      LONG: 77.236808,
      TXNDATE: "2019-05-15T09:17:06.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.40806,
      LONG: 77.217163,
      TXNDATE: "2019-05-15T09:19:03.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.408023,
      LONG: 77.215484,
      TXNDATE: "2019-05-15T09:19:13.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.408151,
      LONG: 77.213676,
      TXNDATE: "2019-05-15T09:19:23.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.408479,
      LONG: 77.212013,
      TXNDATE: "2019-05-15T09:19:33.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.40854,
      LONG: 77.211753,
      TXNDATE: "2019-05-15T09:19:35.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.408739,
      LONG: 77.210823,
      TXNDATE: "2019-05-15T09:19:43.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.408992,
      LONG: 77.20948,
      TXNDATE: "2019-05-15T09:19:53.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.409259,
      LONG: 77.207862,
      TXNDATE: "2019-05-15T09:20:03.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.409019,
      LONG: 77.206253,
      TXNDATE: "2019-05-15T09:20:13.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.408655,
      LONG: 77.205154,
      TXNDATE: "2019-05-15T09:20:21.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.408567,
      LONG: 77.204864,
      TXNDATE: "2019-05-15T09:20:23.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.408235,
      LONG: 77.203834,
      TXNDATE: "2019-05-15T09:20:30.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.408098,
      LONG: 77.203437,
      TXNDATE: "2019-05-15T09:20:33.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407636,
      LONG: 77.202079,
      TXNDATE: "2019-05-15T09:20:43.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407283,
      LONG: 77.201057,
      TXNDATE: "2019-05-15T09:20:50.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407136,
      LONG: 77.200645,
      TXNDATE: "2019-05-15T09:20:53.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.40681,
      LONG: 77.199287,
      TXNDATE: "2019-05-15T09:21:03.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407108,
      LONG: 77.197883,
      TXNDATE: "2019-05-15T09:21:13.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407379,
      LONG: 77.197036,
      TXNDATE: "2019-05-15T09:21:18.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407659,
      LONG: 77.196174,
      TXNDATE: "2019-05-15T09:21:23.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407714,
      LONG: 77.196006,
      TXNDATE: "2019-05-15T09:21:24.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.408056,
      LONG: 77.194717,
      TXNDATE: "2019-05-15T09:21:33.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407859,
      LONG: 77.193519,
      TXNDATE: "2019-05-15T09:21:41.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407804,
      LONG: 77.193389,
      TXNDATE: "2019-05-15T09:21:42.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407444,
      LONG: 77.192665,
      TXNDATE: "2019-05-15T09:21:51.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.406978,
      LONG: 77.191719,
      TXNDATE: "2019-05-15T09:22:01.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.406604,
      LONG: 77.190353,
      TXNDATE: "2019-05-15T09:22:11.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407527,
      LONG: 77.186653,
      TXNDATE: "2019-05-15T09:22:31.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407592,
      LONG: 77.186248,
      TXNDATE: "2019-05-15T09:22:33.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407579,
      LONG: 77.18486,
      TXNDATE: "2019-05-15T09:22:41.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407356,
      LONG: 77.183784,
      TXNDATE: "2019-05-15T09:22:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.407218,
      LONG: 77.182991,
      TXNDATE: "2019-05-15T09:22:51.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.406871,
      LONG: 77.180908,
      TXNDATE: "2019-05-15T09:23:01.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.406839,
      LONG: 77.180717,
      TXNDATE: "2019-05-15T09:23:02.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.406648,
      LONG: 77.179573,
      TXNDATE: "2019-05-15T09:23:08.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.406551,
      LONG: 77.179008,
      TXNDATE: "2019-05-15T09:23:11.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.4062,
      LONG: 77.177986,
      TXNDATE: "2019-05-15T09:23:17.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.405818,
      LONG: 77.177421,
      TXNDATE: "2019-05-15T09:23:21.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.404951,
      LONG: 77.176223,
      TXNDATE: "2019-05-15T09:23:31.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.404214,
      LONG: 77.174957,
      TXNDATE: "2019-05-15T09:23:40.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.404174,
      LONG: 77.174812,
      TXNDATE: "2019-05-15T09:23:41.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.40413,
      LONG: 77.17414,
      TXNDATE: "2019-05-15T09:23:46.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.404186,
      LONG: 77.173538,
      TXNDATE: "2019-05-15T09:23:51.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.404327,
      LONG: 77.172309,
      TXNDATE: "2019-05-15T09:24:01.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.404716,
      LONG: 77.171005,
      TXNDATE: "2019-05-15T09:24:11.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.405582,
      LONG: 77.17015,
      TXNDATE: "2019-05-15T09:24:20.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.40583,
      LONG: 77.170028,
      TXNDATE: "2019-05-15T09:24:22.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.406774,
      LONG: 77.169929,
      TXNDATE: "2019-05-15T09:24:30.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.411323,
      LONG: 77.167205,
      TXNDATE: "2019-05-15T09:25:40.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.411384,
      LONG: 77.167121,
      TXNDATE: "2019-05-15T09:25:50.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.411447,
      LONG: 77.167022,
      TXNDATE: "2019-05-15T09:26:00.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.411479,
      LONG: 77.166969,
      TXNDATE: "2019-05-15T09:26:10.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.411479,
      LONG: 77.166969,
      TXNDATE: "2019-05-15T09:26:20.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.41152,
      LONG: 77.166908,
      TXNDATE: "2019-05-15T09:26:30.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.41152,
      LONG: 77.166908,
      TXNDATE: "2019-05-15T09:26:40.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.41152,
      LONG: 77.166908,
      TXNDATE: "2019-05-15T09:26:50.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.41152,
      LONG: 77.166908,
      TXNDATE: "2019-05-15T09:27:00.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.41171,
      LONG: 77.166656,
      TXNDATE: "2019-05-15T09:27:10.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.411739,
      LONG: 77.166603,
      TXNDATE: "2019-05-15T09:27:20.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.41175,
      LONG: 77.166595,
      TXNDATE: "2019-05-15T09:27:30.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.41175,
      LONG: 77.166595,
      TXNDATE: "2019-05-15T09:27:40.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.41175,
      LONG: 77.166595,
      TXNDATE: "2019-05-15T09:27:50.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.4118,
      LONG: 77.166572,
      TXNDATE: "2019-05-15T09:28:00.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.411876,
      LONG: 77.166496,
      TXNDATE: "2019-05-15T09:28:03.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.412162,
      LONG: 77.166076,
      TXNDATE: "2019-05-15T09:28:10.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.412632,
      LONG: 77.165084,
      TXNDATE: "2019-05-15T09:28:19.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.412679,
      LONG: 77.164932,
      TXNDATE: "2019-05-15T09:28:20.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.412824,
      LONG: 77.164131,
      TXNDATE: "2019-05-15T09:28:25.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.41296,
      LONG: 77.163276,
      TXNDATE: "2019-05-15T09:28:30.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.413408,
      LONG: 77.162231,
      TXNDATE: "2019-05-15T09:28:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.413646,
      LONG: 77.161941,
      TXNDATE: "2019-05-15T09:28:40.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.414211,
      LONG: 77.161453,
      TXNDATE: "2019-05-15T09:28:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.414495,
      LONG: 77.161216,
      TXNDATE: "2019-05-15T09:28:50.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.414928,
      LONG: 77.16053,
      TXNDATE: "2019-05-15T09:28:56.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.414884,
      LONG: 77.159561,
      TXNDATE: "2019-05-15T09:29:02.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.414619,
      LONG: 77.158485,
      TXNDATE: "2019-05-15T09:29:08.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.414518,
      LONG: 77.15792,
      TXNDATE: "2019-05-15T09:29:12.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.414608,
      LONG: 77.157478,
      TXNDATE: "2019-05-15T09:29:16.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.41501,
      LONG: 77.15702,
      TXNDATE: "2019-05-15T09:29:21.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.415119,
      LONG: 77.156982,
      TXNDATE: "2019-05-15T09:29:22.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.416296,
      LONG: 77.157051,
      TXNDATE: "2019-05-15T09:29:31.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.417724,
      LONG: 77.157218,
      TXNDATE: "2019-05-15T09:29:41.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.418159,
      LONG: 77.157226,
      TXNDATE: "2019-05-15T09:29:44.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.419099,
      LONG: 77.156791,
      TXNDATE: "2019-05-15T09:29:51.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.419591,
      LONG: 77.155853,
      TXNDATE: "2019-05-15T09:29:57.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.419847,
      LONG: 77.154006,
      TXNDATE: "2019-05-15T09:30:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.419891,
      LONG: 77.153648,
      TXNDATE: "2019-05-15T09:30:09.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.420284,
      LONG: 77.15213,
      TXNDATE: "2019-05-15T09:30:17.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.420463,
      LONG: 77.151771,
      TXNDATE: "2019-05-15T09:30:19.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.422403,
      LONG: 77.149368,
      TXNDATE: "2019-05-15T09:30:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.422542,
      LONG: 77.149276,
      TXNDATE: "2019-05-15T09:30:38.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.423746,
      LONG: 77.148559,
      TXNDATE: "2019-05-15T09:30:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.424564,
      LONG: 77.147666,
      TXNDATE: "2019-05-15T09:30:55.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.425504,
      LONG: 77.146499,
      TXNDATE: "2019-05-15T09:31:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.425752,
      LONG: 77.146156,
      TXNDATE: "2019-05-15T09:31:17.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.426151,
      LONG: 77.145629,
      TXNDATE: "2019-05-15T09:31:27.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.426778,
      LONG: 77.14476,
      TXNDATE: "2019-05-15T09:31:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.427684,
      LONG: 77.143638,
      TXNDATE: "2019-05-15T09:31:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.427875,
      LONG: 77.143417,
      TXNDATE: "2019-05-15T09:31:49.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.428543,
      LONG: 77.142608,
      TXNDATE: "2019-05-15T09:32:00.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.428768,
      LONG: 77.142341,
      TXNDATE: "2019-05-15T09:32:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.429231,
      LONG: 77.141761,
      TXNDATE: "2019-05-15T09:32:17.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.429956,
      LONG: 77.140861,
      TXNDATE: "2019-05-15T09:32:27.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.430339,
      LONG: 77.140373,
      TXNDATE: "2019-05-15T09:32:32.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.430543,
      LONG: 77.140106,
      TXNDATE: "2019-05-15T09:32:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.43057,
      LONG: 77.14006,
      TXNDATE: "2019-05-15T09:32:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.430578,
      LONG: 77.140022,
      TXNDATE: "2019-05-15T09:32:57.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.430736,
      LONG: 77.139816,
      TXNDATE: "2019-05-15T09:33:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.431098,
      LONG: 77.139373,
      TXNDATE: "2019-05-15T09:33:15.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.431175,
      LONG: 77.139282,
      TXNDATE: "2019-05-15T09:33:17.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.431455,
      LONG: 77.138923,
      TXNDATE: "2019-05-15T09:33:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.431978,
      LONG: 77.138252,
      TXNDATE: "2019-05-15T09:33:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.432159,
      LONG: 77.138038,
      TXNDATE: "2019-05-15T09:33:50.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.43238,
      LONG: 77.137771,
      TXNDATE: "2019-05-15T09:33:56.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.432426,
      LONG: 77.13771,
      TXNDATE: "2019-05-15T09:34:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.432426,
      LONG: 77.13771,
      TXNDATE: "2019-05-15T09:34:17.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.432592,
      LONG: 77.137474,
      TXNDATE: "2019-05-15T09:34:27.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.432727,
      LONG: 77.137313,
      TXNDATE: "2019-05-15T09:34:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.432783,
      LONG: 77.13726,
      TXNDATE: "2019-05-15T09:34:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.432975,
      LONG: 77.137046,
      TXNDATE: "2019-05-15T09:34:56.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.432987,
      LONG: 77.137031,
      TXNDATE: "2019-05-15T09:35:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.433099,
      LONG: 77.136863,
      TXNDATE: "2019-05-15T09:35:27.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.433515,
      LONG: 77.136344,
      TXNDATE: "2019-05-15T09:35:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.433834,
      LONG: 77.135963,
      TXNDATE: "2019-05-15T09:35:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.434303,
      LONG: 77.135375,
      TXNDATE: "2019-05-15T09:36:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.434562,
      LONG: 77.135086,
      TXNDATE: "2019-05-15T09:36:14.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.4347,
      LONG: 77.134902,
      TXNDATE: "2019-05-15T09:36:17.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.434955,
      LONG: 77.134567,
      TXNDATE: "2019-05-15T09:36:23.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.435066,
      LONG: 77.134429,
      TXNDATE: "2019-05-15T09:36:27.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.435335,
      LONG: 77.134078,
      TXNDATE: "2019-05-15T09:36:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.43588,
      LONG: 77.133453,
      TXNDATE: "2019-05-15T09:36:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.436487,
      LONG: 77.132713,
      TXNDATE: "2019-05-15T09:36:57.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.436939,
      LONG: 77.13211,
      TXNDATE: "2019-05-15T09:37:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437198,
      LONG: 77.131729,
      TXNDATE: "2019-05-15T09:37:17.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437324,
      LONG: 77.131523,
      TXNDATE: "2019-05-15T09:37:24.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437335,
      LONG: 77.1315,
      TXNDATE: "2019-05-15T09:37:27.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.43736,
      LONG: 77.131469,
      TXNDATE: "2019-05-15T09:37:34.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437414,
      LONG: 77.13137,
      TXNDATE: "2019-05-15T09:37:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437583,
      LONG: 77.131004,
      TXNDATE: "2019-05-15T09:37:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437755,
      LONG: 77.130645,
      TXNDATE: "2019-05-15T09:37:57.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437828,
      LONG: 77.130493,
      TXNDATE: "2019-05-15T09:38:02.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437854,
      LONG: 77.130462,
      TXNDATE: "2019-05-15T09:38:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437854,
      LONG: 77.130462,
      TXNDATE: "2019-05-15T09:38:10.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437854,
      LONG: 77.130462,
      TXNDATE: "2019-05-15T09:38:17.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.438127,
      LONG: 77.130027,
      TXNDATE: "2019-05-15T09:38:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.438154,
      LONG: 77.129997,
      TXNDATE: "2019-05-15T09:38:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.438154,
      LONG: 77.129997,
      TXNDATE: "2019-05-15T09:38:57.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.438259,
      LONG: 77.12989,
      TXNDATE: "2019-05-15T09:39:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.43831,
      LONG: 77.129852,
      TXNDATE: "2019-05-15T09:39:17.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.43831,
      LONG: 77.129852,
      TXNDATE: "2019-05-15T09:39:27.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.438386,
      LONG: 77.129768,
      TXNDATE: "2019-05-15T09:39:35.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.438415,
      LONG: 77.129745,
      TXNDATE: "2019-05-15T09:39:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.438642,
      LONG: 77.129539,
      TXNDATE: "2019-05-15T09:39:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.439535,
      LONG: 77.127082,
      TXNDATE: "2019-05-15T09:40:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.439464,
      LONG: 77.126609,
      TXNDATE: "2019-05-15T09:40:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.438716,
      LONG: 77.125663,
      TXNDATE: "2019-05-15T09:41:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.438032,
      LONG: 77.125442,
      TXNDATE: "2019-05-15T09:41:17.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437707,
      LONG: 77.12535,
      TXNDATE: "2019-05-15T09:41:22.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437328,
      LONG: 77.125228,
      TXNDATE: "2019-05-15T09:41:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437303,
      LONG: 77.125228,
      TXNDATE: "2019-05-15T09:41:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437303,
      LONG: 77.125228,
      TXNDATE: "2019-05-15T09:41:57.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437303,
      LONG: 77.125228,
      TXNDATE: "2019-05-15T09:42:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437244,
      LONG: 77.125175,
      TXNDATE: "2019-05-15T09:42:14.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437219,
      LONG: 77.125167,
      TXNDATE: "2019-05-15T09:42:17.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437219,
      LONG: 77.125167,
      TXNDATE: "2019-05-15T09:42:27.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437219,
      LONG: 77.125167,
      TXNDATE: "2019-05-15T09:43:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437219,
      LONG: 77.125167,
      TXNDATE: "2019-05-15T09:43:17.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437219,
      LONG: 77.125167,
      TXNDATE: "2019-05-15T09:43:27.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.437219,
      LONG: 77.125167,
      TXNDATE: "2019-05-15T09:43:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.436847,
      LONG: 77.125068,
      TXNDATE: "2019-05-15T09:43:47.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.436067,
      LONG: 77.12387,
      TXNDATE: "2019-05-15T09:44:06.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.436084,
      LONG: 77.123657,
      TXNDATE: "2019-05-15T09:44:09.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.436124,
      LONG: 77.123336,
      TXNDATE: "2019-05-15T09:44:15.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.436128,
      LONG: 77.123291,
      TXNDATE: "2019-05-15T09:44:16.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.436191,
      LONG: 77.123016,
      TXNDATE: "2019-05-15T09:44:22.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.436296,
      LONG: 77.122749,
      TXNDATE: "2019-05-15T09:44:26.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.436887,
      LONG: 77.122146,
      TXNDATE: "2019-05-15T09:44:35.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.436986,
      LONG: 77.122085,
      TXNDATE: "2019-05-15T09:44:36.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.438035,
      LONG: 77.121994,
      TXNDATE: "2019-05-15T09:44:45.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.439439,
      LONG: 77.122077,
      TXNDATE: "2019-05-15T09:44:55.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.440856,
      LONG: 77.122138,
      TXNDATE: "2019-05-15T09:45:05.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.442211,
      LONG: 77.122177,
      TXNDATE: "2019-05-15T09:45:15.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.447912,
      LONG: 77.122192,
      TXNDATE: "2019-05-15T09:46:15.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.447959,
      LONG: 77.122192,
      TXNDATE: "2019-05-15T09:46:25.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.447959,
      LONG: 77.122192,
      TXNDATE: "2019-05-15T09:46:35.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.447959,
      LONG: 77.122192,
      TXNDATE: "2019-05-15T09:46:45.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.448144,
      LONG: 77.122207,
      TXNDATE: "2019-05-15T09:47:05.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.448802,
      LONG: 77.122215,
      TXNDATE: "2019-05-15T09:47:15.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.449804,
      LONG: 77.122184,
      TXNDATE: "2019-05-15T09:47:25.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.451219,
      LONG: 77.122108,
      TXNDATE: "2019-05-15T09:47:35.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.452487,
      LONG: 77.122032,
      TXNDATE: "2019-05-15T09:47:43.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.452816,
      LONG: 77.122016,
      TXNDATE: "2019-05-15T09:47:45.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.454519,
      LONG: 77.121925,
      TXNDATE: "2019-05-15T09:47:55.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.455566,
      LONG: 77.121818,
      TXNDATE: "2019-05-15T09:48:01.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.456235,
      LONG: 77.121482,
      TXNDATE: "2019-05-15T09:48:05.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.457059,
      LONG: 77.120941,
      TXNDATE: "2019-05-15T09:48:10.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.457868,
      LONG: 77.120414,
      TXNDATE: "2019-05-15T09:48:15.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.458351,
      LONG: 77.120124,
      TXNDATE: "2019-05-15T09:48:18.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.45922,
      LONG: 77.11956,
      TXNDATE: "2019-05-15T09:48:25.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.460231,
      LONG: 77.118812,
      TXNDATE: "2019-05-15T09:48:35.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.464607,
      LONG: 77.115951,
      TXNDATE: "2019-05-15T09:49:10.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.464891,
      LONG: 77.11576,
      TXNDATE: "2019-05-15T09:49:12.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.466772,
      LONG: 77.112831,
      TXNDATE: "2019-05-15T09:49:34.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.466768,
      LONG: 77.112655,
      TXNDATE: "2019-05-15T09:49:35.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.466678,
      LONG: 77.111091,
      TXNDATE: "2019-05-15T09:49:44.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.466667,
      LONG: 77.110939,
      TXNDATE: "2019-05-15T09:49:45.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.466655,
      LONG: 77.110374,
      TXNDATE: "2019-05-15T09:49:50.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.466695,
      LONG: 77.110076,
      TXNDATE: "2019-05-15T09:49:55.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.466703,
      LONG: 77.110054,
      TXNDATE: "2019-05-15T09:50:05.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.466703,
      LONG: 77.110054,
      TXNDATE: "2019-05-15T09:50:15.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.466703,
      LONG: 77.110054,
      TXNDATE: "2019-05-15T09:50:25.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.466703,
      LONG: 77.110054,
      TXNDATE: "2019-05-15T09:50:35.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.466703,
      LONG: 77.110054,
      TXNDATE: "2019-05-15T09:50:45.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.466814,
      LONG: 77.109664,
      TXNDATE: "2019-05-15T09:50:55.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.467094,
      LONG: 77.109169,
      TXNDATE: "2019-05-15T09:51:00.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.467338,
      LONG: 77.108802,
      TXNDATE: "2019-05-15T09:51:05.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.467428,
      LONG: 77.108673,
      TXNDATE: "2019-05-15T09:51:07.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.467651,
      LONG: 77.108268,
      TXNDATE: "2019-05-15T09:51:14.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.467546,
      LONG: 77.107902,
      TXNDATE: "2019-05-15T09:51:18.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.466983,
      LONG: 77.107452,
      TXNDATE: "2019-05-15T09:51:24.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.466035,
      LONG: 77.106903,
      TXNDATE: "2019-05-15T09:51:31.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.465511,
      LONG: 77.106781,
      TXNDATE: "2019-05-15T09:51:34.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.464954,
      LONG: 77.106674,
      TXNDATE: "2019-05-15T09:51:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.464302,
      LONG: 77.106422,
      TXNDATE: "2019-05-15T09:51:42.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.464244,
      LONG: 77.10633,
      TXNDATE: "2019-05-15T09:51:43.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.464115,
      LONG: 77.105148,
      TXNDATE: "2019-05-15T09:51:52.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.463251,
      LONG: 77.095336,
      TXNDATE: "2019-05-15T09:54:12.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.46335,
      LONG: 77.095184,
      TXNDATE: "2019-05-15T09:54:15.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.465379,
      LONG: 77.094718,
      TXNDATE: "2019-05-15T09:54:35.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.466459,
      LONG: 77.094512,
      TXNDATE: "2019-05-15T09:54:45.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.46787,
      LONG: 77.094261,
      TXNDATE: "2019-05-15T09:55:05.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.468507,
      LONG: 77.094139,
      TXNDATE: "2019-05-15T09:55:15.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.469287,
      LONG: 77.094009,
      TXNDATE: "2019-05-15T09:55:25.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.470356,
      LONG: 77.093849,
      TXNDATE: "2019-05-15T09:55:35.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.470787,
      LONG: 77.093826,
      TXNDATE: "2019-05-15T09:55:40.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.471166,
      LONG: 77.093803,
      TXNDATE: "2019-05-15T09:55:45.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.471511,
      LONG: 77.093833,
      TXNDATE: "2019-05-15T09:55:51.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.471967,
      LONG: 77.093826,
      TXNDATE: "2019-05-15T09:56:05.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.472578,
      LONG: 77.093894,
      TXNDATE: "2019-05-15T09:56:15.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.50485,
      LONG: 77.084198,
      TXNDATE: "2019-05-15T10:20:25.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.50485,
      LONG: 77.084198,
      TXNDATE: "2019-05-15T10:20:35.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.50485,
      LONG: 77.084198,
      TXNDATE: "2019-05-15T10:21:36.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.50485,
      LONG: 77.084198,
      TXNDATE: "2019-05-15T10:22:37.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.50485,
      LONG: 77.084198,
      TXNDATE: "2019-05-15T10:23:08.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.50485,
      LONG: 77.084198,
      TXNDATE: "2019-05-15T10:23:18.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.50485,
      LONG: 77.084198,
      TXNDATE: "2019-05-15T10:23:38.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.50485,
      LONG: 77.084198,
      TXNDATE: "2019-05-15T10:24:09.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.50485,
      LONG: 77.084198,
      TXNDATE: "2019-05-15T10:24:19.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.50485,
      LONG: 77.084198,
      TXNDATE: "2019-05-15T10:24:39.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.50485,
      LONG: 77.084198,
      TXNDATE: "2019-05-15T10:25:40.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.50485,
      LONG: 77.084198,
      TXNDATE: "2019-05-15T10:26:21.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.50485,
      LONG: 77.084198,
      TXNDATE: "2019-05-15T10:26:31.000Z"
    }
  },
  {
    _id: "5cdaa7749f168d6ecfc6b2f7",
    vehicleId: {
      registrationNumber: "HR26VI9876"
    },
    tripStartedAt: "2019-05-15T09:00:00.560Z",
    tripStopedAt: "2019-05-15T10:27:00.724Z",
    nipponData: {
      IMEI: "358943051237781",
      LAT: 28.50485,
      LONG: 77.084198,
      TXNDATE: "2019-05-15T10:26:41.000Z"
    }
  }
];

let sum = 0;
let initalTime = new Date();
let tripDistance = data.reduce((acc, val, index) => {
  // console.log(
  //   `a: ${acc.nipponData.TXNDATE}: Lat: ${acc.nipponData.LAT}, Long: ${
  //     acc.nipponData.LONG
  //   }`
  // );
  // console.log(
  //   `b: ${val.nipponData.TXNDATE}: Lat: ${val.nipponData.LAT}, Long: ${
  //     val.nipponData.LONG
  //   }`
  // );
  // console.log(
  //   distanceTo(
  //     {
  //       lat: acc.nipponData.LAT,
  //       lon: acc.nipponData.LONG
  //     },
  //     {
  //       lat: val.nipponData.LAT,
  //       lon: val.nipponData.LONG
  //     }
  //   )
  // );
  // sum += distanceTo(
  //   {
  //     lat: acc.nipponData.LAT,
  //     lon: acc.nipponData.LONG
  //   },
  //   {
  //     lat: val.nipponData.LAT,
  //     lon: val.nipponData.LONG
  //   }
  // );
  // console.log(`sum: ${sum / 1000} KM\n`);
  // console.log(`index: ${index}`);
  // process.exit(1);
  // return val;
  sum += getDistanceFromLatLonInKm(
    acc.nipponData.LAT,
    acc.nipponData.LONG,
    val.nipponData.LAT,
    val.nipponData.LONG
  );
  return index === data.length - 1 ? sum : val;
});

console.log(initalTime);
console.log(new Date());
console.log(tripDistance);

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
