//===============================================================    
//                Feature-1 : display song list   
//===============================================================  


// Genre to Cuisine Mapping
// Genre to Cuisine Mapping
var genreTypes = {
  numofGenres: 32,
  "Blues": "Mexican",
  "Comedy": "Italian",
  "Childrens's Music": "Ice Cream",
  "Classical": "Italian",
  "Country": "Indian",
  "Electronic": "Cajun",
  "Holiday": "Soul",
  "Opera": "Thai",
  "Singer/Songwriter": "Greek",
  "Jazz": "Chinese",
  "Latino": "Lebanese",
  "New Age": "Japanese",
  "Pop": "American",
  "R&B/Soul": "Moroccan",
  "Soundtrack": "Mediterranean",
  "Dance": "French",
  "Hip-Hop/Rap": "Spanish",
  "World": "German",
  "Alternative": "Korean",
  "Rock": "Vietnamese",
  "Christian & Gospel": "Teriyaki",
  "Vocal": "Caribbean",
  "Reggae": "Deli",
  "Easy Listening": "British",
  "J-Pop": "Bubble Tea",
  "Enka": "Dim Sum",
  "Anime": "Juices",
  "Kayokyoku": "Vegeterian",
  "Fitness & Workout": "Filipino",
  "K-Pop": "Sushi",
  "Karaoke": "Tex-Mex",
  "Instrumental": "Thai"
}
// List of Cuisines
var cuisineList = [];
var zipCode = []
var zip;


$(document).ready(function () {

  var config = {
    apiKey: "AIzaSyAAzxr-fVInN1g66qq3rnEPjxl0reTeCpk",
    authDomain: "arnesh-dd4c8.firebaseapp.com",
    databaseURL: "https://arnesh-dd4c8.firebaseio.com",
    projectId: "arnesh-dd4c8",
    storageBucket: "arnesh-dd4c8.appspot.com",
    messagingSenderId: "147310979184"
  };

  firebase.initializeApp(config);

  var database = firebase.database();
  $(".card").hide();
  //This block of code eliminates the eliminatation the CORS restriction
  jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  var numOfPlaylists = 1;

  console.log(genreTypes);
  /*var zipcodeapikey = 
  "BQB45i05VjZM8HY2Ij6gmvUHi2sQoSH8Fj7AV6x7uVmhGq6BeNDC0aZku2ikC1KE";
  var zoomatoapikey = "c1a4300483e0e00f83696611ea2ab876"
  var lattitude;
  var longitude;
  */

  //Per Click run the block of code
  $("#searchButton").on("click", function getCuisine(event) {
    event.preventDefault()

    if (numOfPlaylists === 6)
      numOfPlaylists = 1;

    //initialize variables


        zip = $("#inputZipCode").val();
    var artist = $("#inputArtist").val();
    var song = $("#inputSong").val();
    var songExists = false;

    zipCode.push(zip);
    firebase.database().ref('ZipCodes/' + "ZipCode").set({
      ZipCode: zipCode
    });

    // Check if the artist/zip/song tabs are empty
    // put Modal here instead of pop up 
    //if(zip ==="" || artist ==="" || song === "")
    //  console.log("Empty tab present");
    //else
    //{
    // Construct your query URL here using the values the user gave us.
    queryURL_Itunes = 'https://itunes.apple.com/search?term=' + artist;
    //queryURL_ZipCode = 'https://www.zipcodeapi.com/rest/'+zipcodeapikey+"/info.json/"+zip+"/degrees";

    // API Call to Itunes
    $.ajax({
      url: queryURL_Itunes,
      method: "GET"
    }).then(function (response) {


      //Parsing the response to JSON OBject
      response = JSON.parse(response);
      console.log(response);


      for (var i = 0; i < response.resultCount; i++) {
        var trackNameResponseLowCase = response.results[i].trackName.toLowerCase();
        if ((trackNameResponseLowCase).includes(song.toLowerCase())) {
          console.log("Song Name:" + song);
          console.log("Song Exist");
          console.log((response.results[i].trackName));
          console.log(i);


          var genre = response.results[i].primaryGenreName;
          var trackName = response.results[i].trackName;

          var imgTag = $('img');


          console.log(response);
          artistFromList = response.results[0].artistName;
          console.log(artistFromList);
          var imgSrc = response.results[numOfPlaylists].artworkUrl60;
          console.log(imgSrc);


          var random = Math.floor(Math.random() * 32);
          //console.log("Random"+random);
          //console.log(genreTypes[random].genre);
          //console.log(genreTypes[random]);

          cuisineList.push(genreTypes[genre]);

          console.log("CuisineList:" + cuisineList);
          console.log(i);

          $("#row" + numOfPlaylists + "Data").text(trackName + " " + artistFromList);
          $("#row" + numOfPlaylists + "Image").attr("src", imgSrc);

          // console.log("i"+i);
          console.log(numOfPlaylists)
          numOfPlaylists++;
          songExists = true;
          break;
        }
        else
          console.log(i)
      }
      if (songExists === false)
        $('#alertModal').modal('show')
        getCoordinates(zip);
    })
    //

  })
})


//===============================================================    
//                Feature-2 : Display restaurants    
//===============================================================     

var cuisines = ["Mexican", "Italian", "Indian", "Chinese"];
//var getZipCode = "95132";
var locCoordinates = {};
//      var locCoordinates = getCoordinates(getZipCode);
//    // get user input - uncomment before merging to master
//       $("#inputZipCode").on("click", function(){
//             getZipCode = $("#userZip").val();
//       })

// repeated - delete before merging to master
jQuery.ajaxPrefilter(function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});
// add google maps url 


function getCoordinates(inpZip) {
  // Make AJAX call to zipcode api to get lat/lng coordinates for zipcode
  //query - https://www.zipcodeapi.com/rest/fBPSu90menTPyiiwthbSbkzQ6zmVcDelh42nY2CUtRbEkaOJ4u16dV3l3XWoEaEE/info.json/95133/degrees
  //key2 - BQB45i05VjZM8HY2Ij6gmvUHi2sQoSH8Fj7AV6x7uVmhGq6BeNDC0aZku2ikC1KE
  var zipAPIKey = "sXuRDF15cKTmcNzSP648VSUldR2WsiDrlmy9tqLlF89ZUtXfEGMy94w9ic4qAdSM";
  var zipcodeQueryURL = "https://www.zipcodeapi.com/rest/" + zipAPIKey + "/info.json/" + inpZip + "/degrees";
  $.ajax({
    url: zipcodeQueryURL,
    method: "GET",

  }).then(function (response) {
    //      console.log(queryURL);
    // Printing the entire object to console
    console.log(response);
    console.log("latitude", response.lat);
    console.log("longitude", response.lng);
    locCoordinates.lat = response.lat;
    locCoordinates.lng = response.lng;

    getNearbyRestaurants({ lat: response.lat, lng: response.lng });


  });
}




function getNearbyRestaurants(obj) {
  // Make AJAX call to zomato api to get restaurant details
  // api key - c1a4300483e0e00f83696611ea2ab876
  // query - https://developers.zomato.com/api/v2.1/geocode?lat=37.424574&lon=-121.748382
  // Frst get lat/lng coordinates using zip to list restaurant
  //        locCoordinates = getCoordinates(getZipCode);
  //        console.log(locCoordinates);
  var getLng = obj.lng;
  var getLat = obj.lat;
  var zomatoQueryURL = "https://developers.zomato.com/api/v2.1/geocode?lat=" + getLat + "&lon=" + getLng;


    $.ajax({
      url: zomatoQueryURL,
      //"https://developers.zomato.com/api/v2.1/geocode?lat=37.424574&lon=-121.748382",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "user-key": "c1a4300483e0e00f83696611ea2ab876"


      }
    }).then(function (response) {
      console.log(response);
      console.log((response.popularity.top_cuisines));

      displayRestaurant(response);
      initMap()
    })

  }    
        
        function displayRestaurant(details) {
      // get top_cuisines from response and compare with list of cuisines from prev module
      var top_cuisines = details.popularity.top_cuisines;
      var availableCuisine = [];
      var restList = details.nearby_restaurants;
      console.log("restlist length - ", restList.length);
      for (i in cuisines) {
        for (j in top_cuisines) {
          if (cuisines[i].toLowerCase() === top_cuisines[j].toLowerCase()) {
            availableCuisine.push(cuisines[i].toLowerCase());
          }
        }
      }
      console.log(availableCuisine);
      console.log("restList", restList[0].restaurant.name);
      console.log("restList", restList[1].restaurant.name);
      console.log("restList", restList[2].restaurant.name);


      var getCardDiv = $(".card");        //$(".card-title");
      var getCardTitle = $(".card-title");
      var getCardSubTitle = $(".card-subtitle");
      var getCardText = $(".card-text");


      //for 
      for (idx = 0; idx < getCardDiv.length; idx++) {
        console.log("//=========================================//");

        console.log("length of card -", getCardDiv.length);
        console.log("restlist length - ", restList.length)
        console.log("idx - ", idx);
        $(getCardTitle[idx]).text(restList[idx].restaurant.name);
          // set data attributes
        $(getCardDiv[idx]).attr("data-lat",restList[idx].restaurant.location.latitude);
        $(getCardDiv[idx]).attr("data-lng",restList[idx].restaurant.location.longitude);
          
          
        $(getCardSubTitle[idx]).text("Cuisine : " + restList[idx].restaurant.cuisines);
        $(getCardText[idx]).text(restList[idx].restaurant.location.address);

        // $(cardTitle[idx]).text(restList[idx].restaurant.name);
        console.log(idx + "-" + restList[idx].restaurant.name);
        console.log(idx + "-" + restList[idx].restaurant.cuisines);
        console.log(idx + "-" + restList[idx].restaurant.location.address);

        console.log("//=========================================//");
      }
            $(".card").show();
    }
       
        


  //===============================================================    
  //                Feature-3 : Display  map    
  //===============================================================   
var labels = 'ABC';
var labelIndex = 0;
function initMap() {
//  var locCoord = [{ lat: 37.424574, lng: -121.748382 }, { lat: 37.6213, lng: -122.389977 }];
//  var myLatLng = { lat: 37.424574, lng: -121.748382 };
  var locCoord = [];
  
  var getLatLng = document.getElementsByClassName("card");
    for (i=0;i<getLatLng.length;i++){
        var locObj = {};
        locObj.lat = parseFloat(getLatLng[i].getAttribute("data-lat"));
        console.log("locObj.lat",locObj.lat);
        locObj.lng = parseFloat(getLatLng[i].getAttribute("data-lng"));
        console.log("locObj.lng ",locObj.lng);
        locCoord.push(locObj);
        
        console.log("inside for",locCoord);
    }
    console.log("locCoord",locCoord);
    
    
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: { lat: 37.424574, lng: -121.748382 } // set to initial value
  });

  generateMarker(locCoord);



      function generateMarker(objCoord) {
        for (i = 0; i < objCoord.length; i++) {
          addMarker(objCoord[i]);
            console.log("objCoord[i]",objCoord[i]);
        }

      }

      // Multiple markers - Add marker function 
      function addMarker(coords) {
        var marker = new google.maps.Marker({
          position: coords,
          map: map,
          title: 'Click to zoom!',
          label: labels[labelIndex++ % labels.length] 
          //              url : "https://www.google.com/maps"

        });
        marker.addListener("click", function () {
          //     window.location.href = "https://www.google.com/maps";
          map.setZoom(15);
          map.setCenter(marker.getPosition());
          //                   window.location.href = "https://www.google.com/maps";


          window.setTimeout(function () { map.setZoom(pos); }, 3000);
        })
      }

}