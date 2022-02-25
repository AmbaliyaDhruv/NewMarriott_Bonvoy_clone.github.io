const express=require("express");

const app=express();

const connect=require("./config/db")
const cros=require("cors");

const {Register,login}=require("./controller/user.controller");

app.use(express.json());

app.use(express.urlencoded({
    extended: true
  }))

app.use(express.static("public"))
app.use(cros({
    origin:"http://127.0.0.1:5500"
}))


app.set("view engine","ejs");

app.post("/Register",Register);

app.post("/login",login);



app.listen(2022,async()=>{
  try {
      await connect();
  } catch (error) {
      console.log(error.message)
  }
    
    console.log("http://localhost:2022")
})