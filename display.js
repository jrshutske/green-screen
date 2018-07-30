const spg = require('./spgrab');
const express = require('express')
const app = express();
var http = require('http');
var fs = require('fs');


function saveData() {

  fs.writeFile('spData.json', spg.getSharePointData(), function (err) {
    if (err) throw err;
    console.log('New data saved!');

  });
myfiles = {}
  myfiles.topleft = fs.readdirSync('./images/topleft');
  myfiles.bottomleft =fs.readdirSync('./images/bottomleft');
  myfiles.topright =fs.readdirSync('./images/topright');
  myfiles.bottomright =fs.readdirSync('./images/bottomright');



  fs.writeFile('images.json', JSON.stringify(myfiles, null, 4), function (err) {
    if (err) throw err;
    console.log('New data saved!');

  });
  console.log(myfiles)
}
 saveData();

setInterval(function(){
  saveData();

}, 10000);










//spData = spData.toString();
//'./green-screen.html'.getElementById("slideshow").innerHTML = "Hello World!";
