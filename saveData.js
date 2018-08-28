const getData = require('./getData');
var http = require('http');
var fs = require('fs');

//writes JSON strings to .json files to be read later by application
function saveData() {
  fs.writeFile('./public/spData.json', getData.getSharePointData().employeejson, function (err) {
    if (err) throw err;
  });
  fs.writeFile('./public/eventData.json', getData.getSharePointData().eventjson, function (err) {
    if (err) throw err;
  });
  //Reading the file system and creating JSON file with all of the filepaths to images
  myfiles = {}
  myfiles.topleft = fs.readdirSync('./public/images/topleft');
  myfiles.bottomleft = fs.readdirSync('./public/images/bottomleft');
  myfiles.topright = fs.readdirSync('./public/images/topright');
  myfiles.bottomright =fs.readdirSync('./public/images/bottomright');

  fs.writeFile('./public/images.json', JSON.stringify(myfiles, null, 4), function (err) {
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
