	const map = L.map('map').setView([51.505, -0.09], 8);

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
	
	const gtIcon = L.Icon.extend({
		options: {
			iconSize:     [50, 60],
			popupAnchor:  [-3, -76]
		}
	});

	const pIcon = new gtIcon({iconUrl: 'shield.png'});
	

	// Function to geocode postcode and add marker
    async function addMarkerFromLatLon(latitude, longitude) {

          // Add marker to the map
          var marker = L.marker([latitude, longitude],{icon: pIcon}).addTo(map);
          marker.bindPopup(`Latitude: ${latitude}<br>Longitude: ${longitude}`).openPopup();

          // Optionally, center the map on the marker
          map.setView([latitude, longitude], 13);

    }

    // Example usage:
    	addMarkerFromLatLon("01.07676, 55.04764"); 
	addMarkerFromLatLon("01.67267, 53.46546"); 
	addMarkerFromLatLon("01.6363 54.67376");
	addMarkerFromLatLon("01.23426 54.67376");


	

    
