/* SmtpJS.com - v3.0.0 */
// aboutUs-Contact Form Request

function email() {
    let e=document.getElementsByTagName('input')//e[1] name e[2]email
    let a=document.getElementById('exampleFormControlTextarea1').value//text
    console.log(e[e.length-2].value)
     sedMail(`gracias por ponerte en contacto`,'respuesta',e[e.length-1].value)
     sedMail(`mi nombre es ${e[e.length-2].value} \n correo electronico ${e[e.length-1].value} \n  ${a}`)
     alert('enviado')
     }   
function sedMail(
       body,
       subject="This is the subject",
       to="hef6666@gmail.com",
       
       usname="hef6666@gmail.com",
       pass="avsmkjkfyhnsjpea",
       from="hef6666@gmail.com") {
     Email.send({
         Host : "smtp.gmail.com",
         Username : usname,
         Password : pass,
         To : to,//par
         From : from,//de
         Subject : subject ,
         Body : body
         }).then(
         message => console.log(message)
         );
   }