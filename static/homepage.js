$(document).ready(function() {
    var i = 0;
    var j = 0;
    var txt = 'Hello! I\'m Fiona';
    var txt2 = 'Click around to find out more!';
    var speed = 50;

    function typeWriter() {
        if (i < txt.length) {
            $('#speechbubble-text').append(txt.charAt(i));
            i++;
            setTimeout(typeWriter, speed);
        } else if (j === 0) {
            setTimeout(() => {
                $('#speechbubble-text').text('');
                typeWriter();
            }, 500);
            j++;
        } else if (j - 1 < txt2.length) {
            $('#speechbubble-text').append(txt2.charAt(j - 1));
            j++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});