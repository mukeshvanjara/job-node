var cron = require('node-cron');
const dailyJob = require('./job_update') 

//run cron every minute (* * * * *)
//run cron every minute (minute hour * * *)
exports.runCronDaily = async () => {
    cron.schedule('1 * * * * *', () => {
        dailyJob.getStatusDaily();
        // console.log("trdt");
    });
}

//Weekly  Cron job run
exports.runCronWeekly = async () => {
    cron.schedule('10 * * * * *', () => {
        dailyJob.getStatusWeekly();
        // console.log("Weekly");
    });
}

//Monthly  Cron job run
exports.runCronMonthly = async () => {
    cron.schedule('15 * * * * *', () => {
        dailyJob.getStatusMonthly();
        // console.log("Monthly");
    });
}
