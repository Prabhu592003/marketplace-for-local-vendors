import React from 'react'
import "./Productlayoutcus.css"
import Mapproduct from '../map/Mapproduct';
const Productlayoutcus = (props) => {
    const{productdata,location,latitude,longitude,radius} = props;
    const result = productdata.filter((item) => item.location === location);






    function calculateDistance(lat1, lon1, lat2, lon2) {
      const R = 6371; // Radius of the Earth in kilometers
      const dLat = degToRad(lat2 - lat1);
      const dLon = degToRad(lon2 - lon1);
    
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
      
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;
    
      return distance.toFixed(2);
    }
    
    function degToRad(deg) {
      return deg * (Math.PI / 180);
    }
    
    function findNearestLocations(currentLat, currentLon, locations, count) {
      const nearestLocations = locations.map(location => {
        const distance = calculateDistance(currentLat, currentLon, location.latitude, location.longitude);
        return { ...location, distance };
      }).sort((a, b) => a.distance - b.distance).slice(0, count);
    
      return nearestLocations;
    }
    
    
    
    // Get user's current location (latitude and longitude)
    const currentLatitude = latitude; // Example latitude
    const currentLongitude = longitude; // Example longitude
    
   
    const nearestLocations = findNearestLocations(currentLatitude, currentLongitude, result, 4);
    const filteredLocations = nearestLocations.filter(location => location.distance <= radius);
    let answer  = nearestLocations;
    if(radius){
       answer  = filteredLocations
    }
   
    console.log("Nearest Locations:", nearestLocations);
    console.log("filtered Locations:", filteredLocations);





















  return (
    <>
      <div className='wholep'>
      <div className='datap'>
          <div className='outerr'>
  {answer.map((e,id)=>{
      return(
<> <div className='inner' key={id}>
      <img width={100} src={`http://localhost:5000/${e?.image}`} />
      <h2>{e.title}</h2>
      <p>Description: {e.description}</p>
      <p>Business Name: {e.businessname}</p>
      <p>Distance: {e.distance} Kms Away</p>
      <p>Location: {e.location}</p>
      <p>Mobile Number: {e.phonenumber}</p>
    
 </div></>
 
      )
  })}
  </div>
      </div>
      <div className='map'>
     {nearestLocations? <Mapproduct nearestLocations={nearestLocations}/>:null}
       
      </div>
      </div>





    </>

  )
}

export default Productlayoutcus;