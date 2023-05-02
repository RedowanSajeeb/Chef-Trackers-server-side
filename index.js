const express = require("express")
const app = express()
const port = process.env.PORT || 3000;
const chef = require('./Data/chefs.json')
app.get('/',(req,res)=>{
    res.send("Hello World!!");
})
app.get("/chef", (req, res) => {
  res.send(chef);
});


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})