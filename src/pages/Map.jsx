import { useState, useEffect } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';
import NavbarComponent from '../components/NavbarComponent';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

//? JSON
import Events from '../assets/JSON/events.json';
import Tags from '../assets/JSON/tags.json';

const surabayaLimit = [
  [112.55, -7.35], 
  [112.88, -7.19]
];

const DEFAULT_LOCATION = {
  longitude: 112.7378,
  latitude: -7.2458,
  zoom: 15
};

const MapPages = () => {
  const [viewState, setViewState] = useState(DEFAULT_LOCATION);
  const [locationError, setLocationError] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);


  const moveToMyLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setViewState({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            zoom: 15
          });
        },
        () => {
          setLocationError("Lokasi Tidak Ditemukan, Menggunakan Lokasi Default.");
          setTimeout(() => setLocationError(""), 5000);
        },
        { enableHighAccuracy: true }
      );
    } else {
      setLocationError("GeoLocation Tidak Disupport Browser.");
      setTimeout(() => setLocationError(""), 5000);
    }
  };

  const handleMapClick = (e) => {
    const clickedLng = e.lngLat.lng;
    const clickedLat = e.lngLat.lat;

    const foundEvent = Events.find(event =>
      Math.abs(event.longitude - clickedLng) < 0.005 &&
      Math.abs(event.latitude - clickedLat) < 0.005
    );

    if (foundEvent) {
      setSelectedEvent(foundEvent);
    } else {
      setSelectedEvent(null);
    }
  };



  return (
    <div>
      <NavbarComponent />

      {locationError && (
        <div className="absolute top-20 right-2 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
          {locationError}
        </div>
      )}

      <Map
        mapLib={maplibregl}
        {...viewState} 
        onMove={(evt) => setViewState(evt.viewState)} 
        style={{ width: "100%", height: "calc(100vh - 77px)" }}
        mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
        // mapStyle="https://api.maptiler.com/maps/streets/style.json?key=bi8Puku2ONUnhg5Kx6Yh" // 3 d bug lag
        maxBounds={surabayaLimit}
        onClick={handleMapClick} 
      >
        <NavigationControl position="top-left" />
          {Events.map((event) => (
            <Marker key={event.id} longitude={event.longitude} latitude={event.latitude} onClick={() => setSelectedEvent(event)}>
              <div className="relative flex flex-col items-center cursor-pointer">
                <div className="flex gap-1 flex-wrap">
                {event.tag.map((tagName, index) => {
                  const tagData = Tags.find(t => t.name === tagName);
                  return (
                    <div 
                      key={index} 
                      className="px-3 py-1 rounded-full text-xs opacity-85 mb-1 shadow-lg"
                      style={{ 
                        backgroundColor: tagData?.color || "#999", 
                        color: tagData?.text_color || "#fff" 
                      }}
                    >
                      #{tagName}
                    </div>
                  );
                })}
                </div>
                <div className="relative bg-red-500 text-white px-3 py-1 rounded-full text-sm shadow-lg">
                  {event.name}
                  <div className="absolute left-1/2 -bottom-2 w-0 h-0 transform -translate-x-1/2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-red-500"></div>
                </div>
              </div>
            </Marker>
          ))}

           {selectedEvent && (
              <Popup
                longitude={selectedEvent.longitude}
                latitude={selectedEvent.latitude}
                onClose={() => setSelectedEvent(null)}
                closeOnClick={false}
                anchor="top"
              >
                <div className="p-3">
                  <h2 className="text-lg font-bold">{selectedEvent.name}</h2>
                  <p className="text-sm text-gray-600">{selectedEvent.desc}</p>
                  <p className="text-sm text-gray-600">📅 {selectedEvent.date}</p>

                  <div className="flex flex-wrap mt-2">
                    {selectedEvent.tag.map((tag, index) => (
                      <span key={index} className="bg-gray-200 text-gray-800 px-2 mt-1 py-1 mr-2 rounded-full text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex">
                    <a href={`https://www.google.com/maps?q=${selectedEvent.latitude},${selectedEvent.longitude}`} target="_blank" rel="noopener noreferrer"
                      className="px-3 py-1 rounded-md mr-2 mt-2 bg-blue-500 hover:bg-blue-800 text-white font-bold inline-block">
                      ➡️  Rute
                    </a>
                    <a href={selectedEvent.link_ticket} target="_blank" rel="noopener noreferrer"
                      className="px-3 py-1 rounded-md mt-2 bg-indigo-500 hover:bg-indigo-800 text-white font-bold inline-block">
                      Get Ticket
                    </a>
                  </div>
                </div>
              </Popup>
            )}
      </Map>

      <button
        onClick={moveToMyLocation}
        className="absolute bottom-16 right-4 bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition z-50"
      >
        📍 My Location
      </button>
    </div>
  );
};

export default MapPages;
