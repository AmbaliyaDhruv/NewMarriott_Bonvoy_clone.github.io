let flage=true;

let box=document.querySelector(".hoverOuter")
function clickOn(){
    if(flage){
        box.innerHTML=` <div class="hover">
        <div id="find_reserve">
            <div class="find_reserve_vacation">Looking for Vacation Packages ? <a href="">ROOM+FLIGHT</a>&nbsp;<a href="">ROOM+CAR</a></div>
            <div class="find_reserve_inner">
                <div class="find_reserve_destination">
                    Destination
                    <br>
                    <input type="text" placeholder="city,airport,attraction or address" id="HotelNameinput1">
                </div>
                <div class="find_reserve_dates">
                    Dates
                    <br>
                    <div id="Datesinput">  <input type="date" class="startdate1" >
                    <input type="date" class="enddate1">
                </div>

                </div>
                <div class="find_reserve_findHotels">
                    <button id="HotelsSubmit1" onclick="HotelsSubmit1()">FIND HOTELS</button>
                </div>
            </div>
            <div class="find_reserve_class">
                <a href="">Find a Hotel</a><br>
                <a href="">Find a Hotel for Group(10+room)</a><br>
                <a href="">Browse by Destination</a><br>
                <a href="">Browse by Interest</a><br>
                <a href="">Lookup Reservation</a><br>
                <a href="">Worldwode Telephone Reservation</a><br>
                <a href="">Find a Private Home Rental</a><br>
            </div>
        </div>  
    </div>`
        flage=false;
    }
    else{
        box.innerHTML=null;
        flage=true;
    }
}

function clickOn1(){
    if(flage){
        box.innerHTML=` <div class="hover">
      <div id="special_offers">
          <div class="special_offers_first">
              <div>Deals</div>
              <div>Resorts:Save up to 20%</div>
          </div>
          <div class="special_offers_second">
              <div>Gift Cards</div>
              <div>Shop Marriott</div>
              <div>Shop Westin</div>
          </div>
          <div class="special_offers_third">
              <img src="https://cache.marriott.com/marriottassets/universal-nav/deals/MR_UnivNav_Deals_clsc.jpg?&interpolation=progressive-bilinear&downsize=600px:*" width="100%" height="100%" alt="">
          </div>
          <div class="special_offers_foruth">
              <div class="special_offers_foruth_1st">Exclusive getaways,member offers & more</div>
              <div class="special_offers_foruth_2nd">SEE ALL SAVINGS</div>
          </div>
      </div>
  </div>`
        flage=false;
    }
    else{
        box.innerHTML=null;
        flage=true;
    }
}



function clickOn2(){
    if(flage){
        box.innerHTML=` <div class="hover">
        <div id="vacation">
             <div class="vacation_first">
                 <div onclick="movevacationpage()">Vacations</div>
                 <div>Explore Destination</div>
                 <div>Homes & Villas</div>
                 <div>Residences</div>
                 <div>Marriott Vacation Club</div>
             </div>
             <div class="vacation_second">
                 <div>The Ritz-Carlton</div>
                 <div>All-Inclusive Vacations</div>
                 <div>Hotel & Flight</div>
                 <div>Cars,Tours & Activities</div>
                 <div>Travel Tipes</div>
                 <div>Dine + Drink</div>
             </div>
             <div class="vacation_third">
                 <img src="https://cache.marriott.com/marriottassets/universal-nav/meetings-and-events/Nav_Vacations_feature_Large.png?&interpolation=progressive-bilinear&downsize=600px:*" width="100%" height="100%" alt="">
             </div>
             <div class="vacation_fourth">
                 <div class="vacation_fourth_1st">Imagine Your Dream Vacation</div>
                 <div class="vacation_fourth_2nd">Get inspiration and plan your next getaway.</div>
                 <div class="vacation_fourth_3rd" onclick="movevacationpage()" >EXPLORE VACATION</div>
             </div>
        </div>
    </div>
`
        flage=false;
    }
    else{
        box.innerHTML=null;
        flage=true;
    }
}


function movevacationpage(){
    window.location.href="Vacation.html"
}


function clickOn5(){
    if(flage){
        box.innerHTML=` <div class="hover">
        <div id="about_marriott">
            <div class="about_marriott_first">
                <div>Sign In</div>
                <div>Marriott Bonvoy Overview</div>
                <div>Member Benefits</div>
                <div>How to Earn Points</div>
            </div>
            <div class="about_marriott_second">
                <div>How to Use Points/Certificates</div>
                <div>Marriott Bonvoy Credit Card</div>
                <div>Marriott Insiders</div>
            </div>
            <div class="about_marriott_third">
                <img src="https://cache.marriott.com/marriottassets/universal-nav/rewards/JoinMR_photo_121918.jpg?&interpolation=progressive-bilinear&downsize=600px:*" width="100%" height="100%" alt="">
            </div>
            <div class="about_marriott_foruth">
                <div class="about_marriott_foruth_1st">Join Marriott Bonvoy</div>
                <div class="about_marriott_foruth_3rd">
                    <ul>
                        <li>Enjoy our lowest rates</li>
                        <li>Free in-room Wi-Fi</li>
                        <li>Mobile check-in and more</li>
                    </ul>
                </div>
                <div class="about_marriott_foruth_2nd">JOIN NOW</div>
            </div>
        </div>
    </div> `
        flage=false;
    }
    else{
        box.innerHTML=null;
        flage=true;
    }
}


function clickOn3(){
    if(flage){
        box.innerHTML=`<div class="hover">
        <div id="ourbrands">
            <img src="./index_image/Ourbrand.png" width="100%" height="100%" alt="">
        </div>
    </div>`
        flage=false;
    }
    else{
        box.innerHTML=null;
        flage=true;
    }
}

 
let arr=["https://cache.marriott.com/marriottassets/marriott/BDQCC/bdqcc-infinity-pool-4383-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*","https://cache.marriott.com/marriottassets/marriott/BDQCC/bdqcc-exterior-5133-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*","https://cache.marriott.com/marriottassets/marriott/BDQCC/bdqcc-king-5122-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*"]

let i=0;

let check=document.querySelector(".btuing")

setInterval(()=>{
    if(i===arr.length){
        i=0;
    }
    check.src=arr[i];
    i++;
},3000)

let hotesarr=[];

document.querySelector("#HotelsSubmit").addEventListener("click",HotelsSubmit)


function HotelsSubmit(){
    let Destination=document.querySelector("#HotelNameinput").value;
    let startdate=document.querySelector(".startdate").value;
    let enddate=document.querySelector(".enddate").value;
 
    if(document.querySelector("#HotelNameinput").value!=="" && document.querySelector(".startdate").value!=="" && document.querySelector(".enddate").value!=="" ){
        hotesarr.push(Destination,startdate,enddate)
    }
    
     
        if(hotesarr.length===3){
            localStorage.setItem("checkIN_out",JSON.stringify(hotesarr))
            window.location.href="/html/FindHotels Page.html"
        }
        else{
            alert("Please fille all detalis")
        }
        
    
   
}





function HotelsSubmit1(){
    let Destination=document.querySelector("#HotelNameinput1").value;
    let startdate=document.querySelector(".startdate1").value;
    let enddate=document.querySelector(".enddate1").value;

    if(document.querySelector("#HotelNameinput1").value!=="" && document.querySelector(".startdate1").value!=="" && document.querySelector(".enddate1").value!=="" ){
        hotesarr.push(Destination,startdate,enddate)
    }
    
     
        if(hotesarr.length===3){
            localStorage.setItem("checkIN_out",JSON.stringify(hotesarr))
            window.location.href="/html/FindHotels Page.html"
        }
        else{
            alert("Please fille all detalis")
   
     } 
}



// sigin pop logic
let siginbox=document.querySelector("#pop");

function siginOn(){
    
        siginbox.innerHTML=` <div id="siginBox">
       
        <!-- aditiya code -->
        <div class="bg-modal2">
             <div class="cross" onclick="removeOn()">x</div>
            <div class="modal-content2">
                <!-- <div class="close2">x</div> -->
    
                <form onsubmit="Login(event)">
                    <p class="welcome">Welcome to Marriott Bonvoy</p>
                    <p class="sign-letter">Sign In To Your Account</p>
    
                    <p>Email</p>
                    <input type="text" id="username-login" placeholder="email id">
    
                    <p>Password</p>
                    <input type="password" id="password-login" placeholder="password">
    
                    <input type="checkbox" id="" name="" value="">
                    <label for="vehicle1"> Remember Me</label><br>
                    <br><br>
                    <input type="submit" class="login-submit">
    
                    <p class="last-p">Forgot password</p>
                    <p class="last-p" id="create_account" onclick="createOn()">Activate online account</p>
                  
                    
                </form>
            </div>
            <div class="aditiya_right_box">
                <div class="sign-letter1">Join Marriott Bonvoy</div>
                
                <img src="https://cache.marriott.com/marriottassets/universal-nav/rewards/JoinMR_photo_121918.jpg?interpolation=progressive-bilinear&downsize=1180px:"
                height=250px  width=390px alt="">
                <ul>
                    <li>Enjoy our lowest rates, all the time</li>
                </ul>
                <ul>
                    <li>
                        Free in-room Wi-Fi
                    </li>
                </ul>
                <ul>
                    <li>
                        Mobile check-in and more
                    </li>
                </ul>
                <button class="aditiyabtu">Join Now</button>
            </div>
        </div>
 
    </div>`

    }



    function removeOn(){
        siginbox.innerHTML=null;
    }


    function createOn(){
        siginbox.innerHTML=null;
        siginbox.innerHTML=`<div id="siginBox1">

        <div class="modal-content">
            <div class="cross" onclick="removeOn()">x</div>
            <p class ="welcome">Join Marriott Bonvoy</p>
            <p class="sign-letter">Free Wi-Fi, Mobile check-in</p>
           
            <form onsubmit="Register(event)">
                <!-- <h1>Register</h1>
                <br> -->

                <label class="labelcr">First Name</label>

                <input class="inputcr" type="text" id="name1" placeholder="First Name" required>

                <label class="labelcr">Last Name</label>

                <input type="text" id="name2"  class="inputcr" placeholder="Last Name" required>
                <br>

                <label class="labelcr">Region</label>

                <select name="" id="region">
                    <option value="">USA</option>
                    <option value="">INDIA</option>
                    <option value="">UK</option>
                    <option value="">RUSSIA</option>
                </select>

                <label class="labelcr">Email</label>

                <input type="email" id="email"  class="inputcr" placeholder="Email" required>
                <br>

                <label class="labelcr">Mobile Number</label>

                <input type="number" id="num" class="inputcr" placeholder="mobile number" required>
                <br>

                <label class="labelcr">Username</label>

                <input type="text" id="user" class="inputcr" placeholder="username" required>
                <br>

                <label class="labelcr">Password</label>

                <input type="password" id="pass" class="inputcr" placeholder="password" required>
                
                <br>

                
                
                <label for="vehicle1" class="labelcr"> Remember Me</label><br>
                <input type="checkbox" id=""  class="inputcr" name="" value="">
                <p id="cond">By signing up, I agree to Marriott's <span style="color:coral">Terms of Use</span> and Marriott Bonvoy <span style="color:coral">Terms and Conditions</span>.
                    I also
                    acknowledge Marriott's Privacy Statement located in the <span style="color:coral">Privacy Center</span>.</p>

                <input type="submit" class="signup-submit">
            </form>

        </div>
    </div>`
    }
    


async function Register(event){
    event.preventDefault();
    let regiobj={
        name:document.querySelector("#name1").value,
        email:document.querySelector("#email").value,
        username:document.querySelector("#user").value,
        password:document.querySelector("#pass").value,
        mobile:document.querySelector("#num").value,
        description:document.querySelector("#name2").value,
    }
    regiobj=JSON.stringify(regiobj);
    document.querySelector("#waiting").style.display="block";

    try{
          let url='https://marriott-bonvoy.herokuapp.com/Register'
          
        let response = await fetch(url,{
            method:"POST",
            body:regiobj,
            headers:{
                "Content-Type":"application/json",
            },
        })

        let data=await response.json();
        document.querySelector("#name1").value=null
        document.querySelector("#email").value=null
        document.querySelector("#user").value=null
        document.querySelector("#pass").value=null
        document.querySelector("#num").value=null
        document.querySelector("#name2").value=null
        document.querySelector("#waiting").style.display="none";
        alert("Registration Successful");

        siginOn()
       
    }
    catch(er){
        console.log("Register side",er.message)
        document.querySelector("#waiting").style.display="none";
        alert("Registration failed,user already exists");
        document.querySelector("#name1").value=null
        document.querySelector("#email").value=null
        document.querySelector("#user").value=null
        document.querySelector("#pass").value=null
        document.querySelector("#num").value=null
        document.querySelector("#name2").value=null
    }
}
let userarr=[]
let signingStatus=false;
async function Onscreenlogin(){
    let loginData={
        password:document.querySelector("#passwordinput").value,
        email:document.querySelector("#Emailinput").value,
    }
    loginData=JSON.stringify(loginData);
    
    document.querySelector("#waiting").style.display="block";

    try{
        let url='https://marriott-bonvoy.herokuapp.com/login'
        let response=await fetch(url,{
            method:"POST",
            body:loginData,
            headers:{
                "Content-Type":"application/json",
            }
        });
        let data = await response.json();
          
        if(data.message!==undefined){
            alert(data.message)
            document.querySelector("#passwordinput").value=null
            document.querySelector("#Emailinput").value=null
            document.querySelector("#waiting").style.display="none";
        }
        else{
            signingStatus=true
            localStorage.setItem("Status",JSON.stringify(signingStatus));
            userarr.push(data.user.name)
            localStorage.setItem("UserData",JSON.stringify(userarr));
            call(data.user.name);
            removeOn();
            document.querySelector("#waiting").style.display="none";
        }
    }

    catch(er){
        console.log("login side",er)
        document.querySelector("#waiting").style.display="none";
        alert("Please fill right details")
        document.querySelector("#passwordinput").value=null
        document.querySelector("#Emailinput").value=null
    }
    
}


localStorage.setItem("Status",JSON.stringify(signingStatus));
async function Login(event){
    event.preventDefault();
    let loginData={
        password:document.querySelector("#password-login").value,
        email:document.querySelector("#username-login").value,
    }
    loginData=JSON.stringify(loginData);
    document.querySelector("#waiting").style.display="block";

    try{
        let url='https://marriott-bonvoy.herokuapp.com/login'
        let response=await fetch(url,{
            method:"POST",
            body:loginData,
            headers:{
                "Content-Type":"application/json",
            }
        });
        let data = await response.json();
        
        if(data.message!==undefined){
            alert(data.message)
            document.querySelector("#password-login").value=null;
            document.querySelector("#waiting").style.display="none";
            document.querySelector("#username-login").value=null;
        }
       else{
        signingStatus=true
        localStorage.setItem("Status",JSON.stringify(signingStatus));
        userarr.push(data.user.name)
       localStorage.setItem("UserData",JSON.stringify(userarr));
        call(data.user.name);
        removeOn();
        document.querySelector("#waiting").style.display="none";
       }
      
       
    }

    catch(er){
        console.log("login side",er)
        document.querySelector("#waiting").style.display="none";
        alert("Please fill right details")
        document.querySelector("#password-login").value=null;
        document.querySelector("#username-login").value=null;
    }
}



let a= document.querySelector("#siginName")
let b=document.querySelector("#logOut")

let c=document.querySelector("#dhruv")
function call(userName){

   b.textContent="Logout"
//    .charAt(0).toUpperCase()+userName.slice(1);
   a.textContent=userName
   c.innerHTML=` <div class="dhruv-msg">

   Hello,${userName.charAt(0).toUpperCase()+userName.slice(1)} Welcome MARRIOTT BONVOY Club

</div>`
}

let localStoragearr=JSON.parse(localStorage.getItem("UserData"))
function logOut(){
    
    window.location.href="index.html"
    localStoragearr=null
    localStorage.setItem("UserData",JSON.stringify(localStoragearr));
}


always();
function always(){
   console.log("check",localStoragearr[0]);

   if(localStoragearr!==null){
          call(localStoragearr[0]);
   }
}



function footer_pop1(){
    if(flage){
        document.querySelector(".footer_pop1").style.display="block";
        flage=false;
    }
    else{
        document.querySelector(".footer_pop1").style.display="none";
        flage=true; 
    }
 
}

function footer_pop2(){
    if(flage){
        document.querySelector(".footer_pop2").style.display="block";
        flage=false;
    }
    else{
        document.querySelector(".footer_pop2").style.display="none";
        flage=true; 
    }
 
}

function footer_pop3(){
    if(flage){
        document.querySelector(".footer_pop3").style.display="block";
        flage=false;
    }
    else{
        document.querySelector(".footer_pop3").style.display="none";
        flage=true; 
    }
 
}