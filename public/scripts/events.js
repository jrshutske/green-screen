function myTimer2() {
    $.getJSON('../front-data/events.json', function(eventjson) {
        var eventLength = Object.keys(eventjson).length;
        var div = document.createElement('div');
        div.setAttribute('id', 'eventdiv');

        for (var e = 0; e < eventLength; e++) {
            if (eventLength == 1) {
                div.setAttribute('id', 'eventdiv1');
            }
            eventString = 'event' + e.toString();
            var eventName = eventjson[eventString].name._text;
            var eventDate = eventjson[eventString].date._text;
            var p1 = document.createElement('p');
            var p2 = document.createElement('p');
            var eventName = document.createTextNode(eventName);
            var eventDate = document.createTextNode(eventDate);
            p1.appendChild(eventName);
            p2.appendChild(eventDate);
            $(p1).attr('id', 'eventtext');
            $(p2).attr('id', 'eventtext');
            div.appendChild(p1);
            div.appendChild(p2);

            document.getElementById('events').appendChild(div);
            var div = document.createElement('div');
            div.setAttribute('id', 'eventdiv');
        }

    });
}
myTimer2();


setTimeout(function() {
    setInterval(function() {
        $('#events > #eventdiv:first')
            .fadeOut(2000)
            .next()
            .fadeIn(2000)
            .end()
            .appendTo('#events');
    }, 10000);
}, 4000)