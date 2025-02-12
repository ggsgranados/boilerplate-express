let express = require('express');
let app = express();

let absolutePath = __dirname + '/views/index.html';

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) =>{
    res.sendFile(absolutePath);
})

app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
  });

/*app.get("/", (req, res) => {
    res.send("Hello Express");
});*/

console.log("Hello World");




































 module.exports = app;
