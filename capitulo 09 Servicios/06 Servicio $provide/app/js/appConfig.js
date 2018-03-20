/**
 * La función provider debe contener la función $get.
 */
function settingsProvider() {
    this.$get = function() {
        var title = "My AngularJS App";
        return {
            title: title
        };
    }
}

/**
 * Configuracion de nuestra aplicacion en AngularJS. 
 */
app.config(function($provide) {
    $provide.provider('globalConfig', settingsProvider)
});
