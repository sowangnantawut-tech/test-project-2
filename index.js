const express = require("express"); //นำเข้า express เพื่อสร้างเว็บ web server
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/students", (req, res) =>{
    res.json([
        {id: 1, name: "Golf"}
    ])
})
app.listen(3000, () =>{
    console.log("Server started");
})

