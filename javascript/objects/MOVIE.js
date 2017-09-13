var movie=[{
	title:"In Bruges",
	hasWatched:false,
	rating:5
},
{
	title:"Logan",
	hasWatched:true,
	rating:5
}
]

movie;


for (var i=0;i<movie.length;i++){
	var result="you have";
	if(movie[i].hasWatched==true)
	{
		result +="watched";
	}
	else{
		result +="not seen";
	}

result+="\""+movie[i].title+"\"-";
result +=movie[i].rating+" stars";

	console.log(result);
}