var message = "its over Anakin I have the high ground";
console.log(message);
var episode = 4;
console.log(episode);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = "R2-D2";
console.log("My favorite droid is " + favoriteDroid);
var isEnoghToBeatMf = function (parsec) {
    return parsec < 12;
};
var distance = 14;
console.log("Is " + distance + " parsec enough to beat Millenium Falcon? " + (isEnoghToBeatMf(distance) ? 'Yes' : 'No'));
var call = function (name) { return console.log("Do you copy, " + name + " ?"); };
call("Anakin");
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log(inc(5, 1));
console.log(inc(5));
