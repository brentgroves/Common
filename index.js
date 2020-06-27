
const datesMod = require('./dates');
const logMod = require('./log');

/*
FirstDayWeek,
LastDayWeek,
FirstDayMonth,
LastDayMonth,
FirstDayQuarter,
LastDayQuarter
const dates = dateMod.FirstDayWeek
*/
const log = logMod.log;
const FirstDayWeek = datesMod.FirstDayWeek;
const LastDayWeek = datesMod.LastDayWeek;
const FirstDayMonth = datesMod.FirstDayMonth;
const LastDayMonth = datesMod.LastDayMonth;
const FirstDayQuarter = datesMod.FirstDayQuarter;
const LastDayQuarter = datesMod.LastDayQuarter;


module.exports = {
    log,
    FirstDayWeek,
    LastDayWeek,
    FirstDayMonth,
    LastDayMonth,
    FirstDayQuarter,
    LastDayQuarter
}
