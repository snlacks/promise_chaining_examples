var count = 0;

var promisable2 = function(resolve, reject){
	setTimeout(function(){
		resolve('Still Working');
	}, 2000);
};

var secondPromise = new Promise(promisable2);

function callbackable(callback, result){
	console.log('| ', count, ' - ', result);
	count++
	return new Promise(callback);
}


function thenable(result){
	console.log('| ', count, ' - ', result);
	count++;
	return new Promise(promisable);
}

secondPromise.then(callbackable.bind(undefined, promisable2)).then(thenable);