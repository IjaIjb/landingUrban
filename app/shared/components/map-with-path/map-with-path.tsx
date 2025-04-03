"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { point } from "leaflet";

// CSS for responsive map container
const mapContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "500px",
};

const PathMap: React.FC<{ path: [number, number][] }> = ({ path }) => {
  const map = useMap();

  useEffect(() => {
    if (path.length > 0) {
      const bounds = L.latLngBounds(path);
      map.fitBounds(bounds, {
        padding: [20, 20],
        paddingTopLeft: [-1200, 40],
      }); // Adjust padding as needed
    }
  }, [map, path]);

  return (
    <>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={path} color="blue" />
    </>
  );
};

type propT = {
  depatPath: [number, number];
  destinPath: [number, number];
};
const MapWithPath = ({ depatPath, destinPath }: propT) => {
  // Coordinates for Akure and Ado Ekiti
  const pointA: [number, number] = depatPath;
  const pointB: [number, number] = destinPath;

  // Define the path with the coordinates
  const path: [number, number][] = [pointA, pointB];

  return (
    <MapContainer center={pointB} zoom={20} style={mapContainerStyle}>
      <PathMap path={path} />
    </MapContainer>
  );
};

export default MapWithPath;
