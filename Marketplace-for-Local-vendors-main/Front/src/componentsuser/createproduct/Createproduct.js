import React from 'react'
import "./Createproduct.css"
import {useEffect,useState  } from 'react';
import {  toast } from 'react-toastify';
import axios from 'axios';

const Createproduct = () => {


  const [userdetails,setuserDetails] = useState(null);
  const[businessname,setBusinessName]= useState('')
  const[location,setlocation]= useState('')
  const[phonenumber,setPhonenumber]= useState(Number)
  const[email,setemail]= useState('')
  const[title,settitle]= useState('')
  const[description,setdescription]= useState('')
  const [selectedFile, setSelectedFile] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const[deliverystatus,setdeliverystatus] = useState(null)
  const[googlelink,setgooglelink] = useState('');
  
  useEffect(()=>{
    try{
    const userdata = JSON.parse(localStorage.getItem('userlogin'));
    console.log(userdata);
    setuserDetails(userdata);
    if(userdata){
      setBusinessName(userdata.businessname)
      setlocation(userdata.location)
      setPhonenumber(userdata.phonenumber)
      setemail(userdata.email)
      setLatitude(userdata.latitude)
      setLongitude(userdata.longitude)
      setgooglelink(userdata.googlelink);
     
    }
   
  }
    catch(err){
      console.log(err);
    }
  },[]);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handlepost = async(e)=>{
    e.preventDefault();
    if(!title) {toast.warn("please enter title"); return;}
    if(!description) {toast.warn("please enter description"); return;}
    if(!selectedFile) { toast.warn("please enter email"); return;}
   
       
    const formdata = new FormData();
    formdata.append('image', selectedFile);
    formdata.append('businessname', businessname);
    formdata.append('location', location);
    formdata.append('phonenumber', phonenumber);
    formdata.append('email', email);
    formdata.append('title', title);
    formdata.append('description', description);
    formdata.append('latitude', latitude);
    formdata.append('longitude', longitude);
    formdata.append('googlelink', googlelink);

    

      //    await fetch('http://localhost:5000/product/createproduct',{
      //   method:"POST",
      //   headers:{
      //     "Content-Type":'multipart/form-data',
      //   },
      //   body:formdata
      // }).then((data)=> data.json())
      // .then((data) => {
      //   const {status} =data;
      //   if(status){
      //       toast.success("post created successfully");
      //       setdescription("");
      //       settitle("");
      //   }
      //   else{
      //     toast.warn("Cant post");
      //   }
      // })
      // .catch((err) => console.log(err))
      await axios.post('http://localhost:5000/product/createproduct',formdata)
      .then((data) => {
        const {status} =data;
        if(status){
            toast.success("Product added successfully");
            setdescription("");
            settitle("");
            setSelectedFile("");
        }
        else{
          toast.warn("Cant post");
        }
      })
      .catch((err) => console.log(err))
  }
  


  return (
    <>
    <div className='cpf1'>
          <div className='cpf1f1'>
            <input   className='cpf1f1file' type='file' onChange={handleFileChange} />
          </div>
          <div className='cpf1f2'>
            <label className='cpf1f2l' >Title</label>
            <input className='cpf1f2i' value={title}  onChange={(e)=>settitle(e.target.value)} type='text'/>
            <label className='cpf1f2l' >Description</label>
            <textarea className='cpf1f2t' value = {description}   onChange={(e)=>setdescription(e.target.value)} type='text' rows="4"/>
            
          
            
            <button className='cpf1f2b' onClick={handlepost}>Publish</button>
          </div>



    </div>
    
    </>
  )
}
export default Createproduct;




