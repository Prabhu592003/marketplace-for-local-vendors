import React from 'react'
import {useEffect,useState  } from 'react';
import {  toast } from 'react-toastify';
import axios from 'axios';

const Createcusthread = () => {

  const[location,setlocation]= useState('clothing')
  const[category,setcategory]= useState(Number)
  const[email,setemail]= useState('')
  const[title,settitle]= useState('')


  useEffect(()=>{
    try{
    const userdata = JSON.parse(localStorage.getItem('customerLogin'));
    
    setemail(userdata.email);
  }
    catch(err){
      console.log(err);
    }
  },[]);
   

  const handlepost = async(e)=>{
    e.preventDefault();

   
   
   
       
    const formdata ={
    title,location,category,email
 };
    console.log(formdata)

      
      await axios.post('http://localhost:5000/thread//createthread',formdata)
      .then((data) => {
        const {status} =data;
        if(status){
            toast.success("Thread added successfully");
           
            settitle("");
           setlocation("")
        }
        else{
          toast.warn("Cant post");
        }
      })
      .catch((err) => console.log(err))
  }
  







  return (
   <>
                 <>
    <div className='cpf1'>
          <div className='cpf1f2'>
            <label className='cpf1f2l' >Location</label>
            <input className='cpf1f2i' value={location}  onChange={(e)=>setlocation(e.target.value)} type='text'/>
            <label className='cpf1f2l' >Post your thread</label>
            <textarea className='cpf1f2t' value = {title}   onChange={(e)=>settitle(e.target.value)} type='text' rows="4"/>
            <select className='cpf1f2i'
             id="category"
             value={category}
             onChange={(e)=>setcategory(e.target.value)}
             required
             >
  <option value="" disabled>Select a Category</option>
  <option value="clothing">Clothing</option>
  <option value="electronics">Electronics</option>
  <option value="groceries">Groceries</option>
  <option value="furniture">Furniture</option>
  <option value="books">Books</option>
  <option value="sports">Sports Equipment</option>

</select>
            <button className='cpf1f2b'onClick={handlepost}>Publish</button>
          </div>



    </div>
    
    </>
   </>
  )
}

export default Createcusthread;