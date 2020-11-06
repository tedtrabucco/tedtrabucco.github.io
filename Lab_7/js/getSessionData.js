// Get saved data from sessionStorage
let title = sessionStorage.getItem("title"); // Saves to local variable
let lat_max = sessionStorage.getItem("latMax");
let lat_min = sessionStorage.getItem("latMin");
let lon_max = sessionStorage.getItem("lonMax");
let lon_min = sessionStorage.getItem("lonMin");

// Set the corresponding <p> elements in the GetSessionData.html page with the values from above

//Grabs the elements from the GetSessionData.html page
const titl = document.getElementById("title"); 
const latMax = document.getElementById("lat_max");
const latMin = document.getElementById("lat_min");
const lonMax = document.getElementById("lon_max");
const lonMin = document.getElementById("lon_min");

// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
titl.innerText = title;
latMax.innerText = lat_max;
latMin.innerText = lat_min;
lonMax.innerText = lon_max;
lonMin.innerText = lon_min;

/*MORE EFFICIENT WAY TO DO THIS, ONLY DID ABOVE TO FOLLOW INSTRUCTIONS:
//NEEDED TO LINK TO GETSESSIONDATA.HTML PAGE
const title = document.getElementById("title"); 
const lat_max = document.getElementById("lat_max");
const lat_min = document.getElementById("lat_min");
const lon_max = document.getElementById("lon_max");
const lon_min = document.getElementById("lon_min");

//THIS PULLS DIRECTLY FROM SESSION SO I DO NOT HAVE TO CREATE LOCAL VARIABLE
title.innerText = sessionStorage.getItem("title");
lat_max.innerText = sessionStorage.getItem("latMax");
lat_min.innerText = sessionStorage.getItem("latMin");
lon_max.innerText = sessionStorage.getItem("lonMax");
lon_min.innerText = sessionStorage.getItem("lonMin");
*/
