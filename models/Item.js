const mongoose = require('mongoose');
const itemschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
});

module.exports= mongoose.model("Item",itemschema);