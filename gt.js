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
	

	var latitude = 1.23909230
	var longitude = 55.578578
          // Add marker to the map
        var marker = L.marker([latitude, longitude],{icon: pIcon}).addTo(map);
        marker.bindPopup(`Latitude: ${latitude}<br>Longitude: ${longitude}`).openPopup();

        // Optionally, center the map on the marker
        map.setView([latitude, longitude], 8);




	

    
