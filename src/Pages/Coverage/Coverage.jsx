import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => {
  const position = [23.7706, 90.4000]
  const serviceCenter=useLoaderData();
  const mapRef=useRef(null)
   

  const handleSearch=e=>{
    e.preventDefault();
    const location=e.target.location.value;
    const district=serviceCenter.find(c=>c.district.toLowerCase().includes(location.toLowerCase()));
    if(district){
      const coord=[district.latitude,district.longitude];
      console.log(district,coord);
      mapRef.current.flyTo(coord,14)
    }
  }
  return (
    <div>
      <h1 className='text-center text-3xl text-secondary mt-5 font-bold'>We are available in 64 districts</h1>

      <form onSubmit={handleSearch}  className='my-10'>
        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input name='location' type="search" className="grow" placeholder="Search" />
  <kbd className="kbd kbd-sm">⌘</kbd>
  <kbd className="kbd kbd-sm">K</kbd>
</label>
      </form>

      <h2 className='text-xl text-secondary mb-5 font-bold'>We deliver almost all over the Bangladesh</h2>

      <div className='border w-11/12 mx-auto h-[800px]'>
        <MapContainer center={position} zoom={8} scrollWheelZoom={false} className='h-[800px]' ref={mapRef}>
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