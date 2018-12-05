# Project-1

---

                      Project #1- FoodTunes
___

### This is an user interactive application that helps user to choose food based on user's song interest. Application's feature has been developed using the following technology -
 - HTML
 - CSS
 - Bootstrap
 - Javascript
 - Jquery
 - Sass 
 - Firebase database
 - AJAX/API calls

### Overview of the application -
* This application takes below two inputs from user using form
   - zipcode
   - Artist and song name
* User can add up to 5 songs to playlist.App makes call to iTunes API to check song availability and adds to playlist. 
* If song is not available, appropriate message is displayed to user.
* Based on user's song preference, application computes an algorithm  and builds cuisine list for each genre. 
* After building cuisine list, the app calls zipcode API to get latitude and longitude coordinates for the user location.
* Based on lat/lng coordinates, app makes API call to zomato  to get restaurant details based on cuisine list computed earlier.
* App uses google maps API to display maps and point the location using marker. Upon clicking on the marker, the location is zoomed in.
## Images
![FoodTunes](https://raw.githubusercontent.com/arnesh23/Project1/master/assets/images/foodTunesLogo_01.png)

![FoodTunes](https://raw.githubusercontent.com/arnesh23/Project1/saranya/assets/images/foodtunes-readme.png)


Published github link to the app - https://arnesh23.github.io/Project1


