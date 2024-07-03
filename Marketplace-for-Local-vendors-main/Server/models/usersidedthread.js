let {Schema,model} = require("mongoose");

let thread = new Schema({
    location:{type:String},
    title:{type:String},
    category:{type:String},
    email:{type:String}
});

module.exports = model("thread",thread);