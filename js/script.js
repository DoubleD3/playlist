// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"God's Plan",
	"artist":"Drake",
	"mp3":"https://open.spotify.com/track/2XW4DbS6NddZxRPm5rMCeY?si=y_SG1s1BTMGGrE_dL6OLPQ",
	"image":"http://www.youredm.com/wp-content/uploads/2018/01/scaryhours.jpg",
	"songLength":"3 minutes, 18 seconds",
	"album": "Scary Hours"
}

var myPlayList = [
	{
		"title":"God's Plan",
		"artist":"Drake",
		"mp3":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image":"http://s3.amazonaws.com/hiphopdx-production/2018/01/Scary-Hours-Drake-COver-Art-620x620.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  $('body').append("<p>Song Title " + mySong.title + "</p>");
  $('body').append("<p>Artist " + mySong.artist + "</p>");
  $('body').append("<p>Artist " + mySong.image + "</p>");


function displayList(){
for( var i=0; i< myPlayList.length; i++){
 $(".songs").append(myPlayList[i].title + "<br>" + myPlayList[i].artist + "<br>" + myPlayList[i].mp3 + "<br>");   
}

  
}

function addSong(){
 var title= $("#Add_Song").val();
 var artist= $("Add_Artist").val();
 var link= $("Add_Link").val();
 var image= $("Add_Image").val();
 var add= {
 	"title": title,
 	"artist": artist,
 	"link" : link,
 	"image": image
 }
 }

function clearList(){
   $('.songs').empty();
}

function displayList(){
 for (var i = 0; i < myPlayList.length; i++){
        $('.songs').append('<p>' + myPlayList[i].title +'<p>');
        $('.songs').append('<p>' + myPlayList[i].artist +'<p>');
        $('.songs').append('<p>' + myPlayList[i].link +'<p>');
        $('.songs').append('<p>' + myPlayList[i].image +'<p>');
        
    }
}
});