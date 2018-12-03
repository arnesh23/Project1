

//===============================================================    
//                Feature-1 : display song list   
//===============================================================  




// Genre to Cuisine Mapping
genreTypes = {numofGenres:32,
              0:{"Blues":  "Mexican"},
              1:{"Comedy": "Italian"},
              2:{"Childrens's Music":"Ice Cream"},
              3:{"Classical":"Italian"},
              4:{"Country": "Indian"},
              5:{"Electronic": "Cajun"},
              6:{"Holiday": "Soul"},
              7:{"Opera": "Thai"},
              8:{"Singer/Songwriter": "Greek"},
              9:{"Jazz": "Chinese"}, 
              10:{"Latino":"Lebanese"},
              11:{"New Age":"Japanese"},
              12:{"Pop":"American"},
              13:{"R&B/Soul":"Moroccan"},
              14:{"Soundtrack":"Mediterranean"},
              15:{"Dance":"French"},
              16:{"Hip-Hop/Rap":"Spanish"},
              17:{"World":"German"}, 
              18:{"Alternative":"Korean"},
              19:{"Rock":"Vietnamese"},
              20:{"Christian & Gospel":"Teriyaki"},
              21:{"Vocal":"Caribbean"},
              22:{"Reggae":"Deli"},
              23:{"Easy Listening":"British"},
              24:{"J-Pop":"Bubble Tea"},
              25:{"Enka":"Dim Sum"},
              26:{"Anime":"Juices"},
              27:{"Kayokyoku":"Vegeterian"},
              28:{"Fitness & Workout":"Filipino"},
              29:{"K-Pop":"Sushi"},
              30:{"Karaoke":"Tex-Mex"},
              31:{"Instrumental":"Thai"}}
// List of Cuisines
var cuisineList = [];       
  
   
   $(document).ready(function () {

      //This block of code eliminates the eliminatation the CORS restriction
      jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
          options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
      });

      var i = 1;
      console.log(genreTypes);
      /*var zipcodeapikey = 
       "BQB45i05VjZM8HY2Ij6gmvUHi2sQoSH8Fj7AV6x7uVmhGq6BeNDC0aZku2ikC1KE";
      var zoomatoapikey = "c1a4300483e0e00f83696611ea2ab876"
      var lattitude;
      var longitude;
        */

//      //Per Click run the block of code
      $("#searchButton").on("click", function (event) {
        event.preventDefault()

        if(i === 6)
          i = 1;


//        //initialize variables
        var zip = $("#inputZipCode").val();
        var artist = $("#inputArtist").val();
        var song = $("#inputSong").val();

//        // Check if the artist/zip/song tabs are empty
//        // put Modal here instead of pop up 
//        //if(zip ==="" || artist ==="" || song === "")
//          //  console.log("Empty tab present");
//        //else
//        //{
//        // Construct your query URL here using the values the user gave us.
//        queryURL_Itunes  = 'https://itunes.apple.com/search?term='+artist;
//        //queryURL_ZipCode = 'https://www.zipcodeapi.com/rest/'+zipcodeapikey+"/info.json/"+zip+"/degrees";
//        
//        // API Call to Itunes
//        $.ajax({
//          url: queryURL_Itunes,
//          method: "GET"
//        }).then(function(response) {
//
//          
//         //Parsing the response to JSON OBject
//          response = JSON.parse(response);  
//          console.log(response);
//        
//          var genre = response.results[0].primaryGenreName;
//          var trackName = response.results[0].trackName;
//        
//          console.log(response);
//          artistFromList = response.results[0].artistName;
//          console.log(artistFromList);
//
//          var random = Math.floor(Math.random() * 32);
//          console.log(genreTypes[random].genre);
//          
//          cuisineList.push(genreTypes[genre]);
//
//          console.log("CuisineList:"+cuisineList);
//          console.log(i);
//          $("#row"+i+"Data").text(trackName+" "+artist);
//          i++;
//        })
//      //}
//        
//      return cuisineList;
//        
//
//      })
      
//===============================================================    
//                Feature-2 : Display restaurants    
//===============================================================     
      
      var cuisines = ["Mexican","Italian","Indian","Chinese"];
      var getZipCode = "95132";
      var locCoordinates = {};
//      var locCoordinates = getCoordinates(getZipCode);
//    // get user input - uncomment before merging to master
//       $("#inputZipCode").on("click", function(){
//             getZipCode = $("#userZip").val();
//       })
       
  // repeated - delete before merging to master
    jQuery.ajaxPrefilter(function (options) {

      //This block of code eliminates the eliminatation the CORS restriction
      jQuery.ajaxPrefilter(function (options) {
 6b1e5154b620262a40ddedae4f1a6548edb6a67e
        if (options.crossDomain && jQuery.support.cors) {
          options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
      });


      var i = 1;
      console.log(genreTypes);
      /*var zipcodeapikey = 
       "BQB45i05VjZM8HY2Ij6gmvUHi2sQoSH8Fj7AV6x7uVmhGq6BeNDC0aZku2ikC1KE";
      var zoomatoapikey = "c1a4300483e0e00f83696611ea2ab876"
      var lattitude;
      var longitude;
        */

      //Per Click run the block of code
     $("#searchButton").on("click", function (event) {
       event.preventDefault()

        if(i === 6)
          i = 1;

        //initialize variables
        var zip = $("#inputZipCode").val();
       var artist = $("#inputArtist").val();
        var song = $("#inputSong").val();

         Check if the artist/zip/song tabs are empty
         put Modal here instead of pop up 
        if(zip ==="" || artist ==="" || song === "")
            console.log("Empty tab present");
       else
        {
        // Construct your query URL here using the values the user gave us.
        queryURL_Itunes  = 'https://itunes.apple.com/search?term='+artist;
        //queryURL_ZipCode = 'https://www.zipcodeapi.com/rest/'+zipcodeapikey+"/info.json/"+zip+"/degrees";
//        
        // API Call to Itunes
        $.ajax({
          url: queryURL_Itunes,
          method: "GET"
        }).then(function(response) {

         
         //Parsing the response to JSON OBject
          response = JSON.parse(response);  
          console.log(response);
        
          var genre = response.results[0].primaryGenreName;
          var trackName = response.results[0].trackName;
        
         console.log(response);
          artistFromList = response.results[0].artistName;
          console.log(artistFromList);

          var random = Math.floor(Math.random() * 32);
          console.log(genreTypes[random].genre);
         
          cuisineList.push(genreTypes[genre]);

          console.log("CuisineList:"+cuisineList);
          console.log(i);
          $("#row"+i+"Data").text(trackName+" "+artist);
          i++;
        })
      }
      })
      
//===============================================================    
//                Feature-2 : Display restaurants    
//===============================================================     
      
      var cuisines = ["Mexican","Italian","Indian","Chinese"];
      var getZipCode = "95132";
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


    function getCoordinates(inpZip){
    // Make AJAX call to zipcode api to get lat/lng coordinates for zipcode
    //query - https://www.zipcodeapi.com/rest/fBPSu90menTPyiiwthbSbkzQ6zmVcDelh42nY2CUtRbEkaOJ4u16dV3l3XWoEaEE/info.json/95133/degrees
    //key2 - BQB45i05VjZM8HY2Ij6gmvUHi2sQoSH8Fj7AV6x7uVmhGq6BeNDC0aZku2ikC1KE
    var zipAPIKey = "sXuRDF15cKTmcNzSP648VSUldR2WsiDrlmy9tqLlF89ZUtXfEGMy94w9ic4qAdSM";
    var zipcodeQueryURL = "https://www.zipcodeapi.com/rest/"+ zipAPIKey + "/info.json/" + inpZip + "/degrees";
    $.ajax({
      url: zipcodeQueryURL,
      method: "GET",
    
    }).then(function(response) {
//      console.log(queryURL);
      // Printing the entire object to console
      console.log(response);
      console.log("latitude" ,response.lat);
      console.log("longitude" ,response.lng);
      locCoordinates.lat = response.lat;
      locCoordinates.lng = response.lng;
        
      getNearbyRestaurants({lat:response.lat,lng:response.lng});
          
        
     });
     }
    
        
        
    
    function getNearbyRestaurants(obj){
    // Make AJAX call to zomato api to get restaurant details
    // api key - c1a4300483e0e00f83696611ea2ab876
    // query - https://developers.zomato.com/api/v2.1/geocode?lat=37.424574&lon=-121.748382
    // Frst get lat/lng coordinates using zip to list restaurant
//        locCoordinates = getCoordinates(getZipCode);
//        console.log(locCoordinates);
        var getLng = obj.lng;
        var getLat = obj.lat;
        var zomatoQueryURL = "https://developers.zomato.com/api/v2.1/geocode?lat=" + getLat + "&lon=" + getLng ;
        
<<<<<<< HEAD
=======


      var numOfPlaylists = 1;
     
      console.log(genreTypes);
      /*var zipcodeapikey = 
       "BQB45i05VjZM8HY2Ij6gmvUHi2sQoSH8Fj7AV6x7uVmhGq6BeNDC0aZku2ikC1KE";
      var zoomatoapikey = "c1a4300483e0e00f83696611ea2ab876"
      var lattitude;
      var longitude;
        */

      //Per Click run the block of code
      $("#searchButton").on("click", function (event) {
        event.preventDefault()

        if(numOfPlaylists === 6)
          numOfPlaylists = 1;

        //initialize variables

        
        var zip = $("#inputZipCode").val();
        var artist = $("#inputArtist").val();
        var song = $("#inputSong").val();
        var songExists = false;

        zipCode.push(zip);
        firebase.database().ref('ZipCodes/' + "ZipCode").set({
          ZipCode:zipCode
        });

        // Check if the artist/zip/song tabs are empty
        // put Modal here instead of pop up 
        //if(zip ==="" || artist ==="" || song === "")
          //  console.log("Empty tab present");
        //else
        //{
        // Construct your query URL here using the values the user gave us.
        queryURL_Itunes  = 'https://itunes.apple.com/search?term='+artist;
        //queryURL_ZipCode = 'https://www.zipcodeapi.com/rest/'+zipcodeapikey+"/info.json/"+zip+"/degrees";


        
        $.ajax({
            url : zomatoQueryURL,
            //"https://developers.zomato.com/api/v2.1/geocode?lat=37.424574&lon=-121.748382",
            method: "GET",
            headers: {
             "content-type" : "application/json",
             "user-key": "c1a4300483e0e00f83696611ea2ab876"


          }
        }).then(function(response){
            console.log(response);
            console.log((response.popularity.top_cuisines));
            
            displayRestaurant(response);
            initMap()
        })
        
    }    
        
        function displayRestaurant(details){
           // get top_cuisines from response and compare with list of cuisines from prev module
           var top_cuisines = details.popularity.top_cuisines;
           var availableCuisine = [];
           var restList = details.nearby_restaurants;
           console.log("restlist length - ",restList.length);
           for (i in cuisines) {
               for(j in top_cuisines) {
                   if(cuisines[i].toLowerCase() === top_cuisines[j].toLowerCase()) {
                       availableCuisine.push(cuisines[i].toLowerCase());
                   }
               }
           }
           console.log(availableCuisine);
           console.log("restList",restList[0].restaurant.name);
           console.log("restList",restList[1].restaurant.name);
           console.log("restList",restList[2].restaurant.name);
           
           
            var getCardDiv =  $(".card");        //$(".card-title");
            var getCardTitle = $(".card-title");
            var getCardSubTitle = $(".card-subtitle");
            var getCardText = $(".card-text");
           
           
       
            for (idx=0;idx<getCardDiv.length;idx++){
        console.log("//=========================================//");
                
                console.log("length of card -" ,getCardDiv.length);
                console.log("restlist length - ",restList.length)
                console.log("idx - ",idx);
                $(getCardTitle[idx]).text(restList[idx].restaurant.name);
                
                $(getCardSubTitle[idx]).text("Cuisine : " +  restList[idx].restaurant.cuisines);
                $(getCardText[idx]).text(restList[idx].restaurant.location.address);
                
               // $(cardTitle[idx]).text(restList[idx].restaurant.name);
                console.log(idx + "-" + restList[idx].restaurant.name);
                console.log(idx + "-" + restList[idx].restaurant.cuisines);
                console.log(idx + "-" + restList[idx].restaurant.location.address);
               
          console.log("//=========================================//");     
            }
}
       
         getCoordinates(getZipCode);
       

//===============================================================    
//                Feature-3 : Display  map    
//===============================================================   
           })
   function initMap() {
        var locCoord = [{lat: 37.424574, lng: -121.748382},{lat:37.6213,lng: -122.389977}];
        var myLatLng = {lat: 37.424574, lng: -121.748382};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: locCoord[0] // set to initial value
        });

          generateMarker(locCoord);

          
         //Parsing the response to JSON OBject
          response = JSON.parse(response);  
          console.log(response);


          for(var i = 0; i < response.resultCount; i++){
            var trackNameResponseLowCase = response.results[i].trackName.toLowerCase();
            if((trackNameResponseLowCase).includes(song.toLowerCase())){
              console.log("Song Name:"+song);
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


          
          function generateMarker(objCoord){
              for(i=0;i<objCoord.length;i++){
                  addMarker(objCoord[i]);
              }
              
          }
          
        // Multiple markers - Add marker function 
          function addMarker(coords){
              var marker = new google.maps.Marker({
              position: coords,
              map: map,
              title: 'Click to zoom!',
//              url : "https://www.google.com/maps"
              
              });
              marker.addListener("click",function(){
             //     window.location.href = "https://www.google.com/maps";
                  map.setZoom(15);
                  map.setCenter(marker.getPosition());
//                   window.location.href = "https://www.google.com/maps";

                  window.setTimeout(function() {map.setZoom(pos);},3000);
              })
          }
        
      }
       

   
  

          console.log("CuisineList:"+cuisineList);
          console.log(i);

          $("#row"+numOfPlaylists+"Data").text(trackName+" "+artistFromList);
          $("#row"+numOfPlaylists+"Image").attr("src",imgSrc);

         // console.log("i"+i);
          console.log(numOfPlaylists)
          numOfPlaylists++;
          songExists = true;
          break; 
        }
        else
        console.log(i)
      }
      if(songExists === false)
      $('#alertModal').modal('show')
        })
      //
      return cuisineList;
      })
    })

   



