const moment = require('moment')
const momenttz = require('moment-timezone')
const timeZone = 'Asia/Calcutta'


//these methods are there in standard time libraries
let now = () => {
  return moment.utc().format()  //method that returns current time in UTC format
}

let getLocalTime = () => {
  return moment().tz(timeZone).format()
}

let convertToLocalTime = (time) => {
  return momenttz.tz(time, timeZone).format('LLLL')
}

let isSameDayAsToday = (inputDate) => {

  if (new Date(inputDate).getUTCDate() == new Date().getUTCDate() && new Date() < new Date(inputDate)) {
    return true
  }
  else {
    return false
  }
}

module.exports = {
  now: now,
  getLocalTime: getLocalTime,
  convertToLocalTime: convertToLocalTime,
  isSameDayAsToday: isSameDayAsToday
}