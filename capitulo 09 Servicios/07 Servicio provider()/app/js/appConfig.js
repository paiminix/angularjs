/**
 * La función provider debe contener la función $get.
 */
function settingsProvider() {
    var title = "My AngularJS App";

    this.setTitle = function (value) {
        title = value;
    }

    this.$get = function() {
        return {
            title: title
        };
    }
}


app.provider('globalConfig', settingsProvider)

app.config(function(globalConfigProvider) {
    // Cambiemos el titulo
    globalConfigProvider.setTitle("Usuarios App");
});


