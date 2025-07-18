	const map = L.map('map').setView([51.505, -0.09], 13);

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
    async function addMarkerFromPostcode(postcode) {
      try {
        const response = await fetch(`https://geocode.xyz/${postcode}?json=1`);
        const data = await response.json();

        if (data && data.latt && data.longt) {
          const latitude = parseFloat(data.latt);
          const longitude = parseFloat(data.longt);

          // Add marker to the map
          var marker = L.marker([latitude, longitude],{icon: pIcon}).addTo(map);
          marker.bindPopup(`Postcode: ${postcode}<br>Latitude: ${latitude}<br>Longitude: ${longitude}`).openPopup();

          // Optionally, center the map on the marker
          map.setView([latitude, longitude], 13);
        } else {
          console.error("Invalid postcode or geocoding error");
        }
      } catch (error) {
        console.error("Error fetching geocoding data:", error);
      }
    }

    // Example usage:
    	addMarkerFromPostcode("SW1H 0NB"); // Replace with your desired postcode
	addMarkerFromPostcode("PE2 8YY"); // Replace with your desired postcode
	addMarkerFromPostcode("B2 4BJ"); // Replace with your desired postcode


	

    
