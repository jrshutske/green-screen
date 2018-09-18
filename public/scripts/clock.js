var tmonth = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.',
];

function GetClock() {
    var d = new Date();
    var nmonth = d.getMonth(),
        ndate = d.getDate(),
        nyear = d.getFullYear().toString().substr(-2);
    var nhour = d.getHours(),
        nmin = d.getMinutes(),
        ap;
    if (nhour == 0) {
        ap = ' AM';
        nhour = 12;
    } else if (nhour < 12) {
        ap = ' AM';
    } else if (nhour == 12) {
        ap = ' PM';
    } else if (nhour > 12) {
        ap = ' PM';
        nhour -= 12;
    }
    if (nmin <= 9) nmin = '0' + nmin;
    var clocktext = '' + tmonth[nmonth] + ' ' + ndate + '-' + nyear + '';
    var clocktime = '' + nhour + ':' + nmin + ap + '';
    document.getElementById('clockbox').innerHTML = clocktext;
    document.getElementById('clocktime').innerHTML = clocktime;
}
GetClock();
setInterval(GetClock, 1000);