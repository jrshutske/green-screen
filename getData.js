const shell = require('shelljs');
const convert = require('xml-js');
const parseNum = require('parse-num')
const fs = require('fs');

module.exports = {

  getSharePointData: function() {
    shell.exec("curl --anyauth --user user:password 'https://intranet.wei.wisc.edu/toolsportal/people/_layouts/15/listfeed.aspx?List=bef8adc8-42f3-4eef-92eb-d5424e185da7&View=9a9091f8-3b80-4f21-a7da-541ba8bc97b0' > /Users/jackshutske/Documents/git/green-screen/spData.txt")
    shell.exec("curl --anyauth --user user:password 'https://energy.wisc.edu/events/feed' > /Users/jackshutske/Documents/git/green-screen/eventData.txt")

    require.extensions['.txt'] = function (module, filename) {
        module.exports = fs.readFileSync(filename, 'utf8');
    };

    var xml1 = require("./spData.txt");
    var results1 = convert.xml2json(xml1, {compact: true, spaces: 2});
    let resultsParsed1 = JSON.parse(results1);
    let resultsArray1 = resultsParsed1.rss.channel.item;


      myJson1 = {}

        for (var k = 0; k < resultsArray1.length; k++) {
          var empkey = "employee" + k;

          myJson1[empkey] = {}

            var empval = resultsArray1[k].title._text;;
            var offval = resultsArray1[k].description._cdata;
            myJson1[empkey].name = empval;
            myJson1[empkey].office = offval;
        }

        /////////

        var xml2 = require("./eventData.txt")
        var results2 = convert.xml2json(xml2, {compact: true, spaces: 2});
        let resultsParsed2 = JSON.parse(results2);


        let resultsArray2 = resultsParsed2.rss.channel.item;

        myJson2 = {}

          for (var t = 0; t < Object.keys(resultsArray2).length; t++) {
            var eventkey = "event" + t;
            myJson2[eventkey] = {}
            console.log(Object.keys(resultsArray2))
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

        return {
          employeejson: JSON.stringify(myJson1, null, 4),
          eventjson: JSON.stringify(myJson2, null, 4)
        }
      }
     }
