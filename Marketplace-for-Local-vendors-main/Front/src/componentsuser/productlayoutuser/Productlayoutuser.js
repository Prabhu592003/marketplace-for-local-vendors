import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import "./Productlayoutuser.css"
const Productlayoutuser = () => {

    const [email,setemail] = useState(null);
    const [userproduct,setuserproduct] = useState([]);
    
    useEffect(()=>{
      try{
      const userdata = JSON.parse(localStorage.getItem('userlogin'));
      
      setemail(userdata.email);
    }
      catch(err){
        console.log(err);
      }
    },[]);
    
    useEffect(()=>{
        searchdatafetch();
      },[userproduct]);

      const searchdatafetch = async ()=>{
        try{
        const response = await axios.get(`http://localhost:5000/product/getuserproduct?email=${email}`);
        
        setuserproduct(response.data);
        }
        catch(error){
          console.log(error)
        }
      }
  return (
    <div className='outerr'>
  {userproduct.map((e,id)=>{
      return(
  <div className='inner' key={id}>
      <div className='imgpr'>
        
        <img width={100} src={`http://localhost:5000/${e?.image}`} />
        {/* {console.log(`http://localhost:5000/${e?.image}`)} */}
      </div>

      <h2>Title:{e.title}</h2>
      <p >Description:{e.description}</p>
 </div>
      )
  })}
  </div>
  )
}

export default Productlayoutuser