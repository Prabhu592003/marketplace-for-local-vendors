import React, { useState ,useEffect} from 'react'
import "./Customernavbar.css"
import { Link, Outlet, useNavigate } from 'react-router-dom';
import{FaUserCircle} from 'react-icons/fa'

const Customernavbar = () => {
    const [userdetails,setuserDetails] = useState(null);
    const navigate = useNavigate();
    
    useEffect(()=>{
      try{
      const userdata = JSON.parse(localStorage.getItem('customerLogin'));
      
      setuserDetails(userdata);
      console.log(userdetails);
     
    }
      catch(err){
        console.log(err);
      }
    },[]);
  
    function handlelogout(e){
      e.preventDefault();
      localStorage.removeItem('userlogin');
      navigate('/');
    }
    return (
      <>
      {userdetails?
      <div>
      <div className='navbaruser'>
            <div className='navbarf1'>
           <Link  style={{textDecoration:"none",color:"white"}}  to ="Customerdashboard">search</Link>
           <Link  style={{textDecoration:"none",color:"white"}}  to ="CreatecusThread">Create a thread</Link>
           <Link  style={{textDecoration:"none",color:"white"}}  to ="Customerthreads">Your threads</Link>

            </div>
            <div className='navbarf2'>
            <p style={{textDecoration:"none",color:"white",display:"flex",flexDirection:"row"}} ><FaUserCircle style={{marginTop:"5px"}} /> <span>&nbsp;{userdetails.name}</span></p>
            <p className='navbarp1' style={{textDecoration:"none",color:"white"}} onClick={handlelogout}>Logout</p>
            </div>
            <div className=''></div>
            
      </div>
      <Outlet />
      </div>:<>404 data not found</>}
      </>
    )
  }

export default Customernavbar