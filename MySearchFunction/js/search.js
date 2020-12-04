const restaurantList = document.getElementById('restaurantList');
const searchBar = document.getElementById('searchBar');
let restaurants = [];

//filters the restaurants as user types and ignores upper/lower case
searchBar.addEventListener('keyup', (i) => {
    const searchString = i.target.value.toLowerCase();
    const filteredRestaurants = restaurants.filter(restaurant => {
        return (
        restaurant.name.toLowerCase().includes(searchString) || restaurant.address1.toLowerCase().includes(searchString)
        );
    })
    console.log(filteredRestaurants);
    displayRestaurants(filteredRestaurants)
})

//loads restaurant list from json
const loadRestaurants = async () => {
    try {
        const res = await fetch('restaurants.json');
        restaurants = await res.json();
        displayRestaurants(restaurants);
    } catch (err) {
        console.error(err);
    }
};

//displays all restaurants and will provide links when finished
const displayRestaurants = (restaurants) => {
    const htmlString = restaurants
        .map((restaurant) => {
            return `
            <li class="restaurant">
                <a href="report.html">${restaurant.name}</a>
                <p><i>${restaurant.address1}</i></p>
            </li>
        `;
        })
        .join('');
        restaurantList.innerHTML = htmlString;
};

//Starts loading the functions
loadRestaurants();