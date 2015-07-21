var count = 0;

var promisable = function(resolve, reject){
	setTimeout(function(){
		resolve('Working');
	}, 2000);
};

var firstPromise = new Promise(promisable);


function thenable(result){
	console.log('| ', count, ' - ', result);
	count++;
	return new Promise(promisable);
};
function resetable(result){
	count = 0;
	return new Promise(promisable);
}


function thenableloop(result){
	console.log('*  ', count, ' - ', result);
	count++;
	if(count < 6) { 
		return new Promise(promisable).then(thenableloop); 
	} else {
		console.log('Done');
	}
};

firstPromise.then(thenable).then(thenable).then(resetable).then(thenableloop);