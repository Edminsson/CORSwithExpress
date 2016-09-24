# CORSwithExpress

Simple Express site that sets some headers required for CORS to work.
Access-Control-Allow-Origin can be set to "*" in some simple cases but when withCredentials is 
used it must be the same as the requests origin header.
Also Access-Control-Allow-Credentials must be se to true.
