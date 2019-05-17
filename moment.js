const moment = require('moment');
// console.log(moment().format());
let tripStartedAt = moment('2019-05-14T13:18:00.000Z');
let tripStopedAt = moment('2019-05-15T15:30:00.000Z');
console.log(tripStartedAt);
console.log(tripStopedAt);

console.log(
  tripStopedAt.diff(tripStartedAt, 'hours', true)
);
