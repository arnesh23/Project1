
// Genre to Cuisine Mapping
genreTypes = {"Blues":  "Mexican",
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
// List of G
var cuisineList = [];       
  
   
   $(document).ready(function () {

      //This block of code eliminates the eliminatation the CORS restriction
      jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
          options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
      });

      var i = 1;
      /*var zipcodeapikey = 
       "BQB45i05VjZM8HY2Ij6gmvUHi2sQoSH8Fj7AV6x7uVmhGq6BeNDC0aZku2ikC1KE";
      var zoomatoapikey = "c1a4300483e0e00f83696611ea2ab876"
      var lattitude;
      var longitude;
        */

      //Per Click run the block of code
      $("#searchButton").on("click", function (event) {
        event.preventDefault()



        //initialize variables
        var zip = $("#inputZipCode").val();
        var artist = $("#inputArtist").val();
        var song = $("#inputSong").val();
        

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
          

          var genre = response.results[0].primaryGenreName;
          trackname = response.results[0].trackName;
           
          cuisineList.push(genreTypes[genre]);
          console.log("genreList:"+cuisineList);
        
        })
        
      
      return cuisineList;

      })
    })
   



