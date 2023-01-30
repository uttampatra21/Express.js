const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

// 
const staticPath = path.join(__dirname, "../public");

// console.log(__dirname);

//! Build in middleware
app.use(express.static(staticPath));

app.get("/", (req, res)=>{
    res.send("lo")
})

app.get("/Home", (req, res)=>{
    res.send([
        {
            roll: 1,
            name: "uttam",
        },
        {
            roll : 2,
            number: "twenty",
        },
]);
});

app.get("/about", (req, res)=>{
    res.send("This is about page");
});

app.get("/contact", (req, res)=>{
    res.send("This is contact page");   
});

app.get("/temp", (req, res)=>{
    res.send("This is temp page");
});




app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
});


