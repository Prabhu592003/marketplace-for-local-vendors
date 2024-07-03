import React from 'react'
import {useEffect,useState  } from 'react';

import {  toast } from 'react-toastify';
import axios from 'axios';
const Userthreads = () => {
    const [category,setcategory] = useState(null);
    const [userproduct,setuserproduct] = useState([]);
    const[reply,setreply] = useState("")
    const[businessname,setBusinessName] = useState("");
    const[googlelink,setgooglelink] = useState("")
    const[idobject,setidobject] = useState("")
    
    useEffect(()=>{
      try{
      const userdata = JSON.parse(localStorage.getItem('userlogin'));
      
      setcategory(userdata.category);
      setgooglelink(userdata.goolelink)
      setBusinessName(userdata.businessname)

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
        const response = await axios.get(`http://localhost:5000/thread/getuserthread?category=${category}`);
        
        setuserproduct(response.data);
        }
        catch(error){
          console.log(error)
        }
      }

       const handlepost  = async(e)=>{
        e.preventDefault();
             const formdata ={businessname,googlelink,reply,idobject}
             console.log(formdata);
            await axios.post(`http://localhost:5000/thread/createresponse`,formdata)
             .then((data) => {
                const {status} =data;
                if(status){
                    toast.success("Thread added successfully");
                   
                    setreply("");
                 
                }
                else{
                  toast.warn("Cant post");
                }
              })
              .catch((err) => console.log(err))
          }
          









  return (
    <div className='oute'>
  {userproduct.map((e,id)=>{
      return(
  <div className='inner' key={id}>
      <h2>Title:{e.title}</h2>
      <p >category:{e.category}</p>
      <button onClick={() => setidobject(e._id)}>Set ID Object</button>
      <form>
      <textarea className='cpf1f2t' value = {reply}   onChange={(e)=>setreply(e.target.value)} type='text' rows="4"/>
      <button className='cpf1f2b' onClick={handlepost}>Make a deal</button>
      </form>
      
 </div>
      )
  })}
  </div>
  )
}

export default Userthreads