let{Schema,model} = require("mongoose")
let customerlogin  = new Schema({
    name:{type:String},
    email:{unique:true,type:String},
    password:{type:String}

})
module.exports = model("logincustomer",customerlogin);