import React from 'react'
import {useEffect,useState  } from 'react';

import axios from 'axios';
import Customerresponse from '../customerresponse/customerresponse';
const Yourthreads = () => {
    const [email,setemail] = useState(null);
    const [userproduct,setuserproduct] = useState([]);
    const[id,setid] = useState("");
    const [responses,setresponses] = useState(null);
   
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(()=>{
      try{
      const userdata = JSON.parse(localStorage.getItem('customerLogin'));
      
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
        const response = await axios.get(`http://localhost:5000/thread/getcustomerthread?email=${email}`);
        
        setuserproduct(response.data);
        }
        catch(error){
          console.log(error)
        }
      }


      const handleresponses = async (e)=>{

   
        console.log(id)
        try{
        const response = await axios.get(`http://localhost:5000/thread/getresponses?idobject=${id}`);
         console.log(response.data)
         setresponses(responses)
       
        }
        catch(error){
          console.log(error)
        }
      }
  return (
    <> <div className='oute'>
  {userproduct.map((e,id)=>{
      return(
  <div className='inner' key={id}>
      <h2>thread:{e.title}</h2>
      <p >category:{e.category}</p>
      <button onClick={() => { setid(e._id); handleresponses();  }}>see responses</button>
      
      


      
     
       
 </div>
      )
  })}
  </div>
 
</>
  )

  
}

export default Yourthreads
