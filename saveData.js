const getData = require('./getData');
var http = require('http');
var fs = require('fs');
var path = require('path');

//writes JSON strings to .json files to be read later by application
function saveData() {
  fs.writeFile(
    './public/spData.json',
    getData.getSharePointData().employeejson,
    function(err) {
      if (err) throw err;
    },
  );
  fs.writeFile(
    './public/eventData.json',
    getData.getSharePointData().eventjson,
    function(err) {
      if (err) throw err;
    },
  );
  //Reading the file system and creating JSON file with all of the filepaths to images
  imagefiles = {};
  imagefiles.topleft = fs.readdirSync('./public/images/topleft');
  imagefiles.bottomleft = fs.readdirSync('./public/images/bottomleft');
  imagefiles.bottomright = fs.readdirSync('./public/images/bottomright');

  //filer out non image/video files from json obj

  var newBottomRight = [];
  for (var i in imagefiles.bottomright) {
    if (
      path.extname(imagefiles.bottomright[i]) === '.jpg' ||
      path.extname(imagefiles.bottomright[i]) === '.png' ||
      path.extname(imagefiles.bottomright[i]) === '.jpeg' ||
      path.extname(imagefiles.bottomright[i]) === '.avi' ||
      path.extname(imagefiles.bottomright[i]) === '.mp4'
    ) {
      newBottomRight.push(imagefiles.bottomright[i]);
    }
  }
  imagefiles.bottomright = newBottomRight;

  var newTopLeft = [];
  for (var i in imagefiles.topleft) {
    if (
      path.extname(imagefiles.topleft[i]) === '.jpg' ||
      path.extname(imagefiles.topleft[i]) === '.png' ||
      path.extname(imagefiles.topleft[i]) === '.jpeg' ||
      path.extname(imagefiles.topleft[i]) === '.avi' ||
      path.extname(imagefiles.topleft[i]) === '.mp4'
    ) {
      newTopLeft.push(imagefiles.topleft[i]);
    }
  }
  imagefiles.topleft = newTopLeft;

  var newBottomLeft = [];
  for (var i in imagefiles.bottomleft) {
    if (
      path.extname(imagefiles.bottomleft[i]) === '.jpg' ||
      path.extname(imagefiles.bottomleft[i]) === '.png' ||
      path.extname(imagefiles.bottomleft[i]) === '.jpeg' ||
      path.extname(imagefiles.bottomleft[i]) === '.avi' ||
      path.extname(imagefiles.bottomleft[i]) === '.mp4'
    ) {
      newBottomLeft.push(imagefiles.bottomleft[i]);
    }
  }
  imagefiles.bottomleft = newBottomLeft;

  fs.writeFile(
    './public/images.json',
    JSON.stringify(imagefiles, null, 4),
    function(err) {
      if (err) throw err;
    },
  );
  console.log('New Data Saved');
}
//initial data save
saveData();
