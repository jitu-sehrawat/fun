const moment = require('moment');
// console.log(moment().format());
// let tripStartedAt = moment.utc('2019-05-15T13:18:00.000Z');
// let tripStopedAt = moment('2019-05-15T15:30:00.000Z');
// console.log(tripStartedAt);
// console.log(tripStopedAt);

// console.log(
//   tripStopedAt.diff(tripStartedAt, 'hours', true), typeof tripStopedAt.diff(tripStartedAt, 'hours', true)
// );

// console.log(`1. `, moment().seconds());
let format = moment.utc('2019-05-15T01:00:00.000Z').format('HH:mm:ss');
let second = moment.duration(format).asSeconds();
console.log(format);
console.log(second);
console.log(
  moment()
    .startOf('date')
    .add(second, 'second')
);
