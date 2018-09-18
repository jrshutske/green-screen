function myImageTimer() {
  $.getJSON('../front-data/images.json', function(images) {
      tlLength = Object.keys(images.topleft).length;
      brLength = Object.keys(images.bottomright).length;
      blLength = Object.keys(images.bottomleft).length;
      for (var r = 0; r < brLength; r++) {
          var brimg = document.createElement('img');
          var brdiv = document.createElement('div');
          brdiv.id = 'brdiv' + r;
          brimg.src = '/images/bottomright/' + images.bottomright[r];
          document.getElementById('bottomright').appendChild(brdiv);
          document.getElementById('brdiv' + r).appendChild(brimg);
      }
      $('#bottomright > div:gt(0)').hide();
      for (var l = 0; l < blLength; l++) {
          var blimg = document.createElement('img');
          var bldiv = document.createElement('div');
          bldiv.id = 'bldiv' + l;
          blimg.src = '/images/bottomleft/' + images.bottomleft[l];
          document.getElementById('bottomleft').appendChild(bldiv);
          document.getElementById('bldiv' + l).appendChild(blimg);
      }
      $('#bottomleft > div:gt(0)').hide();
      var tlsource1 = document.createElement('source');
      tlsource1.src = '/images/topleft/' + images.topleft[0];
      document.getElementById('myvideo1').appendChild(tlsource1);
      tlsource1.type = 'video/mp4';
  });
}
myImageTimer();


setTimeout(function() {
  setInterval(function() {
      $('#bottomright > div:first')
          .fadeOut(2000)
          .next()
          .fadeIn(2000)
          .end()
          .appendTo('#bottomright');
  }, 10000);
}, 12000);

setTimeout(function() {
  setInterval(function() {
      $('#bottomleft > div:first')
          .fadeOut(2000)
          .next()
          .fadeIn(2000)
          .end()
          .appendTo('#bottomleft');
  }, 10000);
}, 8000);