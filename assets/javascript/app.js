// Genre to Cuisine Mapping
genreTypes = {numofGenres:32,
              "Blues":  "Mexican",
              "Comedy": "Italian",
              "Childrens's Music":"Ice Cream",
              "Classical":"Italian",
              "Country": "Indian",
              "Electronic": "Cajun",
              "Holiday": "Soul",
              "Opera": "Thai",
              "Singer/Songwriter": "Greek",
              "Jazz": "Chinese", 
              "Latino":"Lebanese",
              "New Age":"Japanese",
              "Pop":"American",
              "R&B/Soul":"Moroccan",
              "Soundtrack":"Mediterranean",
              "Dance":"French",
              "Hip-Hop/Rap":"Spanish",
              "World":"German", 
              "Alternative":"Korean",
              "Rock":"Vietnamese",
              "Christian & Gospel":"Teriyaki",
              "Vocal":"Caribbean",
              "Reggae":"Deli",
              "Easy Listening":"British",
              "J-Pop":"Bubble Tea",
              "Enka":"Dim Sum",
              "Anime":"Juices",
              "Kayokyoku":"Vegeterian",
              "Fitness & Workout":"Filipino",
              "K-Pop":"Sushi",
              "Karaoke":"Tex-Mex",
              "Instrumental":"Thai"}
// List of Cuisines
var cuisineList = [];     
var zipCode =[]

  
   
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
        
        // API Call to Itunes
        $.ajax({
          url: queryURL_Itunes,
          method: "GET"
        }).then(function(response) {

          
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
          
          cuisineList.push(genreTypes[genre]);

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
   



