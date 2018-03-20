/*app.factory('crudUserFactory', function () {
	var _createUser = function (user) {
		console.log("Alta de usuario: " + JSON.stringify(user));
	};

	var _readUser = function (user) {
		console.log("Leer usuario: " + JSON.stringify(user));
	};

	var _updateUser = function (user) {
		console.log("Actualizar usuario: " + JSON.stringify(user));
	};

	var _deleteUser = function (user) {
		console.log("Borrar usuario: " + JSON.stringify(user));
	};

	return {
		create: _createUser,
		read: _readUser,
		update: _updateUser,
		delete: _deleteUser
	}; 
});
*/
app.constant("TOKEN", "QWERTY2025");

/*app.factory('crudUserFactory', ['TOKEN', function (TOKEN) {
    // public
    var token = TOKEN;

	var factory = {
		create: createUser,
		read: readUser,
		update: updateUser,
		delete: deleteUser,
		token: token
	}; 

	return factory;

	function createUser(user) {
		console.log("Alta de usuario: " + JSON.stringify(user));
	};

	function readUser(user) {
		console.log("Leer usuario: " + JSON.stringify(user));
	};

	function updateUser(user) {
		console.log("Actualizar usuario: " + JSON.stringify(user));
	};

    function deleteUser(user) {
		console.log("Borrar usuario: " + JSON.stringify(user));
	};
}]);*/


// sintaxis alternativa
function crudUserFactory(TOKEN) {
    // public
    var token = TOKEN;

	var factory = {
		create: createUser,
		read: readUser,
		update: updateUser,
		delete: deleteUser,
		token: token
	}; 

	return factory;

	function createUser(user) {
		console.log("Alta de usuario: " + JSON.stringify(user));
	};

	function readUser(user) {
		console.log("Leer usuario: " + JSON.stringify(user));
	};

	function updateUser(user) {
		console.log("Actualizar usuario: " + JSON.stringify(user));
	};

    function deleteUser(user) {
		console.log("Borrar usuario: " + JSON.stringify(user));
	};
}

app.factory('crudUserFactory', ['TOKEN', crudUserFactory]);