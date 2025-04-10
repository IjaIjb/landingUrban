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

// This function fetches the route between two points using OSRM API
const fetchRoute = async (departure:any, destination:any, profile = 'driving') => {
  if (!departure || !destination) return null;

  // OSRM expects coordinates as [longitude, latitude]
  // But our app uses [latitude, longitude], so we need to swap
  const departLng = departure[1];
  const departLat = departure[0];
  const destLng = destination[1];
  const destLat = destination[0];
  
  const url = `https://router.project-osrm.org/route/v1/${profile}/${departLng},${departLat};${destLng},${destLat}?overview=full&geometries=geojson`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.code !== 'Ok') {
      console.error('Error fetching route:', data.message);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching route:', error);
    return null;
  }
};

const PathMap = ({ path, routeData }:any) => {
  const map = useMap();

  useEffect(() => {
    // If we have route data, fit the map to the route bounds
    if (routeData && routeData.routes && routeData.routes.length > 0) {
      try {
        // Extract coordinates from the route's geometry
        const coordinates = routeData.routes[0].geometry.coordinates;
        // Convert from [lng, lat] to [lat, lng] for Leaflet
        const latLngs = coordinates.map((coord:any) => [coord[1], coord[0]]);
        
        const bounds = L.latLngBounds(latLngs);
        map.fitBounds(bounds, {
          padding: [50, 50],
        });
      } catch (error) {
        console.error("Error fitting bounds to route:", error);
        fallbackToBounds(path, map);
      }
    } else {
      // Fallback to original points if no route data
      fallbackToBounds(path, map);
    }
  }, [map, path, routeData]);

  const fallbackToBounds = (points:any, mapInstance:any) => {
    if (points.length > 0) {
      try {
        const bounds = L.latLngBounds(points);
        mapInstance.fitBounds(bounds, {
          padding: [50, 50],
        });
      } catch (error) {
        console.error("Error fitting bounds to points:", error);
        // Fallback to center on first point
        if (points[0]) {
          mapInstance.setView(points[0], 10);
        }
      }
    }
  };

  return (
    <>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* Show the actual route if we have route data */}
      {routeData && routeData.routes && routeData.routes.length > 0 ? (
        <Polyline 
          positions={
            routeData.routes[0].geometry.coordinates.map((coord:any) => [coord[1], coord[0]])
          } 
          color="blue" 
          weight={4} 
        />
      ) : (
        // Fallback to straight line if no route data
        <Polyline positions={path} color="blue" weight={4} />
      )}
    </>
  );
};

type PropTypes = {
  depatPath: [number, number];
  destinPath: [number, number];
  className?: string;
  profile?: 'driving' | 'walking' | 'cycling';
};

const MapWithPath = ({ 
  depatPath, 
  destinPath, 
  className = "",
  profile = 'driving'
}: PropTypes) => {
  const [isMapReady, setIsMapReady] = useState(false);
  const [routeData, setRouteData] = useState(null);
  const [isLoadingRoute, setIsLoadingRoute] = useState(false);
  
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

  // Fetch route data when coordinates change
  useEffect(() => {
    const getRoute = async () => {
      if (validCoords(pointA) && validCoords(pointB)) {
        setIsLoadingRoute(true);
        try {
          const data = await fetchRoute(pointA, pointB, profile);
          setRouteData(data);
        } catch (error) {
          console.error("Failed to fetch route:", error);
          setRouteData(null);
        } finally {
          setIsLoadingRoute(false);
        }
      }
    };
    
    getRoute();
  }, [pointA, pointB, profile]);

  useEffect(() => {
    // Set the map as ready after a short delay to ensure container is properly sized
    const timer = setTimeout(() => {
      setIsMapReady(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {(!isMapReady || isLoadingRoute) && <MapPlaceholder />}
      <div className={`w-full h-full transition-opacity duration-300 ${isMapReady && !isLoadingRoute ? 'opacity-100' : 'opacity-0'}`}>
        <MapContainer
          center={center}
          zoom={10}
          style={{ width: "100%", height: "100%" }}
          zoomControl={false}
          attributionControl={false}
        >
          <PathMap path={path} routeData={routeData} />
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




