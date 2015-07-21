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

firstPromise.then(thenable).then(thenable);