let product = require("../models/Product")

async function createproduct(req,res){
    

    let {businessname,location,phonenumber,email,title,description,latitude,longitude,googlelink} = req.body;
    const imageUrl = req.file.path;
    try{
        let user = new product({businessname,location,phonenumber,email,title,description,latitude,longitude,image:imageUrl,googlelink});
        await user.save();
    
        return res.status(200).json({"status":true});}
        catch(err){
            return res.status(404).json({"status":false});
        }
}

async function getcustomerproduct(req,res){
    
        const { title } = req.query;
        if (!title) {
          return res.status(400).send("title is required");
        }
        try {
          const regex = new RegExp(title, "i");
          const userproducts = await product.find({ title: regex });
          return res.status(200).send(userproducts);
        } catch (error) {
          return res.status(500).send("Failed to fetch reviews");
        }
   
}

async function getuserproduct(req,res){
    
        const { email } = req.query;
        if (!email) {
          return res.status(400).send("email is required");
        }
        try {
         
          const getuserproducts = await product.find({ email: email });
          return res.status(200).send(getuserproducts);
        } catch (error) {
          return res.status(500).send("Failed to fetch reviews");
        }
   
}
module.exports= {createproduct,getcustomerproduct,getuserproduct};