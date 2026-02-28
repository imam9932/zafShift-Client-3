import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => {
  const position = [23.7706, 90.4000]
  const serviceCenter=useLoaderData();
  console.log(serviceCenter);
  return (
    <div>
      <h1>We are available in 64 districts</h1>

      <div className='border w-full h-[800px]'>
        <MapContainer center={position} zoom={8} scrollWheelZoom={false} className='h-[800px]'>
          <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
      serviceCenter.map((center,index)=> <Marker key={index} position={[center.latitude,center.longitude]}>
      <Popup>
       <strong>{center.district}</strong> <br /> Service Area : {center.covered_area.join (', ' )}
      </Popup>
    </Marker>)
    }
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;