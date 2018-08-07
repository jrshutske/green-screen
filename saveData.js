const getData = require('./getData');
const express = require('express')
const app = express();
var http = require('http');
var fs = require('fs');

function saveData() {
  fs.writeFile('spData.json', getData.getSharePointData().employeejson, function (err) {
    if (err) throw err;
  });
  fs.writeFile('eventData.json', getData.getSharePointData().eventjson, function (err) {
    if (err) throw err;
  });
  //Reading the file system and creating JSON file with all of the filepaths to images
  myfiles = {}
  myfiles.topleft = fs.readdirSync('./images/topleft');
  myfiles.bottomleft = fs.readdirSync('./images/bottomleft');
  myfiles.topright = fs.readdirSync('./images/topright');
  myfiles.bottomright =fs.readdirSync('./images/bottomright');

  fs.writeFile('images.json', JSON.stringify(myfiles, null, 4), function (err) {
    if (err) throw err;
  });
  console.log("New Data Saved");
}
//initial data save
saveData();
//timed data save
setInterval(function(){
  saveData();
}, 7200000);










//spData = spData.toString();
//'./green-screen.html'.getElementById("slideshow").innerHTML = "Hello World!";
