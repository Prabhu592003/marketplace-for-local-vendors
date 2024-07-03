let User = require('../models/LoginUser');
let Customer =require('../models/logincustomer')

async function createUser(req,res){
    let {name,businessname,location,phonenumber,email,password,latitude,longitude,googlelink,category} = req.body;
    
    try{
    let user = new User({name,businessname,location,phonenumber,email,password,latitude,longitude,googlelink,category});
    await user.save();

    return res.status(200).json({"status":true});}
    catch(err){
        return res.status(404).json({"status":false});
    }
}

async function checkuser (req,res){
    let{email,password}=req.body;
    try{
    const query  = {email,password}
    const result =  await User.findOne(query)
    if(result){
        return res.status(200).json({"status":true,"data":result});
    }
    else{
        return res.status(400).json({"status":false})
    }
}
    catch(err){
             return res.err;
    }
}

async function createcustomer(req,res){
    let{email,name,password} = req.body;
        try{
        let customer = new Customer({email,name,password});
        await customer.save();
        return res.status(200).json({status:"true"})
        }
        catch(err){
            return res.status(400).json({start:"false"})
        }


}
async function checkcustomer (req,res){
    let{email,password}=req.body;
    try{
    const query  = {email,password}
    const result =  await Customer.findOne(query)
    if(result){
        return res.status(200).json({"status":true,"data":result});
    }
    else{
        return res.status(400).json({"status":false})
    }
}
    catch(err){
             return res.err;
    }
}




module.exports = {createUser,checkuser,createcustomer,checkcustomer};