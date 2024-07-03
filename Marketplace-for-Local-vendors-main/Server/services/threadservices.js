let Thread = require("../models/usersidedthread")
let response = require("../models/threadres")
async function createthread(req,res){
    

    let {location,category,title,email} = req.body;
    
    try{
        let thread = new Thread({location,category,title,email});
        await thread.save();
    
        return res.status(200).json({"status":true});}
        catch(err){
        
            return res.status(404).json({"statuss":false,"error":err});

        }
}
async function getcustomerthread(req,res){
    
    const { email } = req.query;
    if (!email) {
      return res.status(400).send("email is required");
    }
    try {
     
      const getuserproducts = await Thread.find({ email: email });
      return res.status(200).send(getuserproducts);
    } catch (error) {
      return res.status(500).send("Failed to fetch reviews");
    }
}
async function getuserthread(req,res){
    
    const {category} = req.query;
    if (!category) {
      return res.status(400).send("category is required");
    }
    try {
     
      const getuserproducts = await Thread.find({ category: category });
      return res.status(200).send(getuserproducts);
    } catch (error) {
      return res.status(500).send("Failed to fetch reviews");
    }
}
async function createresponse(req,res){
    let {idobject,reply,businessname,googlelink} = req.body;
    
    try{
        let thread = new response({idobject,reply,businessname,googlelink});
        await thread.save();
    
        return res.status(200).json({"status":true});}
        catch(err){
        
            return res.status(404).json({"statuss":false,"error":err});

        }
}
async function getresponses(req,res){
    
  const {idobject} = req.query;
 
  try {
   
    const getuserproducts = await response.find({ idobject:idobject})
    return res.status(200).send(getuserproducts);
  } catch (error) {
    return res.status(500).send("Failed to fetch reviews");
  }
}

module.exports= {createthread,getcustomerthread,getuserthread,createresponse,getresponses};