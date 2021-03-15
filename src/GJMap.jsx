// Button to try programmatically highlight marker
import { GeoJSON, MapContainer, Marker } from "react-leaflet";
import { Icon, DivIcon } from "leaflet";
import icon from "./business-and-trade-2.svg";
import SGAreas from "./sgareas.json";
import React, { useState } from "react";

const zoom = 1;
const startingPoint = [1.35811, 103.835067];

const markerDefaultColor = "#62B220";
const markerFocusColor = "#FF69B4";

const markerHtmlStyles = (color) => `
  background-url: ${icon};
  background-color: ${color};
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`;

const companyMarker = (color) =>
  new DivIcon({
    iconUrl: icon,
    // iconSize: [18, 18],
    html: `<span style="${markerHtmlStyles(color)}" />`,
    className: "",
  });

const renderGeoJson = (features) => {
  return features.map((feature) => (
    <GeoJSON key={feature.properties.Name} data={feature} />
  ));
};

const GJMap = ({ markerData, highlightIdx, style, className }) => {
  const renderMarkers = (markers) => {
    return markers.map((marker) => (
      <Marker
        key={marker.id}
        icon={
          marker.id === highlightIdx
            ? companyMarker(markerFocusColor)
            : companyMarker(markerDefaultColor)
        }
        position={[marker.latitude, marker.longitude]}
      />
    ));
  };
  return (
    <MapContainer
      style={style}
      className={className}
      center={startingPoint}
      zoom={zoom}
    >
      {renderGeoJson(SGAreas.features)}
      {renderMarkers(markerData)}
    </MapContainer>
  );
};

export default GJMap;
