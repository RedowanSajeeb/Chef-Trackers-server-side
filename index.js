const express = require("express")
const app = express()
const cors = require("cors");
const port = process.env.PORT || 3000;
const chef = require('./Data/chefs.json')
app.use(cors());
app.get('/',(req,res)=>{
    res.send("Hello World!!");
})
app.get("/chef", (req, res) => {
  res.send(chef);
});
// console.log(chef);
app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const recipes = chef.find((recipe) => recipe._id == id);
  res.send(recipes);
  console.log(recipes);
});


app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})