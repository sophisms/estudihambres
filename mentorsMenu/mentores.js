let mentor={
    items:[
        {
            name:"luis"
            ,img:"https://images.pexels.com/photos/953703/pexels-photo-953703.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            ,star:5
            ,class:"matematicas"
            ,modality:"en linea"
            ,price:15
            
        },
        {
            name:"juan"
            ,img:"https://images.pexels.com/photos/4307849/pexels-photo-4307849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:5
            ,class:"matematicas"
            ,modality:"en linea"
            ,price:20
            
        },
        {
            name:"mon"
            ,img:"https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:4
            ,class:"matematicas"
            ,modality:"en linea"
            ,price:35
            
        },
        {
            name:"karen"
            ,img:"https://images.pexels.com/photos/6094038/pexels-photo-6094038.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:5
            ,class:"matematicas"
            ,modality:"en linea"
            ,price:35
            
        },
        {
            name:"brenda"
            ,img:"https://images.pexels.com/photos/7307380/pexels-photo-7307380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:2
            ,class:"matematicas"
            ,modality:"en linea"
            ,price:25
            
        },
        {
            name:"pablo"
            ,img:"https://images.pexels.com/photos/2033287/pexels-photo-2033287.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:3
            ,class:"matematicas"
            ,modality:"en linea"
            ,price:30
            
        },
        {
            name:"pedro"
            ,img:"https://images.pexels.com/photos/5131401/pexels-photo-5131401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:4
            ,class:"matematicas"
            ,modality:"en linea"
            ,price:35
            
        },
        {
            name:"mario"
            ,img:"https://images.pexels.com/photos/4607198/pexels-photo-4607198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:2
            ,class:"matematicas"
            ,modality:"en linea"
            ,price:5
            
        },
        {
            name:"luis"
            ,img:"https://images.pexels.com/photos/10887630/pexels-photo-10887630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:1
            ,class:"matematicas"
            ,modality:"en linea"
            ,price:15
            
        },
        {
            name:"mayrelin"
            ,img:"https://images.pexels.com/photos/5794945/pexels-photo-5794945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ,star:5
            ,class:"matematicas"
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
        conten+=`
        <div name="item" class=" m-3 position-relative" style="width: 18rem;">
        <img src="${item[index].img}" class="  card-img-top" alt="..." style="border-radius: 30px;">
        <div class="card-body position-absolute bottom-0  bg-danger bg-opacity-50 text-white col-12" style="width: 16.5rem; border-bottom-left-radius:30px; border-bottom-right-radius:30px;">
          <h5 class="card-title">${item[index].name}</h5>
          <div class="row justify-content-between">
            <div class="col-4">
              mate
            </div>
            <div class="col-7 text-end">
              ${item[index].price} dollar/hour
            </div>
          </div>
            <div class="row g-0 justify-content-around">
                ${star}
            </div>
        </div>
      </div>
        `
        star=""
    }
    document.getElementById(`${element}`).innerHTML=`
   <div class=""col-12>
   <button type="button" class="btn btn-primary col-1" onclick=element()>borrar</button>
   <button type="button" class="btn btn-primary col-1" onclick=addItem()>agregar</button>
   </div>
   `+conten
}

inputMentor(mentor.items,"Cards-Mentores")

let ne={
    name:"juan"
    ,img:"https://images.pexels.com/photos/4307849/pexels-photo-4307849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ,star:3
    ,class:"matematicas"
    ,modality:"en linea"
    ,price:20
    
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