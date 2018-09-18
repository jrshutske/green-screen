function directorySlides() {
  $.getJSON('../front-data/directory.json', function(json) {
      var empLength = Object.keys(json).length;
      var table = document.createElement('table');
      table.setAttribute('id', 'emptable');
      let test = 0;
      for (var k = 0; k < empLength; k++) {
          var tableId = 1;
          empString = 'employee' + k.toString();
          var officeNumber = json[empString].office;
          if (!officeNumber) {
              officeNumber = '';
          }
          var matches_array = officeNumber.match(/[0-9]{4}/g);
          if (matches_array) {
              officeNumber = matches_array.pop();
          }
          if (isNaN(officeNumber)) {
              officeNumber = '';
          }
          if (officeNumber == '') {
              continue;
          }
          employeeName = json[empString].name;
          var tr = document.createElement('tr');
          var td1 = document.createElement('td');
          var td2 = document.createElement('td');
          $(td2).attr('id', 'office');
          $(td1).attr('class', 'col-3');
          $(td2).attr('class', 'col-3');
          var empName = document.createTextNode(employeeName);
          var empOffice = document.createTextNode(officeNumber);
          td1.appendChild(empName);
          td2.appendChild(empOffice);
          tr.appendChild(td1);
          tr.appendChild(td2);
          table.appendChild(tr);
          test++;
          if (test !== 0 && test % 19 === 0) {
              document.getElementById('employees').appendChild(table);
              var table = document.createElement('table');
              table.setAttribute('id', 'emptable');
          }
      }
      document.getElementById('employees').appendChild(table);
      var table = document.createElement('table');
      table.setAttribute('id', 'emptable');
  });
}

directorySlides();


setTimeout(function() {
  setInterval(function() {
      $('#employees > #emptable:first')
          .fadeOut(2000)
          .next()
          .fadeIn(2000)
          .end()
          .appendTo('#employees');
  }, 10000);
}, 0000);