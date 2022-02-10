let mentor={
    items:[
        {
            name:"Luis"
            ,img:"https://images.pexels.com/photos/953703/pexels-photo-953703.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            ,star:5
            ,class:"Música"
            ,modality:"en linea"
            ,description: "lorem lorem"
            ,price:15
            
        },
        {
            name:"Juan"
            ,img:"https://images.pexels.com/photos/4307849/pexels-photo-4307849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:5
            ,class:"Pintura"
            ,modality:"en linea"
            ,price:20
            
        },
        {
            name:"Mon"
            ,img:"https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:4
            ,class:"Danza Contemporanea"
            ,modality:"en linea"
            ,price:35
            
        },
        {
            name:"Karen"
            ,img:"https://images.pexels.com/photos/6094038/pexels-photo-6094038.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:5
            ,class:"Inglés"
            ,modality:"en linea"
            ,price:35
            
        },
        {
            name:"Brenda"
            ,img:"https://images.pexels.com/photos/7307380/pexels-photo-7307380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:2
            ,class:"Programación"
            ,modality:"en linea"
            ,price:25
            
        },
        {
            name:"Pablo"
            ,img:"https://images.pexels.com/photos/2033287/pexels-photo-2033287.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:3
            ,class:"Física"
            ,modality:"en linea"
            ,price:30
            
        },
        {
            name:"Pedro"
            ,img:"https://images.pexels.com/photos/5131401/pexels-photo-5131401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:4
            ,class:"Álgebra"
            ,modality:"en linea"
            ,price:35
            
        },
        {
            name:"Mario"
            ,img:"https://images.pexels.com/photos/4607198/pexels-photo-4607198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:2
            ,class:"Mecánica"
            ,modality:"en linea"
            ,price:5
            
        },
        {
            name:"Luis"
            ,img:"https://images.pexels.com/photos/10887630/pexels-photo-10887630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:1
            ,class:"Historia"
            ,modality:"en linea"
            ,price:15
            
        },
        {
            name:"Mayrelin"
            ,img:"https://images.pexels.com/photos/5794945/pexels-photo-5794945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:5
            ,class:"Electrónica"
            ,modality:"en linea"
            ,price:30
        }
    ]
}
function inputMentor(item,element,number=item.length) {
    conten="";
    star=""
  
  for (let i = 0; i < number; i++) {
  
  }
    for (let index = 0; index < number ;index++) {
        for (let i = 0; i < 5; i++) {
            if (i<item[index].star) {
                star+=`  <div class="col-1 ">
                <img src="../STAR.svg" width="24px" alt="start" onclick=putStart(${index},${i+1})> 
              </div>`;
            } else {
                star+=`<div class="col-1 ">
                <img src="../STARg.svg" width="24px" alt="start" onclick=putStart(${index},${i+1})>
              </div>`;
            }
        }
        conten += `
        <div name="item" class=" m-3 position-relative"  id= "mentorCard" style="width: 18rem;">
        <a href="#mentorsCards" data-bs-toggle="modal" onclick=ConstructorModal(${index}) href="#">
     <img src="${item[index].img}" class="  card-img-top"  data-bs-toggle="mentorsCards"  alt="..." style="border-radius: 30px;">
    <div class="card-body position-absolute bottom-0  bg-dark bg-opacity-50 text-white col-12" style="width: 16.5rem; border-bottom-left-radius:30px; border-bottom-right-radius:30px;">
          <h5 class="card-title">${item[index].name}</h5>
        <div class="row justify-content-between">
            <div class="col-4">
            ${item[index].class}
            </div>
        <div class="col-7 text-end">
              ${item[index].price} dollar/hour
    </div>
</div>
            <div class="row g-0 justify-content-around"> <!--contenedor estrellas-->
                ${star}
            </div>
        </div>
        </a>
      </div>
        `;
        star=""
    }
    document.getElementById(`${element}`).innerHTML=`
   <div class="col-12 row g-0 justify-content-around" >
   <div class="col-6">
   <button type="button" class="btn btn-primary col-2" onclick=element()>borrar</button>
   <button type="button" class="btn btn-primary col-2" onclick=addItem()>agregar</button>
   <button type="button" class="btn btn-primary col-2" >editar</button>
   <button type="button" class="btn btn-primary col-2" data-bs-toggle="modal" data-bs-target="#ModalADD" data-bs-whatever="@mdo">Agregar</button>
   </div>
   </div>
   `+conten
}

inputMentor(mentor.items,"Cards-Mentores")

let ne= {
    name:"mayrelin"
    ,img:"https://images.pexels.com/photos/5794945/pexels-photo-5794945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ,star:5
    ,class:"matematicas"
    ,modality:"en linea"
    ,price:30
}

function addItem(array=mentor.items,newItem=ne) {
    array.push(newItem)
   inputMentor(mentor.items,"Cards-Mentores")
}
git 
function putStart(id,num){
    mentor.items[id].star=num
    inputMentor(mentor.items,"Cards-Mentores")
}

function deleteItem(id,object=mentor.items) {
    object.splice(id, 1);
    inputMentor(mentor.items,"Cards-Mentores")
}

function element() {
    let item=document.getElementsByName("item")
    item.forEach((items,index)=>{
        let cont=items.innerHTML
        items.innerHTML=`
        <div class="position-absolute top-0 end-0" onclick=deleteItem(${index})>
        <p>x</p>
        </div> 
        `+cont
    })
   
}

function ConstructorModal( id, array = mentor.items ){
  let image = document.getElementById("imageProfile")
  let contentMentor = document.getElementById("contentProfile")
  image.src =`${array[id].img}`
  contentMentor.innerHTML = `<h3>${array[id].name}</h3>
  <h4>Clase impartida: ${array[id].class}</h4>
  <h4>Modalidad: ${array[id].modality}</h4>
  <p>Tarifas accesibles a tan solo: ${array[id].price} dolares /hora</p>
  <button class="btn  me-3 rounded-pill btn-primary">solicitar clase</button> 
  `
  

}

//(${index})


let animacion = document.querySelectorAll("mentorCard");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animacion.length; i++) {
    let altura = animacion[i].offsetTop;
    if (altura - 100 < scrollTop) {
      animacion[i].style.opacity = 1;
    //  document.getElementById("Cards-Mentores")=1;
      animacion[i].classList.add("mostrarArriba");
    }
  }
}

window.addEventListener('scroll', mostrarScroll);




