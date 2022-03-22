
function appendata(data, main) {
    
    // brand_name: "STREGIS"
    // filter_name: "Restaurant on site"
    // hotel_address: "462, Senapati Bapat Marg, Lower Parel Mumbai, India 400013"
    // hotel_name: "The St. Regis Mumbai"
    // main_image: "https://cache.marriott.com/marriottassets/marriott/BOMXR/bomxr-exterior-1522-hor-feat.jpg?resize=373:150&output-quality=70"
    // place_name: "mumbai"
    // price: 7840
    // room: [,…]
    // __v: 0
    // _id: "621497f02905d7555ec8dd92"
    // console.log(data)

    if (data.length==0) {
        let error = document.createElement("img");
        error.src="https://cdn.dribbble.com/users/1676373/screenshots/4177728/media/c03e140cbc9e5959946bb95600772ab3.gif"
        main.append(error)
   }

    data.map(({brand_name,filter_name,hotel_address,hotel_name,main_image,place_name,price,room,contact})=>{

           

        let main_div=document.createElement("div")
       
// _____________________________________________________
let top_div=document.createElement("div")
let bottom_div=document.createElement("div")
// ---------------------------------- 
let top_left_div=document.createElement("div")
let top_middle_div=document.createElement("div")
let top_right_div=document.createElement("div")
let bottom_left_div=document.createElement("div")
let bottom_right_div=document.createElement("div")
let extra=document.createElement("div")

// ________________________________________________________
let brand_name1=document.createElement("h3")
let hotel_name1=document.createElement("h3")
let price1=document.createElement("h1")
let text_rev=document.createElement("td")
let hotele_address1=document.createElement("h5")
let category1=document.createElement("th")
let main_image1=document.createElement("img")
let reiviws=document.createElement("th")
let hotel_detail=document.createElement("p")
let rate=document.createElement("h3")

brand_name1.textContent=`${brand_name.toUpperCase()}`
hotel_name1.textContent=`${hotel_name}`
price1.textContent=`₹ ${price} /INR` 
main_image1.src=main_image
reiviws.textContent=` o o o o o`
hotel_detail.textContent=`View hotel details`
hotele_address1.textContent=hotel_address
category1.textContent="Category 4"
rate.textContent="VIEW RATES"
text_rev.textContent="Reviews"
extra.append(category1,reiviws,text_rev)
top_left_div.append(main_image1)
top_middle_div.append(hotel_name1,hotele_address1,extra,hotel_detail)
top_right_div.append(brand_name1)
bottom_left_div.append(price1)
bottom_right_div.append(rate)
top_div.append(top_left_div,top_middle_div,top_right_div)
bottom_div.append(bottom_left_div,bottom_right_div)
main_div.append(top_div,bottom_div)
main.append(main_div)



rate.addEventListener("click",function(){






    let reviwe_page={
        brand_name,
        filter_name,
        contact,
        hotel_name,
        hotel_address,
        main_image,
        place_name,
        price,
        room

    }
    localStorage.setItem("full_page",JSON.stringify(reviwe_page))
    window.location.href="/html/rateListmenu page.html"


})

top_div.addEventListener("click",function(){
    
    let reviwe_page={
        brand_name,
        filter_name,
        contact,
        hotel_name,
        hotel_address,
        main_image,
        place_name,
        price,
        room

    }
   
    localStorage.setItem("full_page",JSON.stringify(reviwe_page))

    window.location.href="/html/detail page.html"
})


    })





}

export default appendata