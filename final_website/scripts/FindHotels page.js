   
let [dest,checkin,checkout]=JSON.parse(localStorage.getItem("checkIN_out"))
dest=dest.toLowerCase()

//   let fetchMoviesJSON=async () =>{
//   try {
//     const response = await fetch(`https://blooming-brook-61650.herokuapp.com/findhotels/mumbai`);
//     const movies = await response.json();
//     console.log(movies)
    
//   } catch (e) {
//      console.log(e)
//   }
 
// }

// fetchMoviesJSON()


// let userName1 = JSON.parse(localStorage.getItem("UserData"))

// if(userName1 !=null){
//     document.getElementById("user").textContent=(userName1.charAt(0).toUpperCase() + userName1.slice(1))
// }else{
//   document.getElementById("user").textContent="Signup"
// }


import appendata from '/scripts/appendfunction.js'







async function exe() {
  document.querySelector("#waiting").style.display="block";
  try {
    let response=await fetch(`https://blooming-brook-61650.herokuapp.com/findhotels/${dest}`)
   let result = await response.json(); // Now this will wait till it finished
    console.log(result);

    localStorage.setItem("product", JSON.stringify(result))
    

    
    let product = result
    // JSON.parse(localStorage.getItem("product"))
    console.log(product)
    document.querySelector("#waiting").style.display="none";

   
    let main=document.querySelector("#main")

document.getElementById("desti").textContent=`${dest},India`
document.getElementById("checkdate").textContent=`${checkin.split("-").reverse().join("-")} -- ${checkout.split("-").reverse().join("-")}`


document.querySelector("#fit").addEventListener("click",fitness_center)
document.querySelector("#kit").addEventListener("click",kitchen)
document.querySelector("#pool").addEventListener("click",pool)
document.querySelector("#rest").addEventListener("click",restaurent)
document.querySelector("#bre").addEventListener("click",free_breakfast)


    
  function fitness_center(){
    let product1=product.filter(function(ele){
       if(ele.filter_name=="fitness center"){
         return ele
       }
     })
     console.log(product1)
     main.innerHTML=""
     appendata(product1,main)
 }
 function kitchen(){
  let product2=product.filter(function(ele){
     if(ele.filter_name=="kitchen"){
       return ele
     }
   })
   console.log(product2)
   main.innerHTML=""
   appendata(product2,main)
}
function pool(){
let product3=product.filter(function(ele){
   if(ele.filter_name=="pool"){
     return ele
   }
 })
 console.log(product3)
 main.innerHTML=""
 appendata(product3,main)
}
function restaurent(){
let product4=product.filter(function(ele){
   if(ele.filter_name=="Restaurant on site"){
     return ele
   }
 })
 console.log(product4)
 main.innerHTML=""
 appendata(product4,main)
}
function free_breakfast(){
let product5=product.filter(function(ele){
   if(ele.filter_name=="Free Breakfast"){
     return ele
   }
 })
 console.log(product5)
 main.innerHTML=""
 appendata(product5,main)
}

document.querySelector("#sorting").addEventListener("change",function(){
 let value=document.querySelector("#sorting").value
if(value=="low"){
 let product_sort1=product.sort(function(a,b){

   return ( Number(a.price))-(Number(b.price))
          
   })
   main.innerHTML=""
   appendata(product_sort1,main)
}else if(value=="high"){

 let product_sort2=product.sort(function(a,b){

   return ( Number(b.price))-(Number(a.price))
          
   })
   main.innerHTML=""
   appendata(product_sort2,main)

}else{
 let product_sort3=product.sort(function(a,b){

   return 0
          
   })
   main.innerHTML=""
   appendata(product_sort3,main)
}



})
    


appendata(product,main)

   
    
  } catch(e) {
   console.log(e);
  }
}
 
exe()




// let url = 'https://blooming-brook-61650.herokuapp.com/findhotels/mumbai';
//     fetch(url).then(response => response.json)
//     .then(data => console.log(data))




  


// let [userName1]=JSON.parse(localStorage.getItem("UserData"))
// console.log(userName1)
// if(userName1 !==null){
//   document.getElementById("user").textContent=(userName1.charAt(0).toUpperCase() + userName1.slice(1))
// }else{
//   document.getElementById("user").textContent="Signup"
// }
