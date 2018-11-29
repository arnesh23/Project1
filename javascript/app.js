
    $(document).ready(function () {
      jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
          options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
      });
       
        
        console.log(hello);
        var zip ; 
        var artistName; 
        var songName; 

        // Construct your query URL here using the values the user gave us.
        queryURL = 'https://itunes.apple.com/search?term=jack+johnson';

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          // When dealing with a new API, always console log the response. 
          // This helps immensely with understanding what information is actually given to you
          console.log(response)


        
    
      console.log("hello");
      //console.log(artist);
      /*var zip = ;
      var song = ;

        var paid ; // Grab the value of the #paid dropdown
        var eventName  ; // Grab the value of the #eventName input
        var location ; // Grab the value of the #location input

        // Construct your query URL here using the values the user gave us.
        queryURL = "https://itunes.apple.com/search?term=the+doors";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          // When dealing with a new API, always console log the response. 
          // This helps immensely with understanding what information is actually given to you
          response = JSON.parse(response);
          //console.log(JSON.parse(response));
          
          console.log(response.);

          // Display the results in the appropriate element on the DOM
          
        })
        */
      })
    })
  
