var jstz = require('jstz');
var moment = require('moment');


const common = require('./index');

common.log('hello');

var today = new Date();
var firstDayOfWeek = common.FirstDayWeek(today);
common.log(`Now=${today}`);
common.log(`FirstDayOfWeek=${firstDayOfWeek}`);

const transDate = moment(new Date()).format("YYYY-MM-DDTHH:mm:ss");;
common.log(`transDate=>${transDate}`);

