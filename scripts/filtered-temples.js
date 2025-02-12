const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "April 6, 1893",
        area: 105000,
        image: "https://example.com/images/salt-lake-temple.jpg",
    },
    {
        name: "Palmyra New York Temple",
        location: "Palmyra, New York, USA",
        dedicated: "April 6, 2000",
        area: 10200,
        image: "https://example.com/images/palmyra-temple.jpg",
    },
    {
        name: "Dallas Texas Temple",
        location: "Dallas, Texas, USA",
        dedicated: "May 4, 2002",
        area: 67000,
        image: "https://example.com/images/dallas-texas-temple.jpg",
    },
    {
        name: "Nairobi Kenya Temple",
        location: "Nairobi, Kenya",
        dedicated: "March 1, 2019",
        area: 10000,
        image: "https://example.com/images/nairobi-kenya-temple.jpg",
    },
    {
        name: "Brigham City Utah Temple",
        location: "Brigham City, Utah, USA",
        dedicated: "October 23, 2012",
        area: 12100,
        image: "https://example.com/images/brigham-city-temple.jpg",
    },
    {
        name: "San Juan Puerto Rico Temple",
        location: "San Juan, Puerto Rico",
        dedicated: "November 20, 2000",
        area: 21500,
        image: "https://example.com/images/san-juan-temple.jpg",
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    // Function to generate temple card
    function createTempleCard(temple) {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        const templeName = document.createElement("h3");
        templeName.textContent = temple.name;
        card.appendChild(templeName);

        const templeLocation = document.createElement("p");
        templeLocation.textContent = `Location: ${temple.location}`;
        card.appendChild(templeLocation);

        const templeDedicated = document.createElement("p");
        templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(templeDedicated);

        const templeArea = document.createElement("p");
        templeArea.textContent = `Area: ${temple.area} sq ft`;
        card.appendChild(templeArea);

        const templeImage = document.createElement("img");
        templeImage.src = temple.image;
        templeImage.alt = `${temple.name} Image`;
        templeImage.loading = "lazy"; // Lazy loading
        card.appendChild(templeImage);

        container.appendChild(card);
    }

    // Loop through the temples array and generate temple cards
    temples.forEach(createTempleCard);

    // Filter functionality for navigation
    const menuLinks = document.querySelectorAll(".navigation a");
    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = e.target.textContent.toLowerCase();

            // Clear the container
            container.innerHTML = "";

            // Filter temples based on the menu choice
            const filteredTemples = temples.filter(temple => {
                if (filter === "old" && new Date(temple.dedicated).getFullYear() < 1900) {
                    return true;
                }
                if (filter === "new" && new Date(temple.dedicated).getFullYear() > 2000) {
                    return true;
                }
                if (filter === "large" && temple.area > 90000) {
                    return true;
                }
                if (filter === "small" && temple.area < 10000) {
                    return true;
                }
                if (filter === "home") {
                    return true; // Show all temples
                }
                return false;
            });

            // Generate cards for filtered temples
            filteredTemples.forEach(createTempleCard);
        });
    });
});

// Footer information
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = `Last updated: ${lastModified}`;
