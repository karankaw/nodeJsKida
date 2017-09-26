var soap = require('soap');
var pd = require('pretty-data').pd;

var url = 'http://www.webservicex.com/globalweather.asmx?wsdl';

var args = {
    CountryName: 'India'
};
soap.createClient(url, function (error, client) {
    if (error) {
        console.log('Error Occured while generating Client');
    }
    //     console.log(client);
    //     client.describe();
    client.GetCitiesByCountry(args, function (err, result) {
//        console.log();
        console.log(pd.xml(result.GetCitiesByCountryResult));
    });
});
