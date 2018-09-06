var movies = [
	{
		title: "In Bruges",
		rating: 5,
		watched: true
	},
	{
		title: "Frozen",
		rating: 4.5,
		watched: false
	},
	{
		title: "Mad Max Fury road",
		rating: 5,
		watched: true
	},
	{
		title: "Les Misarable",
		rating: 3,
		watched: false
	}
];

// movies.forEach(function(movie){
// 	var result = "You have ";
// 	if(movie.watched) {
// 		result += "watched ";
// 	} else {
// 		result += "not seen ";
// 	}

// 	result += "\"" + movie.title + "\" - ";
// 	result += movie.rating + " stars" ;
// 	console.log(result);
// })

// ***************************************************

movies.forEach(function(movie){
	console.log(buildString(movie));
});

function buildString(movie) {
	var result = "You have ";
	if(movie.watched) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars" ;
	return result;
}