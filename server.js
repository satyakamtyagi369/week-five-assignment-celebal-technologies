const express= require("express");
const mongoose = require('mongoose');
const bodyparser=require('body-parser');
const dotenv = require('dotenv');
const Item = require("./models/Item");
const PORT=3000;
dotenv.config();
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true, 
}).then(()=>console.log("MongoDB connected."))
.catch((err)=>console.log(err));
app.get('/',async(req,res)=>{
    const items=await Item.find();
    res.render("index",{items});
})
app.post("/add",async(req,res)=>{
    const newitem = new Item({name:req.body.name});
    await newitem.save();
    res.redirect('/');
});
app.get("edit/:id",async(req,res)=>{
    const item = await Item.findById(req.params.id);
    res.render("edit",{item});
});
app.post("update/:id",async(req,res)=>{
    await Item.findByIdAndUpdate(req.params.id,{name:req.body.name});
    res.redirect('/');
})
app.delete("/delete/:id",async(req,res)=>{
    await Item.findByIdAndDelete(req.params.id);
    res.redirect('/');
});
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on Port:${process.env.PORT||PORT}`);
})
