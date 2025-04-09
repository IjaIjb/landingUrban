// MapWithPath.tsx - Improved version
"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Create a placeholder component to show during map loading
const MapPlaceholder = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-700 mx-auto mb-4"></div>
        <p className="text-sm text-gray-600">Loading map...</p>
      </div>
    </div>
  );
};

const PathMap: React.FC<{ path: [number, number][] }> = ({ path }) => {
  const map = useMap();

  useEffect(() => {
    if (path.length > 0) {
      try {
        const bounds = L.latLngBounds(path);
        map.fitBounds(bounds, {
          padding: [50, 50],
        });
      } catch (error) {
        console.error("Error fitting bounds:", error);
        // Fallback to center on first point if bounds fitting fails
        if (path[0]) {
          map.setView(path[0], 10);
        }
      }
    }
  }, [map, path]);

  return (
    <>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={path} color="blue" weight={4} />
    </>
  );
};

type PropTypes = {
  depatPath: [number, number];
  destinPath: [number, number];
  className?: string;
};

const MapWithPath = ({ depatPath, destinPath, className = "" }: PropTypes) => {
  const [isMapReady, setIsMapReady] = useState(false);
  
  // Validate coordinates
  const validCoords = (coords: any): boolean => {
    return Array.isArray(coords) && 
           coords.length === 2 && 
           !isNaN(coords[0]) && 
           !isNaN(coords[1]);
  };
  
  const pointA: [number, number] = validCoords(depatPath) ? depatPath : [0, 0];
  const pointB: [number, number] = validCoords(destinPath) ? destinPath : [0, 0];
  
  // Define the path with the coordinates
  const path: [number, number][] = [pointA, pointB];
  
  // Calculate center point for initial map view
  const center: [number, number] = [
    (pointA[0] + pointB[0]) / 2,
    (pointA[1] + pointB[1]) / 2
  ];

  useEffect(() => {
    // Set the map as ready after a short delay to ensure container is properly sized
    const timer = setTimeout(() => {
      setIsMapReady(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {!isMapReady && <MapPlaceholder />}
      <div className={`w-full h-full transition-opacity duration-300 ${isMapReady ? 'opacity-100' : 'opacity-0'}`}>
        <MapContainer
          center={center}
          zoom={10}
          style={{ width: "100%", height: "100%" }}
          zoomControl={false}
          attributionControl={false}
        >
          <PathMap path={path} />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapWithPath;


// "use client";
// import React, { useEffect } from "react";
// import { MapContainer, TileLayer, Polyline, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L, { point } from "leaflet";

// // CSS for responsive map container
// const mapContainerStyle: React.CSSProperties = {
//   width: "100%",
//   height: "500px",
// };

// const PathMap: React.FC<{ path: [number, number][] }> = ({ path }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (path.length > 0) {
//       const bounds = L.latLngBounds(path);
//       map.fitBounds(bounds, {
//         padding: [20, 20],
//         paddingTopLeft: [-1200, 40],
//       }); // Adjust padding as needed
//     }
//   }, [map, path]);

//   return (
//     <>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Polyline positions={path} color="blue" />
//     </>
//   );
// };

// type propT = {
//   depatPath: [number, number];
//   destinPath: [number, number];
// };
// const MapWithPath = ({ depatPath, destinPath }: propT) => {
//   // Coordinates for Akure and Ado Ekiti
//   const pointA: [number, number] = depatPath;
//   const pointB: [number, number] = destinPath;

//   // Define the path with the coordinates
//   const path: [number, number][] = [pointA, pointB];

//   return (
//     <MapContainer center={pointB} zoom={20} style={mapContainerStyle}>
//       <PathMap path={path} />
//     </MapContainer>
//   );
// };

// export default MapWithPath;
