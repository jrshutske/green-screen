const shell = require('shelljs');
const convert = require('xml-js');
const parseNum = require('parse-num')
const fs = require('fs');

module.exports = {

  //grab XML from sharepoint list and return JSON formatted string.
  getSharePointData: function() {
    //curl to .txt file
    shell.exec("curl --ntlm -u ${CURL_USER}:${CURL_PASS} ${CURL_URL} > ./spData.txt")
    shell.exec("curl 'https://energy.wisc.edu/events/feed' > ./eventData.txt")

    //grants ability to read .txt files from filesystem
    require.extensions['.txt'] = function (module, filename) {
        module.exports = fs.readFileSync(filename, 'utf8');
    };
    //open .txt (formatted as XML) and convert to JSON and parse
    var xml1 = require("./spData.txt");
    var results1 = convert.xml2json(xml1, {compact: true, spaces: 2});
    let resultsParsed1 = JSON.parse(results1);
    let resultsArray1 = resultsParsed1.rss.channel.item;
    //create new JSON objects with employee names and offices to organize sharepoint data
    myJson1 = {}
      for (var k = 0; k < resultsArray1.length; k++) {
        var empkey = "employee" + k;
        myJson1[empkey] = {}
        var empval = resultsArray1[k].title._text;;
        var offval = resultsArray1[k].description._cdata;
        myJson1[empkey].name = empval;
        myJson1[empkey].office = offval;
      }
    //open .txt (formatted as XML) and convert to JSON and parse
    var xml2 = require("./eventData.txt")
    var results2 = convert.xml2json(xml2, {compact: true, spaces: 2});
    let resultsParsed2 = JSON.parse(results2);
    let resultsArray2 = resultsParsed2.rss.channel.item;
    //create new JSON objects with events to organize sharepoint data
    myJson2 = {}
      for (var t = 0; t < Object.keys(resultsArray2).length; t++) {
        var eventkey = "event" + t;
        myJson2[eventkey] = {}
        if (Object.keys(resultsArray2).length == 6 && Object.keys(resultsArray2)[1] == 'link') {
          var eventval = resultsArray2.title;
          var  dateval = resultsArray2.pubDate;
          myJson2[eventkey].name = eventval;
          myJson2[eventkey].date = dateval;
          break;
        }
        else {
          var eventval = resultsArray2[t].title;
          var  dateval = resultsArray2[t].pubDate;
          myJson2[eventkey].name = eventval;
          myJson2[eventkey].date = dateval;
          }

      }
      //return strings with JSON data in the form of strings
      return {
        employeejson: JSON.stringify(myJson1, null, 4),
        eventjson: JSON.stringify(myJson2, null, 4)
      }
    }
  }
