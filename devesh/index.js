
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="button" >Submit to get hotels</button>
    <div id="container"></div>
</body>
</html>
<script>

    let button=document.querySelector("#button");
    button.addEventListener("click",showresult);     //http://127.0.0.1:5500/index.html //mongodb://127.0.0.1:27017
function showresult(){
    console.log(1);

    async function getdetails(){
        try{
            console.log("one");
            let fetchedDetails=await  fetch("http://localhost:8000/users/vacation");  
            let data=await fetchedDetails.json();
            console.log("hoteldetails:",data);
            appenddata(data);
        }
        catch(e){
            console.log(e.message);
        }
    }
    getdetails();
}

function appenddata(data){
    data.forEach((el)=>{
        let p=document.createElement("p");
        p.textContent=el.vacation_place;
        let image= document.createElement("img");
        image.src=el.vacation_img;
        let p1=document.createElement("p");
        p1.textContent=el.vacation_feature;
        let p2=document.createElement("p");
        p2.textContent=el.vacation_price;
        let container=document.querySelector("#container");
        container.append(p,image,p1,p2);

    })
}

</script>
