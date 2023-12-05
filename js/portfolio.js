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

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// https://www.w3schools.com/howto/howto_css_modals.asp