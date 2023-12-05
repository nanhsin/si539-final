// Type Writer for h1

var i = 0;
var txt = 'I\'m Nan.';

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("about").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}

window.addEventListener("load", function () {
    typeWriter();
});
// https://www.w3schools.com/howto/howto_js_typewriter.asp


// Modal for project CHANCE's poster

var modal = document.getElementById("posterModal");

document.getElementById("posterBtn").onclick = function () {
    modal.style.display = "block";
}

document.getElementsByClassName("close")[0].onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// https://www.w3schools.com/howto/howto_css_modals.asp


// Responsive iframe

function resizeIFrameToFitContent( iFrame ) {

    iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}

window.addEventListener('DOMContentLoaded', function(e) {
    var iframes = document.querySelectorAll("iframe");
    for( var i = 0; i < iframes.length; i++) {
        resizeIFrameToFitContent( iframes[i] );
    }
} );
// https://stackoverflow.com/questions/819416/adjust-width-and-height-of-iframe-to-fit-with-content-in-it
