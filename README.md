# CORSwithExpress

Simple Express site that sets some headers required for CORS to work.
Access-Control-Allow-Origin can be set to "*" in some simple cases but when withCredentials is 
used it must be the same as the requests origin header.
Also Access-Control-Allow-Credentials must be se to true.

When using token based authentication preflighted CORS must be handled.
That means responding to the OPTIONS request and making sure that Authorization is
in the Access-Control-Allow-Headers.  

##Ajax-anrop med withCredentials

var settings = {
    url: 'http://localhost:5000/data/animal.json',
    type: 'GET',
    dataType: 'json',
    xhrFields: { withCredentials: true },
    success: (json) => {
        console.log('OK', json);
    }
};
$.ajax(settings);

##Ajax-anrop med token-based-authentication

var settings = {
    url: 'http://localhost:5000/data/animal.json',
    type: 'GET',
    dataType: 'json',
    beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + "thisIsTheToken");
    },
    success: (json) => {
        console.log('OK', json);
    }
};
$.ajax(settings);

