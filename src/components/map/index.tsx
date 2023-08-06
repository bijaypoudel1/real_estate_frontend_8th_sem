// // import React, { useRef, useEffect, useState } from "react";
// // import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

// // mapboxgl.accessToken =
// //   "pk.eyJ1IjoiYmlqYXkyMTIiLCJhIjoiY2xqZDNmNW9tMDFpeDNka3lkN3k5M3JvbiJ9.1iDETCqaFQ4Y2QxvMUyO1Q";

// // export default function App() {
// //   const mapContainer = useRef<any>(null);
// //   const map = useRef(null);
// //   const [lng, setLng] = useState(84.124);
// //   const [lat, setLat] = useState(28.3949);
// //   const [zoom, setZoom] = useState(8);

// //   useEffect(() => {
// //     if (map.current) return; // initialize map only once
// //     map.current = new mapboxgl.Map({
// //       container: mapContainer.current,
// //       style: "mapbox://styles/mapbox/streets-v12",
// //       center: [lng, lat],
// //       zoom: zoom,
// //     });
// //   });

// //   useEffect(() => {
// //     if (!map.current) return; // wait for map to initialize
// //     map.current.on("move", () => {
// //       setLng(map.current.getCenter().lng.toFixed(4));
// //       setLat(map.current.getCenter().lat.toFixed(4));
// //       setZoom(map.current.getZoom().toFixed(2));
// //     });
// //   });

// //   return (
// //     <div>
// //       <div className="mapba">
// //         Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
// //       </div>
// //       <div ref={mapContainer} className="h-[500px]" />
// //     </div>
// //   );
// // }

// // import Map, {
// //   LngLat,
// //   Marker,
// //   MarkerDragEvent,
// //   NavigationControl,
// // } from "react-map-gl";
// // import ControlPanel from "./geoCoderControl";

// // import GeocoderControl from "./geoCoderControl";
// // import Pin from "./pin";
// // import { useCallback, useState } from "react";

// // // eslint-disable-next-line
// // const TOKEN =
// //   "pk.eyJ1IjoiYmlqYXkyMTIiLCJhIjoiY2xqZDNmNW9tMDFpeDNka3lkN3k5M3JvbiJ9.1iDETCqaFQ4Y2QxvMUyO1Q"; // Set your mapbox token here

// // const initialViewState = {
// //   latitude: 40,
// //   longitude: -100,
// //   zoom: 3.5,
// // };

// // export default function App() {
// //   const [marker, setMarker] = useState({
// //     latitude: 40,
// //     longitude: -100,
// //   });
// //   const [events, logEvents] = useState<Record<string, LngLat>>({});

// //   const onMarkerDragStart = useCallback((event: MarkerDragEvent) => {
// //     logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
// //   }, []);

// //   const onMarkerDrag = useCallback((event: MarkerDragEvent) => {
// //     logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));

// //     setMarker({
// //       longitude: event.lngLat.lng,
// //       latitude: event.lngLat.lat,
// //     });
// //   }, []);

// //   const onMarkerDragEnd = useCallback((event: MarkerDragEvent) => {
// //     logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
// //   }, []);

// //   return (
// //     <div className="!relative w-screen h-screen">
// //       <Map
// //         initialViewState={initialViewState}
// //         mapStyle="mapbox://styles/mapbox/streets-v9"
// //         mapboxAccessToken={TOKEN}
// //       >
// //         <Marker
// //           longitude={marker.longitude}
// //           latitude={marker.latitude}
// //           anchor="bottom"
// //           draggable
// //           onDragStart={onMarkerDragStart}
// //           onDrag={onMarkerDrag}
// //           onDragEnd={onMarkerDragEnd}
// //         >
// //           <div className="absolute z-50">
// //             <Pin size={20} />
// //           </div>
// //         </Marker>
// //         <NavigationControl />
// //         <GeocoderControl mapboxAccessToken={TOKEN} position="top-left" />
// //       </Map>
// //       {/* <ControlPanel events={events} /> */}
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import ReactMapGL, { Marker } from "react-map-gl";
// import Fly from "./Components/Fly";
// import FlyToInterpolator from "react-map-gl";
// import "./App.css";

// function App() {
//   // Setting up the state for the latitude
//   // and longitude
//   const [lat, setLat] = useState(22.5726);
//   const [lon, setLon] = useState(88.3639);

//   // Setting up the state for the map
//   const [viewport, setViewport] = useState({
//     latitude: lat,
//     longitude: lon,
//     zoom: 12,
//     bearing: 0,
//     pitch: 0,
//     width: "100%",
//     height: "100vh",
//   });

//   // Map viewport updates whenever the
//   // latitude and longitude changes
//   useEffect(() => {
//     setViewport({
//       latitude: lat,
//       longitude: lon,
//       zoom: 12,
//       transitionInterpolator:  FlyToInterpolator({ speed: 1.0 }),
//       transitionDuration: "auto",
//       width: "100%",
//       height: "100vh",
//     });
//   }, [lat, lon]);

//   return (
//     <ReactMapGL
//       mapboxApiAccessToken={"<YOUR_API_KEY>"}
//       {...viewport}
//       onViewportChange={(viewport) => setViewport(viewport)}
//     >
//       <Marker latitude={lat} longitude={lon}>
//         {/* <ImLocation size="30px" /> */}
//       </Marker>
//       <Fly setLat={setLat} setLon={setLon} />
//     </ReactMapGL>
//   );
// }

// export default App;
