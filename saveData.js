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
  imagefiles = {}
  imagefiles.topleft = fs.readdirSync('./public/images/topleft');
  imagefiles.bottomleft = fs.readdirSync('./public/images/bottomleft');
  imagefiles.topright = fs.readdirSync('./public/images/topright');

  if (imagefiles.topleft[0] == '.DS_Store'){
    imagefiles.topleft.splice(0,1);
  }
  if (imagefiles.topright[0] == '.DS_Store'){
    imagefiles.topright.splice(0,1);
  }
  if (imagefiles.bottomleft[0] == '.DS_Store'){
    imagefiles.bottomleft.splice(0,1);
  }


  fs.writeFile('./public/images.json', JSON.stringify(imagefiles, null, 4), function (err) {
    if (err) throw err;
  });
  console.log("New Data Saved");
}
//initial data save
saveData();
