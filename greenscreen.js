$(document).ready(function(){


setInterval(function() {
  $('#employees > table:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#employees');
},  5000);
})
var myVar = setInterval(myTimer, 100000);
myTimer();
function myTimer() {


  $("table").remove();

  $.getJSON("spData.json", function(json) {

    var empLength = Object.keys(json).length;

    $(document).ready(function () {
    $.getJSON("spData.json",
      function (json) {

          var table = document.createElement('table');

          for (var k = 1; k < empLength +1; k++) {
            var tableId = 1;

            empString = "employee"  + k.toString();
            var officeNumber = json[empString].office
            if (!officeNumber){officeNumber = ""}
            var matches_array = officeNumber.match(/[0-9]{4}/g)
            if (matches_array){officeNumber = matches_array.pop()}
            if (!officeNumber){officeNumber = ""}
            if (isNaN(officeNumber)){officeNumber = ""}
            var tr = document.createElement('tr');

            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            $(td2).attr("id","office");

            var empName = document.createTextNode(json[empString].name);
            var empOffice = document.createTextNode(officeNumber);

            td1.appendChild(empName);
            td2.appendChild(empOffice);
            tr.appendChild(td1);
            tr.appendChild(td2);

            table.appendChild(tr);
            if(k % 20 === 0 || k === empLength) {
              var newTables = document.getElementById("employees").appendChild(table);
              var table = document.createElement('table');
              //$(newTables).attr("id",tableId); tableId++
            }
            //$(newTables).attr("id",tableId); tableId++
          }
      });
    });
  });
}
