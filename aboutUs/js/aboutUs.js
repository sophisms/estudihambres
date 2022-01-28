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
const email=()=>{
   let e=document.getElementsByTagName('input')
   let a=document.getElementById('exampleFormControlTextarea1').value
  Email.send({
	Host: "smtp.gmail.com",
	Username : 'hef6666@gmail.com',
	Password : 'avsmkjkfyhnsjpea',
	To : `hef6666@gmail.com`,
	From : `${e[2]}`,
	Subject : "email subject",
	Body : `hi my naame is ${e[1]} ${a}`,
	}).then(
		message => alert("email sent")
	);
    }
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
