const express = require("express");
const app = express();
const port = 1000;

app.get("/", (req, res)=>{
    res.send(<h1>Hello im uttam</h1>)
});

app.listen(port, ()=>{
    console.log(`Lisatening on port ${port}`);
})