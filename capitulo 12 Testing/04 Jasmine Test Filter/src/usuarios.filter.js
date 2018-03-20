app.filter('capitalize', function() {
    return function(inputValue) {
        if (inputValue !== undefined && inputValue !== null) {
            return inputValue.substring(0, 1).toUpperCase() + inputValue.substring(1).toLowerCase();
        }
    };
});