const getData = require('./getData');
var http = require('http');
var fs = require('fs');
var path = require('path');

//writes JSON strings to .json files to be read later by application
function saveData() {
  fs.writeFile('./public/spData.json', getData.getSharePointData().employeejson, function (err) {
    if (err) throw err;
  });
  fs.writeFile('./public/eventData.json', getData.getSharePointData().eventjson, function (err) {
    if (err) throw err;
  });
  //Reading the file system and creating JSON file with all of the filepaths to images
  imagefiles = {}
  imagefiles.topleft = fs.readdirSync('./public/images/topleft');
  imagefiles.bottomleft = fs.readdirSync('./public/images/bottomleft');
  imagefiles.topright = fs.readdirSync('./public/images/topright');

  //filer out non image/video files from json obj

  var newTopRight = [];
  for(var i in imagefiles.topright) {
     if(path.extname(imagefiles.topright[i]) === ".jpg" || path.extname(imagefiles.topright[i]) === ".png" || path.extname(imagefiles.topright[i]) === ".jpeg" || path.extname(imagefiles.topright[i]) === ".avi" || path.extname(imagefiles.topright[i]) === ".mp4") {
         newTopRight.push(imagefiles.topright[i])
     }
   }
   imagefiles.topright = newTopRight;

   var newTopLeft = [];
   for(var i in imagefiles.topleft) {
      if(path.extname(imagefiles.topleft[i]) === ".jpg" || path.extname(imagefiles.topleft[i]) === ".png" || path.extname(imagefiles.topleft[i]) === ".jpeg" || path.extname(imagefiles.topleft[i]) === ".avi" || path.extname(imagefiles.topleft[i]) === ".mp4") {
          newTopLeft.push(imagefiles.topleft[i])
      }
    }
    imagefiles.topleft = newTopLeft;

  var newBottomLeft = [];
  for(var i in imagefiles.bottomleft) {
     if(path.extname(imagefiles.bottomleft[i]) === ".jpg" || path.extname(imagefiles.bottomleft[i]) === ".png" || path.extname(imagefiles.bottomleft[i]) === ".jpeg" || path.extname(imagefiles.bottomleft[i]) === ".avi" || path.extname(imagefiles.bottomleft[i]) === ".mp4") {
         newBottomLeft.push(imagefiles.bottomleft[i])
     }
   }
   imagefiles.bottomleft = newBottomLeft;


  fs.writeFile('./public/images.json', JSON.stringify(imagefiles, null, 4), function (err) {
    if (err) throw err;
  });
  console.log("New Data Saved");
}
//initial data save
saveData();
