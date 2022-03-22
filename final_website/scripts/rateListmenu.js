

let [destination,checkin,checkout]=JSON.parse(localStorage.getItem("checkIN_out"))
let data=JSON.parse(localStorage.getItem("full_page"))
let value=data.price
data=data.room
// let main=document.querySelector("#main")
let other=["1 King Bed, Guest Room","2 Twin/Single Beds, Guest Room","1 King Bed, Large Room","2 Twin/Single Beds, Large Room","1 King Bed, Concierge Lounge Access"]
data.map(function(url,i){

    let main_div=document.createElement("div")

    let top_div=document.createElement("div")
    let bottom_div=document.createElement("div")

    let bottom_left_div=document.createElement("div")
    let bottom_right_div=document.createElement("div")

    let bottom_right_top=document.createElement("div")
    let bottom_right_bottom=document.createElement("div")
    let flexible1=document.createElement("div")
    let flexible2=document.createElement("div")
    let title=document.createElement("h2")
    let room_detail=document.createElement("p")
    let image=document.createElement("img")
    let rate1=document.createElement("h3")
    let rate2=document.createElement("h3")
    let rate_detail1=document.createElement("p")
    let rate_detail2=document.createElement("p")
    
    let price1=document.createElement("h1")
    let price2=document.createElement("h1")
    let select1=document.createElement("h3")
    let select2=document.createElement("h3")



    let max=Number(value)
    let min=(Number(value)-200)

   function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

  let ans= getRandomArbitrary(min,max)
ans=Math.floor(ans)

    image.src=url
    rate1.textContent=`Member Flexible Rate`
    rate2.textContent=`Flexible Rate`
    select1.textContent=`SELECT`
    select2.textContent=`SELECT`
    price1.textContent=`₹ ${ans-301}/INR `
    price2.textContent=`₹ ${ans}/INR`
    rate_detail1.textContent=`Rate Details`
    rate_detail2.textContent=`Rate Details`
    title.textContent=`${other[i]}`
    room_detail.textContent=`Room Details`
    flexible1.append(rate1,rate_detail1)
    flexible2.append(rate2,rate_detail2)
    bottom_right_top.append(flexible1,price1,select1)
    bottom_right_bottom.append(flexible2,price2,select2)
    bottom_right_div.append(bottom_right_top,bottom_right_bottom)
    bottom_left_div.append(image)

    bottom_div.append(bottom_left_div,bottom_right_div)
    top_div.append(title,room_detail)
    main_div.append(top_div,bottom_div)

main.append(main_div)





select1.addEventListener("click",function(){

    let room=document.getElementById("room").value
    let day=document.getElementById("day").value
    let chaild=document.getElementById("chaild").value
    let adult=document.getElementById("adult").value
    let master_checkout={
        image_url:url,
        price:(ans-301),
        room_name:other[i],
           no_of_room:room,
           no_of_day:day,
           no_of_chaild:chaild,
           no_of_adult:adult,
           Destination:destination,
           checkin_date:checkin,
           checkout_date:checkout,

           total_guest:((Number(adult))+(Number(chaild)))
    }
    

let { no_of_room,no_of_day,no_of_chaild,no_of_adult}=master_checkout
if(no_of_adult =="" || no_of_chaild =="" || no_of_day=="" || no_of_room==""){
    alert("please fill all area")
}else{

    localStorage.setItem("master_checkout",JSON.stringify(master_checkout))

    window.location.href="/nikhilproject/payment.html"
    // this part for nikhil page
}







})
select2.addEventListener("click",function(){

let room=document.getElementById("room").value
let day=document.getElementById("day").value
let chaild=document.getElementById("chaild").value
let adult=document.getElementById("adult").value
let master_checkout={
      image_url:url,
      price:(ans),
       no_of_room:room,
       room_name:other[i],
       no_of_day:day,
       no_of_chaild:chaild,
       no_of_adult:adult,
       Destination:destination,
       checkin_date:checkin,
       checkout_date:checkout,
       total_guest:((Number(adult))+(Number(chaild)))
}

let { no_of_room,no_of_day,no_of_chaild,no_of_adult}=master_checkout
if(no_of_adult =="" || no_of_chaild =="" || no_of_day=="" || no_of_room==""){
alert("please fill all area")
}else{

localStorage.setItem("master_checkout",JSON.stringify(master_checkout))

window.location.href="/nikhilproject/payment.html"

 // this part for nikhil page
}




})








})









let {hotel_name,hotel_address,contact}=JSON.parse(localStorage.getItem("full_page"))



let hoteladdress=document.getElementById("address2")
address2.textContent=`Address :${hotel_address}`;

let hotelname=document.getElementById("hotelname");
hotelname.textContent=`Hotel name : ${hotel_name}`
let phone1=document.getElementById("phone1");
phone1.textContent=`Contact :${7518034435}`;



let [userName1]=JSON.parse(localStorage.getItem("UserData"))
if(userName1 !=null){
    document.getElementById("user").textContent=(userName1.charAt(0).toUpperCase() + userName1.slice(1))
}else{
  document.getElementById("user").textContent="Signup"
}