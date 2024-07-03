let {Schema,model} = require("mongoose");

let response= new Schema({
    idobject:{type:String},
    reply:{type:String},
    businessname:{type:String},
    googlelink:{type:String}
});

module.exports = model("response",response);