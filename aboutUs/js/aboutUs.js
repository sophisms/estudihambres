// aboutUs-Video Dropdown Effect

$(document).ready(function () {
    $("#button-drop").click(function () {
        $("#button-drop").toggleClass("drop-rotate");
        $("#drop-description").toggleClass("drop-active");
    });
});

// aboutUs-Timeline Gradient Effect
$(function () {
    window.sr = ScrollReveal({ reset: true });
    sr.reveal(".js--fadeInLeft", {
        origin: "left",
        distance: "300px",
        duration: 2000,
    });
    sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        duration: 2000,
    });
});

