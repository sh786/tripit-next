import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const ExploreMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const destinations = [
      { name: 'Paris', coords: [48.8566, 2.3522] },
      { name: 'New York', coords: [40.7128, -74.0060] },
      { name: 'Tokyo', coords: [35.6895, 139.6917] },
      { name: 'Sydney', coords: [-33.8688, 151.2093] }
    ];

    destinations.forEach(destination => {
      L.marker(destination.coords).addTo(map)
        .bindPopup(destination.name)
        .openPopup();
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '100vh', width: '100%' }}></div>;
};

export default ExploreMap;
