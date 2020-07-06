# NodeJS
### app.METHOD
https://expressjs.com/en/4x/api.html#app.METHOD


Express supports methods that correspond to all HTTP request methods: get, post, and so on. For a full list, see app.METHOD.
There is a special routing method, app.all(), used to load middleware functions at a path for all HTTP request methods.
For example, the following handler is executed for requests to the route “/secret” whether using GET, POST, PUT, DELETE, 
or any other HTTP request method supported in the http module.


#  important route parameters 

Route parameters
Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

```javascript
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
```


```javascript

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
});



```

Here are some examples of route paths based on string patterns.

This route path will match acd and abcd.

app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})

##### https://expressjs.com/en/guide/routing.html

``` javascript
app.get('/', function (req, res) {
  res.send('root')
})
//This route path will match requests to /about.

app.get('/about', function (req, res) {
  res.send('about')
})
//This route path will match requests to /random.text.

app.get('/random.text', function (req, res) {
  res.send('random.text')
})
//Here are some examples of route paths based on string patterns.

//This route path will match acd and abcd.

app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})
//This route path will match abcd, abbcd, abbbcd, and so on.

app.get('/ab+cd', function (req, res) {
  res.send('ab+cd')
})
//This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.

app.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
})
//This route path will match /abe and /abcde.

app.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e')
})
//Examples of route paths based on regular expressions:

//This route path will match anything with an “a” in it.

app.get(/a/, function (req, res) {
  res.send('/a/')
})
//This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.

app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})
