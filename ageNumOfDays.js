var today = new Date().valueOf();
var dayInPast = new Date(1982, 8, 21).valueOf();

console.log(dayInPast.toLocaleString());
console.log(today.toLocaleString());

var ageMs = today - dayInPast;
console.log('age in ms: ', ageMs.toLocaleString() );

var ageS = Math.trunc(ageMs/1000);
console.log('age in seconds: ', ageS.toLocaleString() );

var secondInDay = 60 * 60 * 24;
var ageDays = Math.trunc(ageS/secondInDay);
console.log('age in days: ', ageDays.toLocaleString() );