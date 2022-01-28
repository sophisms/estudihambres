// aboutUs-Video Dropdown Effect
/*
$(document).ready(function () {
    $("#button-drop").click(function () {
        $("#button-drop").toggleClass("drop-rotate");
        $("#drop-description").toggleClass("drop-active");
    });
});
*/
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
const hola=()=>{
   let e=document.getElementsByTagName('input')
   let a=document.getElementById('exampleFormControlTextarea1').value
  for (let index = 1; index <e.length; index++) {
     console.log(e[index].value)
  }
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