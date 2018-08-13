$(document).ready(function(){
  setInterval(myImageTimer, 100000);
  myImageTimer();

  function myImageTimer() {
    $("img").remove();
    $.getJSON("images.json", function(images) {
      tlLength = Object.keys(images.topleft).length;
      trLength = Object.keys(images.topright).length;
      brLength = Object.keys(images.bottomright).length;
      blLength = Object.keys(images.bottomleft).length;
      setInterval(function() {
        $('#topright > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('#topright');
       }, 7000);
       for (var r = 1; r < trLength; r++) {
         var trimg = document.createElement('img');
         var trdiv = document.createElement('div');
         trdiv.id = "trdiv" + r
         trimg.src = '/images/topright/' + images.topright[r];
         document.getElementById('topright').appendChild(trdiv);
         document.getElementById('trdiv' + r).appendChild(trimg);
       }
       $("#topright > div:gt(0)").hide();

       setInterval(function() {
         $('#bottomleft > div:first')
           .fadeOut(1000)
           .next()
           .fadeIn(2000)
           .end()
           .appendTo('#bottomleft');
       }, 7000);
       for (var l = 1; l < blLength; l++) {
         var blimg = document.createElement('img');
         var bldiv = document.createElement('div');
         bldiv.id = "bldiv" + l
         blimg.src = '/images/bottomleft/' + images.bottomleft[l];
         document.getElementById('bottomleft').appendChild(bldiv);
         document.getElementById('bldiv' + l).appendChild(blimg);
       }
       $("#bottomleft > div:gt(0)").hide();

       var tlsource1 = document.createElement('source');
       tlsource1.src = '/images/topleft/' + images.topleft[1];
       document.getElementById('myvideo1').appendChild(tlsource1);
       tlsource1.type = "video/mp4";
       console.log(tlsource1)
     });
  }

  setInterval(function() {
    $('#employees > #emptable:first')
      .fadeOut(1000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#employees');
  },  5500);
})
setInterval(myTimer, 100000);
myTimer();
function myTimer() {
  $("emptable").remove();

  $.getJSON("spData.json", function(json) {

          var empLength = Object.keys(json).length;
          var table = document.createElement('table');
          table.setAttribute("id", "emptable");

          for (var k = 1; k < empLength + 1; k++) {
            var tableId = 1;
            empString = "employee"  + k.toString();
            var officeNumber = json[empString].office
            if (!officeNumber){officeNumber = ""}
            var matches_array = officeNumber.match(/[0-9]{4}/g)
            if (matches_array){officeNumber = matches_array.pop()}
            if (isNaN(officeNumber)){officeNumber = ""}
            if (officeNumber) {
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
              table.setAttribute("id", "emptable");
            }
        }
    }
  })
}
