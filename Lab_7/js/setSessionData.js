const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busroute").value; // grabs the busroute number after button is clicked

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) { //ensures not blank/undefined
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute; // defines where to get route info from
    
    fetch(busRouteURL) //grabs info from api
      .then((response) => { //response is placeholder, can be anything
        return response.json(); 
      })
      .then((route) => {  //route is placeholder
        let title, latMax, latMin, lonMax, lonMin; //defines elements 
        
        if (typeof route.title !== "undefined") {
          sessionStorage.setItem("title", route.title);   //the following syntax sets website wide values for these, remember route is
          sessionStorage.setItem("latMax", route.lat_max); //placeholder from line 13
          sessionStorage.setItem("latMin", route.lat_min);
          sessionStorage.setItem("lonMax", route.lon_max);
          sessionStorage.setItem("lonMin", route.lon_min);

          message =
            sessionStorage.getItem("title") +
            " <br>Lat max : " +
            sessionStorage.getItem("latMax") +
            " <br>Lat min : " +
            sessionStorage.getItem("latMin") +
            " <br>Lon Max : " +
            sessionStorage.getItem("lonMax") +
            " <br>Lon Min :" +
            sessionStorage.getItem("lonMin");
            
      }
      else {
        message = "No bus info available"
      }
      main.innerHTML = "Bus Route Info: " + message;})  //returns the HTML for the message (line 23), allowing it to display
      .catch((err) => {   //error checking
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
