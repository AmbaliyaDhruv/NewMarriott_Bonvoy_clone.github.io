




let data=JSON.parse(localStorage.getItem("full_page"))




let {brand_name,filter_name,contact,hotel_name,hotel_address,main_image,place_name,price,room}=data
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
    let hotel_name1=document.createElement("h2")
    let price1=document.createElement("h1")
    let text_rev=document.createElement("td")
    let hotele_address1=document.createElement("h4")
    let category1=document.createElement("th")
    let main_image1=document.createElement("img")
    let reiviws=document.createElement("th")
    let hotel_detail=document.createElement("p")
    let rate=document.createElement("h3")
    let contact1=document.createElement("h4")
    
    brand_name1.textContent=`${brand_name.toUpperCase()}`
    hotel_name1.textContent=`${hotel_name}`
    price1.textContent=`₹ ${price} /INR` 
    main_image1.src=main_image
    contact1.textContent=7518034435
    
    reiviws.textContent=` o o o o o`
    hotel_detail.textContent=`View hotel detail`
    hotele_address1.textContent=hotel_address
    category1.textContent="Category 4"
    rate.textContent="VIEW RATES"
    text_rev.textContent="Reviews"
    extra.append(category1,reiviws,text_rev)
    top_left_div.append(main_image1)
    top_middle_div.append(hotel_name1,hotele_address1,contact1,extra,hotel_detail)
    top_right_div.append(brand_name1)
    bottom_left_div.append(price1)
    bottom_right_div.append(rate)
    top_div.append(top_left_div,top_middle_div,top_right_div)
    bottom_div.append(bottom_left_div,bottom_right_div)
    main_div.append(top_div,bottom_div)
    // main.append(main_div)
    
    
        // main.innerHTML=""
    
        let singel=document.createElement("div")
        singel.setAttribute("id","singel")
       
        let room_div=document.createElement("div")
        let left=document.createElement("div")
        let right=document.createElement("div")
        let left_icon=document.createElement("img")
        let right_icon=document.createElement("img")
        let room_image_div=document.createElement("div")
        let room_image=document.createElement("img")
        left_icon.src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-left-256.png"
        right_icon.src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-256.png"
        left.append(left_icon)
        right.append(right_icon)
        room_image.src=room[0]
        room_image_div.append(room_image)
        room_div.append(left,room_image_div,right)
        singel.append(main_div,room_div)
        main.append(singel)
          let i=1
        right_icon.addEventListener("click",function(){
           room_image_div.innerHTML=""
           console.log(i)
           room_image.src=room[i]
           console.log(i,room[i])
            room_image_div.append(room_image)
            
            i++;
            if(i==room.length){
                i=0
            }
            
          
        })
        // let j=room.length
        
        left_icon.addEventListener("click",function(){
            room_image_div.innerHTML=""
            
            if(i<0){
                i=room.length-1
            }
           
            room_image.src=room[i]
            console.log(i,room[i])
            room_image_div.append(room_image)
           
            i--;
          
        })
        
      
       
    
    
      
       
    
rate.addEventListener("click",function(){

    window.location.href="/html/rateListmenu page.html"
   
   
   
       let reviwe_page={
           brand_name,
           filter_name,
           contact,
           hotel_name,
           hotele_address,
           main_image,
           place_name,
           price,
           room
   
       }
       localStorage.setItem("full_page",JSON.stringify(reviwe_page))
   
   })
    
    
      
    