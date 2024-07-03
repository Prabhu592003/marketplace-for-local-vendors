import React, { useEffect ,useState } from 'react'
import "./CustomerdashBoard.css"
import { FaPaperPlane} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Productlayoutcus from '../productlayout/Productlayoutcus';

const CustomerdashBoard = () => {

 
  const [userDetails,setuserDetails] = useState(null);
  const navigate = useNavigate();
  const [search,setsearch] = useState('');
  const [title,settitle] = useState('');
  const [location,setlocation] = useState('');
  const [productdata,setproductdata] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [radius,setradius] = useState(null); 

      
  const handleGetLocationClick = (e) => {
   e.preventDefault();
    if ('geolocation' in navigator) {
         navigator.geolocation.getCurrentPosition(
        position => {
         const lat = position.coords.latitude;
         const long = position.coords.longitude;
         setLatitude(lat)
         setLongitude(long)
         console.log(latitude);
         console.log(longitude);
        },
        error => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  };
 
  function handlesearch(e){
    e.preventDefault();

    const keyvalue = search;
    settitle(keyvalue);

   
  }

  useEffect(()=>{
    searchdatafetchcus();
  
  },[title]);

  const searchdatafetchcus = async ()=>{
    try{
    const response = await  axios.get(`http://localhost:5000/product/getcustomerproduct?title=${title}`);
    console.log(response.data);
    setproductdata(response.data);
    }
    catch(error){
      console.log(error)
    }
  }
  
  useEffect(()=>{
    try{
    const userdata = JSON.parse(localStorage.getItem('customerLogin'));
    
    setuserDetails(userdata);
  
  }
    catch(err){
      console.log(err);
    }
  },[]);
 
 
  return (
         
          
              <div className='cdf1'>
               <div className='cdf1f1'>
                  
                     <h1 className='cdf1f1h1'>Locate Products in an Instant on Product Locator!</h1>
                     
                      <div className='cdf1f1f1'>
                      <input
      type="number"
      className='radiusf1'
      value={radius !== null ? radius : ''} // Ensure the input field is controlled even when radius is null
      placeholder="radius"
      onChange={(e) => setradius(parseFloat(e.target.value))}
    />                          <button onClick={handleGetLocationClick} className='locate'>Use My Location</button>
                         
                          <input className='cdf1f1i1' value={location} onChange={(e)=>setlocation(e.target.value)} type="text" placeholder="Vallioor"/>
                          <div className='cdf1f1f2'>
                          <input className='cdf1f1i2' value = {search} onChange={(e)=>setsearch(e.target.value)} type='text'  placeholder="Kite Paper"/>
                          
                          <button className='cdf1f1f1b' onClick={handlesearch}><FaPaperPlane/></button>
                    
                          </div>
                      </div>

               </div>
               <div>  <Productlayoutcus productdata={productdata} location={location} latitude={latitude} longitude={longitude} radius={radius} /></div>
             
          </div>
        
         
  )
}

export default CustomerdashBoard