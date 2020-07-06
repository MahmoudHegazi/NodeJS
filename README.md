# NodeJS
### app.METHOD
https://expressjs.com/en/4x/api.html#app.METHOD


```javascript

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
});



```
