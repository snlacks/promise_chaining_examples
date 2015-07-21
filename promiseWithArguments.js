var count = 0;


var arguablePromisable = function(arg, resolve, reject){
	setTimeout(function(){
		resolve(arg);
	}, 2000);
};

var thirdPromise = new Promise(arguablePromisable.bind(undefined, 'Custom String'));

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

thirdPromise
	.then(callbackable.bind(undefined, arguablePromisable.bind(undefined, 'Custom String')))
	.then(thenable);