var CronJob = require('cron').CronJob;
new CronJob('0,30 * * * * *', function() {
  console.log('You will see this message every 0th and 30th second: ',new Date());
}, null, true, 'America/Los_Angeles');

//new CronJob('0/30 * * * * *', function() {
//  console.log('You will see this message every 30 second: ',new Date());
//}, null, true, 'America/Los_Angeles');
