// Function to filter state cards based on search input
function searchStates() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const stateName = card.textContent.toLowerCase();
    card.style.display = stateName.includes(input) ? "block" : "none";
  });
}

// Initialize Google Map centered on India
function initMap() {
  const india = { lat: 20.5937, lng: 78.9629 }; // Center of India

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: india,
    styles: [  // Optional custom style for a modern look
      {
        featureType: "all",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#a2daf2" }]
      },
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{ color: "#444444" }]
      }
    ]
  });

  new google.maps.Marker({
    position: india,
    map: map,
    title: "India",
  });
}
