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

      //Per Click run the block of code
      $("#searchButton").on("click", function (event) {
        event.preventDefault()

        if(i === 6)
          i = 1;

        //initialize variables
        var zip = $("#inputZipCode").val();
        var artist = $("#inputArtist").val();
        var song = $("#inputSong").val();

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
      //}
        
      return cuisineList;

      })
    })
   



