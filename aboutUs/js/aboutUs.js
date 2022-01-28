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

// aboutUs-Contact Form Request
Email.send({
    Host: "smtp.yourisp.com",
    Username: "username",
    Password: "password",
    To: 'them@website.com',
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body"
}).then(
    message => alert(message)
);
/*
//Requerimos el paquete
var nodemailer = require("nodemailer");

//Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "hef6666@gmail.com",
        pass: "avsmkjkfyhnsjpea",
    },
});

var mensaje = `
<h1>¡Hola! Gracias por contactar Estudihambres. </h1>
<p>Nos contactaremos contigo pronto 🤠</p>
`;

var mailOptions = {
    from: "hef6666@gmail.com",
    to: "hef6666@gmail.com,jonathan.jimenez.27.96@gmail.com",
    subject: "Asunto Del Correo",
    html: mensaje,
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email enviado: " + info.response);
    }
});*/
