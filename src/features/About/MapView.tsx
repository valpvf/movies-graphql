import { Box, Container, Typography } from "@mui/material";
import { addPopupToMapwidget, createMapWidget } from "./mapWidget";
import { useEffect, useRef, useState } from "react";
import { Map } from "leaflet";
import { createPortal } from "react-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function MapView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);
  const [popupContainer, setPopupContainer] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    if (mapRef.current === null) {
      const map = createMapWidget(containerRef.current!);
      mapRef.current = map;
      const popupDiv = addPopupToMapwidget(map);
      setPopupContainer(popupDiv);
    }
  }, []);

  return (
    <Container
      ref={containerRef}
      sx={{ width: 800, height: 500, my: 2 }}
    >
      {popupContainer !== null &&
        createPortal(<Greeting />, popupContainer)}
    </Container>
  );
}

function Greeting() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography>Greetings from Ukraine!</Typography>
      <FavoriteIcon sx={{ color: "#0056B9" }} />
      <FavoriteIcon sx={{ color: "#FFD800" }} />
    </Box>
  );
}
