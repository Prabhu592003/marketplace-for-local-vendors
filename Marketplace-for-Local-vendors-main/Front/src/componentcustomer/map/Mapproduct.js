import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon,  } from "leaflet";
import React from 'react';
  

export default function Mapproduct(props){

    const{nearestLocations}=props;
    let gloc=[17.198022112044494,78.6411273594827]
   
 

const customIcon = new Icon({
   
    iconUrl: require("./map.png"),
    iconSize: [38, 38] 
});






    return <>
        <div className="container" style={{height:"600px"}}>
          <MapContainer center={gloc} zoom={12}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {nearestLocations.map((marker,id) => (
                    <Marker key={id} position={[marker.latitude,marker.longitude]} icon={customIcon}>
                        <Popup>
                            <a href={marker.googlelink} target="_blank">{marker.businessname}</a>
                        </Popup>
                    </Marker>
            ))} 
       
          </MapContainer>
        </div>
    </>
}



 
