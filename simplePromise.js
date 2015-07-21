var count = 0;

var promisable0 = function(resolve, reject){
	setTimeout(function(){
		resolve('Hello');
	}, 2000);
};

var basicPromise = new Promise(promisable0);

function myFirstThen(result){
	console.log(result);
}

basicPromise.then(myFirstThen);