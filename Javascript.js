const cityPlaces = {
    Mumbai: {
        trending: ["Gateway of India", "Marine Drive"],
        unexplored: ["Juhu Beach", "Elephanta Caves", "Powai Lake"],
        all: ["Gateway of India", "Marine Drive", "Juhu Beach", "Elephanta Caves", "Powai Lake"]
    },
    Thane: {
        trending: ["Upvan Lake"],
        unexplored: ["Yeoor Hills"],
        all: ["Upvan Lake", "Yeoor Hills", "Talao Pali"]
    },
    Mahabaleshwar: {
        trending: ["Mapro Garden"],
        unexplored: [],
        all: ["Mapro Garden", "Lion's Point"]
    },
    Lonavala: {
        trending: ["Wax Museum", "Bhushi Dam"],
        unexplored: ["Pawna Lake", "Rajmachi Fort"],
        all: ["Wax Museum", "Bhushi Dam", "Pawna Lake", "Rajmachi Fort"]
    },
    Nagpur: {
        trending: ["Deekshabhoomi"],
        unexplored: ["Futala Lake"],
        all: ["Deekshabhoomi", "Futala Lake", "Sitabuldi Fort"]
    },
    Pune: {
        trending: ["Shaniwar Wada", "Aga Khan Palace"],
        unexplored: [],
        all: ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort"]
    },
    Aurangabad: {
        trending: ["Bibi Ka Maqbara"],
        unexplored: [],
        all: ["Bibi Ka Maqbara", "Ajanta Caves", "Ellora Caves"]
    },
    Nashik: {
        trending: ["Sula Vineyards"],
        unexplored: ["Trimbakeshwar Temple", "Pandavleni Caves"],
        all: ["Sula Vineyards", "Trimbakeshwar Temple", "Pandavleni Caves"]
    }
};

const mainPage = document.getElementById('main-page');
const cityPageDiv = document.getElementById('city-page');
const cityLinks = document.querySelectorAll('.city-link');

cityLinks.forEach(link => {
    link.addEventListener('click', function() {
        const cityName = this.getAttribute('data-city');
        showCityPage(cityName);
    });
});

function showCityPage(cityName) {
    mainPage.style.display = 'none';
    cityPageDiv.style.display = 'block';
    cityPageDiv.innerHTML = `
        <h2 class="city-page-title">${cityName}</h2>
        <div class="city-options">
            <a href="#" class="city-option-link" data-category="trending">Top Trending Places</a>
            <a href="#" class="city-option-link" data-category="unexplored">Unexplored Places</a>
            <a href="#" class="city-option-link" data-category="all">All Places</a>
        </div>
        <div id="places-container"></div>
        <a href="#" class="back-button">Back to Cities</a>
    `;

    const optionLinks = cityPageDiv.querySelectorAll('.city-option-link');
    optionLinks.forEach(optionLink => {
        optionLink.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showPlaces(cityName, category);
        });
    });

    const backButton = cityPageDiv.querySelector('.back-button');
    backButton.addEventListener('click', goBack);
}

function showPlaces(cityName, category) {
    const placesContainer = document.getElementById('places-container');
    placesContainer.innerHTML = '';
    const places = cityPlaces[cityName][category];

    if (places && places.length > 0) {
        const heading = document.createElement('h3');
        heading.classList.add('places-heading');
        heading.textContent = category.charAt(0).toUpperCase() + category.slice(1).replace('all', 'All');
        placesContainer.appendChild(heading);

        const placesList = document.createElement('ul');
        placesList.classList.add('place-list');
        places.forEach(place => {
            const listItem = document.createElement('li');
            listItem.classList.add('place-item');
            listItem.textContent = place;
            placesList.appendChild(listItem);
        });
        placesContainer.appendChild(placesList);
    } else {
        const message = document.createElement('p');
        message.textContent = `No ${category.replace('all', '')} places available in ${cityName}.`;
        placesContainer.appendChild(message);
    }
}

function goBack() {
    cityPageDiv.style.display = 'none';
    mainPage.style.display = 'block';
}