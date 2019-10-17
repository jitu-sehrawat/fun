// const CronJob = require('cron').CronJob;
// new CronJob(
//   '0,30 * * * * *',
//   function() {
//     console.log(
//       'You will see this message every 0th and 30th second: ',
//       new Date()
//     );
//   },
//   null,
//   true,
//   'Asia/Kolkata'
// );
//new CronJob('0/30 * * * * *', function() {
//  console.log('You will see this message every 30 second: ',new Date());
//}, null, true, 'America/Los_Angeles');

const CronJob = require('cron').CronJob;

// console.log('Before job instantiation');
// const job = new CronJob('*/5 * * * * *', function() {
//   const d = new Date();
//   console.log('First:', d);
// });

// const job2 = new CronJob('*/8 * * * * *', function() {
//   const d = new Date();
//   console.log('Second:', d);
// });
// console.log('After job instantiation');
// job.start();
// job2.start();

// new CronJob('*/10 * * * * *', function() {
//   const d = new Date();
//   console.log('Third:', d);
// }).start();

let jobsMap = new Map();
async function addJobToJobsArray(cronExpression, key) {
  jobsMap.set(
    1,
    new CronJob(cronExpression, function() {
      console.log(cronExpression);
      console.log(`key: `, key);
      jobsMap.delete(key);
      console.log(jobsMap.has(key));
    })
  );
  runDyanmicJobsArray();
}

async function runDyanmicJobsArray() {
  jobsMap.forEach((value, key) => {
    value.start(key);
  });
}
runDyanmicJobsArray();
let date = new Date();
date.setSeconds(date.getSeconds() + 1);
addJobToJobsArray(date, 1);
addJobToJobsArray(`0 08 14 17 9 *`, 2);
// addJobToJobsArray(`1 49 11 17 9 *`);
// addJobToJobsArray(`2 49 11 17 9 *`);
// addJobToJobsArray(`3 49 11 17 9 *`);
// addJobToJobsArray(`4 49 11 17 9 *`);
// addJobToJobsArray(`5 49 11 17 9 *`);
