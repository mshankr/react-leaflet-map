/** React-Leaflet example */

import { MapContainer, GeoJSON, TileLayer, Popup, Marker } from "react-leaflet";
// import SGAreas from "./sgareas.json";

const startingPoint = [1.35811, 103.835067];

const Map = () => {
  return (
    <div>
      <MapContainer center={startingPoint} zoom={11}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={startingPoint}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
