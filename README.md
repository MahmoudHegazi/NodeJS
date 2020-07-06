# NodeJS
### app.METHOD
https://expressjs.com/en/4x/api.html#app.METHOD


Express supports methods that correspond to all HTTP request methods: get, post, and so on. For a full list, see app.METHOD.
There is a special routing method, app.all(), used to load middleware functions at a path for all HTTP request methods.
For example, the following handler is executed for requests to the route “/secret” whether using GET, POST, PUT, DELETE, 
or any other HTTP request method supported in the http module.

```javascript

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
});



```
