let {Schema,model} = require("mongoose");

let product = new Schema({
    businessname:{type:String},
    location:{type:String},
    phonenumber:{type:Number},
    title:{type:String},
    description:{type:String},
    email:{type:String},
    latitude: { type: Number },   
    longitude: { type: Number },
    image: {type: String},
    googlelink:{type:String}

});

module.exports = model("product",product);
