app.constant("TOKEN", "200000");

app.factory('tokenFactory', ['TOKEN', function (TOKEN) {
	return {
		token: 'MYTOKEN' + TOKEN
	}; 
}]);

