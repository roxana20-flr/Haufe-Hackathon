import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
// Don't forget to import Map.css, or else your map will not appear!
import './Map.css';



const Haufe = [45.75951, 21.220871];

const Map = ({  data }) => {
  console.log("Data")
  console.log(data)
  const datas = data;

  return (
    <MapContainer 
      center={Haufe} 
      zoom={13} 
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
      />
      <Marker
          position={Haufe}
          icon={new Icon({
            iconUrl: "/pin.svg",
            iconSize: [25, 25]
          })}
        >
        <Popup>
          Haufe Hackaton
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
