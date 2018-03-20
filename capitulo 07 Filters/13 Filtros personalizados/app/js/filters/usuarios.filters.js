// app.filter('capitalize', function () {
//          return function (inputValue) {
//                   if (inputValue !== undefined && inputValue !== null) {
//                         return inputValue.substring(0,1).toUpperCase() + inputValue.substring(1).toLowerCase();
//                   }
//         };
// });
//  dos parametros o mas adionales
app.filter('capitalize', function () {
         return function (inputValue, capitalize) {
         	var value = inputValue || '';;
                  if (inputValue !== undefined && inputValue !== null) {
                        value = inputValue.substring(0,1).toUpperCase() + inputValue.substring(1).toLowerCase();
                  }
                  // deshabilita la capitalize
                  if (capitalize) {
                  	value = inputValue;
                  }
            return value;
        };
});
