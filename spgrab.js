const shell = require('shelljs');
const convert = require('xml-js');
const parseNum = require('parse-num')
const fs = require('fs');

module.exports = {

  getSharePointData: function() {
    shell.exec("curl --anyauth --user user:password 'https://intranet.wei.wisc.edu/toolsportal/people/_layouts/15/listfeed.aspx?List=bef8adc8-42f3-4eef-92eb-d5424e185da7&View=9a9091f8-3b80-4f21-a7da-541ba8bc97b0' > /Users/jackshutske/Documents/git/green-screen/rssfeed.txt")

    require.extensions['.txt'] = function (module, filename) {
        module.exports = fs.readFileSync(filename, 'utf8');
    };

    var xml = require("./rssfeed.txt");
    var results = convert.xml2json(xml, {compact: true, spaces: 2});
    let resultsParsed = JSON.parse(results);

    let resultsArray = resultsParsed.rss.channel.item;
    let finalResults = "";


      myJson = {}
        for (var k = 1; k < resultsArray.length; k++) {
          var empkey = "employee" + k;
          var namekey = "name";
          var offkey = "office";
          myJson[empkey] = {}

            var empval = resultsArray[k].title._text;;
            var offval = resultsArray[k].description._cdata;
            myJson[empkey].name = empval;
            myJson[empkey].office = offval;
        }
        return JSON.stringify(myJson, null, 4);
      }
     }
