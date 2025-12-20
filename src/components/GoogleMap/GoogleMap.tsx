"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./GoogleMap.module.css";

export interface GoogleMapProps extends Common.ComponentProps {
  address?: string;
  center?: { lat: number; lng: number };
  zoom?: number;
  height?: string;
}

// Default center coordinates for IPGC clinic: 94 Laver Drive, Robina, Queensland 4226, Australia
const DEFAULT_CENTER = {
  lat: -28.0775,
  lng: 153.3931,
};

const DEFAULT_ZOOM = 15;

const containerStyle = {
  width: "100%",
  height: "400px",
};

export const GoogleMapComponent = ({
  testID,
  address,
  center = DEFAULT_CENTER,
  zoom = DEFAULT_ZOOM,
  height = "400px",
}: GoogleMapProps) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div
        data-testid={testID}
        className={styles.errorContainer}
        style={{ height }}
      >
        <p className={styles.errorText}>
          Google Maps API key is not configured. Please add
          NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment variables.
        </p>
      </div>
    );
  }

  const mapContainerStyle = {
    ...containerStyle,
    height,
  };

  return (
    <div data-testid={testID} className={styles.mapContainer}>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          options={{
            disableDefaultUI: false,
            zoomControl: true,
            streetViewControl: true,
            mapTypeControl: false,
            fullscreenControl: true,
          }}
        >
          <Marker position={center} title={address || "IPGC Clinic"} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
