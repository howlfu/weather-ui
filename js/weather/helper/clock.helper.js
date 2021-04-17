
var format = require('./base.format');

var _monthMap = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

// var _weekdayMap = [
//   L10N.SUNDAY, L10N.MONDAY, L10N.TUESDAY, L10N.WEDNESDAY,
//   L10N.THURSDAY, L10N.FRIDAY, L10N.SATURDAY
// ];

// var _weekday = ['SUN.', 'MON.', 'TUE.', 'WED.', 'THU.', 'FRI.', 'SAT.'];
var _weekdayMap = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var _weekdayMapEn = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var _weekMonMapEn = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
var TPL_TIME = '{0}:{1}';
var TPL_DATE = '{0} 年 {1} 月 {2} 日 {3}';
var TPL_DATE_EN = '{0}  {1}  {2}  {3}';

var ClockHelper = {

  getYear: function (date) {
    return date.getFullYear();
  },

  getHours: function (date) {
    return this.padZero(date.getHours(), 2);
  },

  getMinutes: function (date) {
    return this.padZero(date.getMinutes(), 2);
  },

  getHourMinuteString: function (date) {
    var hours = this.getHours(date);
    var minutes = this.getMinutes(date);

    return format.str(TPL_TIME, hours, minutes);
  },

  getDateWeekdayString: function (date) {
    var year = date.getYear() + 1900;
    var weekday = date.getDay();
    var month = date.getMonth();
    var date = date.getDate();

    return format.str(TPL_DATE, year, month + 1, date, _weekdayMap[weekday]);
  },

  getDateWeekdayStringEn: function (date) {
    var year = date.getYear() + 1900;
    var weekday = date.getDay();
    var month = date.getMonth();
    var date = date.getDate();

    return format.str(TPL_DATE_EN, _weekdayMapEn[weekday], date, _weekMonMapEn[month], year);
  },

  padZero: function (number, size) {
    return format.toFixDigit(number, size);
    /*
    var s = '0000000000' + number;
    return s.substr(s.length - size);
    */
  }
};

module.exports = ClockHelper;