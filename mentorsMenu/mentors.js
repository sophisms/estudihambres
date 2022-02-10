let mentor={
    items:[
        {
            name:"Luis"
            ,img:"https://images.pexels.com/photos/953703/pexels-photo-953703.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            ,star:5
            ,class:"Música"
            ,modality:"en linea"
            ,price:150
           
        },
        {
            name:"Juan"
            ,img:"https://images.pexels.com/photos/4307849/pexels-photo-4307849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:5
            ,class:"Pintura Óleo"
            ,modality:"en linea"
            ,price:200
           
        },
        {
            name:"Mon"
            ,img:"https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:4
            ,class:"Danza Contemporanea"
            ,modality:"en linea"
            ,price:350
        
        },
        {
            name:"Karen"
            ,img:"https://images.pexels.com/photos/6094038/pexels-photo-6094038.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:5
            ,class:"Inglés"
            ,modality:"en linea"
            ,price:350
          
        },
        
        {
            name:"Brenda"
            ,img:"https://images.pexels.com/photos/7307380/pexels-photo-7307380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:2
            ,class:"Programación"
            ,modality:"en linea"
            ,price:250
           
        },
        {
            name:"Pablo"
            ,img:"https://images.pexels.com/photos/2033287/pexels-photo-2033287.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:3
            ,class:"Electrónica"
            ,modality:"en linea"
            ,price:300
            
        },
        {
            name:"Pedro"
            ,img:"https://images.pexels.com/photos/5131401/pexels-photo-5131401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:4
            ,class:"Acuarela"
            ,modality:"en linea"
            ,price:350
           
        },
        {
            name:"Mario"
            ,img:"https://images.pexels.com/photos/4607198/pexels-photo-4607198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:2
            ,class:"Matemáticas"
            ,modality:"en linea"
            ,price:50
            
        },
        {
            name:"Luis"
            ,img:"https://images.pexels.com/photos/10887630/pexels-photo-10887630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:1
            ,class:"Electrónica"
            ,modality:"en linea"
            ,price:150
           
        },
        {
            name:"Mayrelin"
            ,img:"https://images.pexels.com/photos/5794945/pexels-photo-5794945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:5
            ,class:"Electrónica"
            ,modality:"en linea"
            ,price:300
    
        }
    ]
}
let truc=`
<div class="col-1 position-absolute top-0 end-0" height="24px">
<img src="../cog-solid.svg" height="24px" alt="start" onclick=element()>
</div>
`;
function inputMentor(item,element,plus=truc,number=item.length) {
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
        <div name="item" class=" m-3 position-relative" style="width: 18rem;">
        <a href="#mentorsCards" data-bs-toggle="modal" onclick= ConstructorModal(${index}) href="#">
     <img src="${item[index].img}" class="  card-img-top"  data-bs-toggle="mentorsCards"  alt="..." style="border-radius: 30px;">
     </a>
    <div class="card-body position-absolute bottom-0  bg-dark bg-opacity-50 text-white col-12" style="width: 16.5rem; border-bottom-left-radius:30px; border-bottom-right-radius:30px;">
          <h5 class="card-title">${item[index].name}</h5>
        <div class="row justify-content-between">
            <div class="col-4">
            ${item[index].class}
            </div>
        <div class="col-7 text-end">
              ${item[index].price} MNX/Hr
    </div>
</div>
            <div class="row g-0 justify-content-around"> <!--contenedor estrellas-->
                ${star}
            </div>
        </div>
      </div>
        `;
        star=""
    }
    document.getElementById(`${element}`).innerHTML=plus+conten
}
let bot=`
<div class="col-12 row g-0 justify-content-around" >
<div class="col-6">
<button type="button" class="btn btn-primary col-2" onclick=element()>borrar</button>
<button type="button" class="btn btn-primary col-2" onclick=addItem()>agregar</button>
</div>
</div>
`;


inputMentor(mentor.items,"Cards-Mentores")

let ne= {
    name:"mayrelin"
    ,img:"https://images.pexels.com/photos/5794945/pexels-photo-5794945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ,star:5
    ,class:"matematicas"
    ,modality:"en linea"
    ,price:30
}


function putStart(id,num){
    mentor.items[id].star=num
    inputMentor(mentor.items,"Cards-Mentores")
}

function deleteItem(id,object=mentor.items) {
    object.splice(id, 1);
    inputMentor(mentor.items,"Cards-Mentores")
}
function abort() {
    inputMentor(mentor.items,"Cards-Mentores")
}
function element() {
    let cont=truc+`
    <div class="col-12 row g-0 justify-content-around pb-2" height="24px">
    <button type="button" class="btn btn-primary col-1" data-bs-toggle="modal" data-bs-target="#ModalADD" data-bs-whatever="@mdo">Agregar</button>
    <button type="button" class="btn btn-danger col-1" onclick=abort()>Cancelar</button>
    </div>`
    inputMentor(mentor.items,"Cards-Mentores",cont)
    let item=document.getElementsByName("item")
    item.forEach((items,index)=>{
        let cont=items.innerHTML
        items.innerHTML=`
        <img class="position-absolute top-0 end-0" src="../trash-can-solid.svg" height="24px" alt="start" onclick=deleteItem(${index})>
        <img class="position-absolute top-0 start-0" src="../pen-solid.svg" height="24px" alt="start" onclick=ModalEdit(${index}) data-bs-toggle="modal" data-bs-target="#mentorsCards" data-bs-whatever="@mdo">
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
  `;
}

function ModalEdit( id, array = mentor.items ){
    let image = document.getElementById("imageProfile")
    let contentMentor = document.getElementById("contentProfile")
    image.style.cssText=`width: 300px; margin:auto;`
    image.src =`${array[id].img}`
    contentMentor.innerHTML = `
    <div class="form-group col">
        <label for="inputClass">Nombre</label>
        <div class="row ">
            <div class="col-5">
                <input id="name" type="text" class="form-control" value="${array[id].name}" placeholder="Nombre">
            </div>
            <div class="col-5">
                <input id="lastName" type="text" class="form-control" placeholder="Apellido">
            </div>
        </div>
    </div>

    <div class="form-group col">
        <label for="inputStates">Asignatura</label>
        <select id="inputState" class="form-control">
            ${getOptionClass(array[id].class)}
        </select>
    </div> 

    <fieldset class="form-group row">
        <legend class="col-form-label col-3 float-sm-left pt-0">Modalidad</legend>
        <div class="col-9">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" checked value="option1">
                <label class="form-check-label" for="inlineCheckbox1">En line</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" disabled>
                <label class="form-check-label" for="inlineCheckbox2">Presencial</label>
            </div>
        </div> 
    </fieldset>

    <div class="form-group col">
        <label for="inputClass">Precio</label>
        <input id="Price" type="text" class=" col-7 form-control" value="${array[id].price}" aria-label="Dollar amount (with dot and two decimal places)">
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-primary" onclick=catchValueEdit(${id}) data-bs-dismiss="modal">Actualizar</button>
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
   </div>

        `;
  }
  function catchValueEdit(id,items=mentor.items){
    let imgs="https://thumbs.dreamstime.com/b/omita-el-icono-del-perfil-avatar-placeholder-gris-de-la-foto-99724602.jpg"
    imgs=document.getElementById("imageProfile")
    let name=document.getElementById("name")
    let last=document.getElementById("lastName")
    let clas=document.getElementById("inputState")
    let price=document.getElementById("Price")
    
    let cont={
        name:`${name.value}`
        ,lastName:`${last.value}`
        ,img:imgs.src
        ,star:1
        ,class:`${clas.value}`
        ,modality:"en linea"
        ,price:price.value
    }
    items[id]=cont
    inputMentor(mentor.items,"Cards-Mentores")
}
function catchValueNew(items=mentor.items){
    let imgs="https://thumbs.dreamstime.com/b/omita-el-icono-del-perfil-avatar-placeholder-gris-de-la-foto-99724602.jpg"
    // imgs=document.getElementById("imageProfile")
    let name=document.getElementById("name")
    let last=document.getElementById("lastName")
    let clas=document.getElementById("inputClas")
    let price=document.getElementById("Price")
    console.log(clas.value)
    let cont={
        name:`${name.value}`
        ,lastName:`${last.value}`
        ,img:imgs
        ,star:1
        ,class:clas.value
        ,modality:"en linea"
        ,price:price.value
    }
    items.push(cont)
    console.log(items)
   inputMentor(items,"Cards-Mentores")
   imgs="",name="",last="",clas="",price=""
  
}

let optionClass=[
    {id:1,name:"Música"},
    {id:2,name:"Matemáticas"},
    {id:3,name:"Quimica"},
    {id:4,name:"Canto"},
    {id:5,name:"Pintura Óleo"},
    {id:6,name:"Acuarela"},
    {id:7,name:"Inglés"},
    {id:8,name:"Danza Contemporanea"},
    {id:9,name:"Programación"},
    {id:10,name:"Electrónica"}
]

function getOptionClass(name,opClass=optionClass){
    let cont ="";
    for (let el = 0; el < opClass.length; el++) {
        if(name==opClass[el].name){
            cont+=`<option selected value="${name}">${name}</option>`
        }
        else{
            cont+=`<option value="${opClass[el].name}">${opClass[el].name}</option>`
        }
    };
    return (cont)
}
