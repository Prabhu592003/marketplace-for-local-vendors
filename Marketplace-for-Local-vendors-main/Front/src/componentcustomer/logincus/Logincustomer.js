import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Logincustomer.css"
import {  toast } from 'react-toastify';
const Logincustomer = () => {


  const[name,setName]= useState('')
  const[email,setemail]= useState('')
  const[password,setPassword]= useState('')

  const navigate = useNavigate();

  const handlelogin = async(event)=>{
    event.preventDefault();
    if(!email){
      toast.warn("Please enter email");
      return;
    }
    if(!password) {toast.warn("please enter password"); return;}
    const formdatalogin ={email,password};
    await fetch('http://localhost:5000/customer/logincus',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formdatalogin)
    }).then((data)=>data.json()).then((datas)=>{
      const{status,data}= datas;
      if(status){
        console.log(status);
        toast.success("successfully Signed in");
        navigate('/customernavbar');
        console.log(datas);
        localStorage.setItem('customerLogin',JSON.stringify(data));
      }
      else{
        console.log(status);
        toast.warn("Invalid login data");
      }
    })
}
const handleregister = async(event)=>{
  event.preventDefault();
  if(!name) {toast.warn("please enter name"); return;}
  if(!email) {toast.warn("please enter email"); return;}
  if(!password) {toast.warn("please enter password"); return;}
   const formdata ={
        name,email,password
   };
   console.log(formdata)
   await fetch('http://localhost:5000/customer/registercus',{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(formdata)
}).then((data)=> data.json())
.then((data) => {
  const {status} =data;
  if(status){
      toast.success("Account created successfully");
  }
  else{
    toast.warn("email is already used .Try again");
  }
})
.catch((err) => console.log(err))
}



    const [control,setcontrol]= useState(0)
    const handlelog = ()=>{
            setcontrol(0);
    }
    const handlereg =()=>{
        setcontrol(1);
    }
      return (

        <>
        <div className="f1">
         <div className="f1f1">
          <div className="f1f1nav">
          <button className="f1f1b" onClick={handlelog}>Login</button>
          <button className="f1f1b" onClick={handlereg}>Register</button>
          </div>
          <div className="f1f1fo">
          {control===0?
        <form>
     
        <input type="email"  id="exampleInputEmail1" placeholder='eg.xyz.gmail.com' value ={email} onChange={(e)=>setemail(e.target.value)}/>
    
        <input type="password"  id="exampleInputEmail1" placeholder='Password'  value ={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handlelogin} className='fb'>Login</button>
        </form>:<form>
   
        <input type="text"  id="exampleInputEmail1" placeholder='Name'value ={name} onChange={(e)=>setName(e.target.value)}/>
        
   
        <input type="email"  id="exampleInputEmail1" placeholder='eg.xyz.gmail.com' value ={email} onChange={(e)=>setemail(e.target.value)}/>
     
        <input type="password"  id="exampleInputEmail1" placeholder='password' value ={password} onChange={(e)=>setPassword(e.target.value)}/>
       <Link style={{textDecoration:"none",color:"white"}} to = "/CustomerdashBoard"> <button onClick={handleregister} className='fb'>Register</button></Link>
        </form>}
          </div>
          <div className="f1f1home"><Link className="f1f1bh"to = "/">Back to Home</Link></div>
          </div>
          <div className="f1f2c">
          

          </div>

        </div>

        </>
    
        
        
      )
    }

export default Logincustomer;
