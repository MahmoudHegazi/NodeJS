const express = require('express');
const app = express();

const cors = require('cors');
const co = app.use(cors);

const listening = () => {console.log(`running on localhost: ${port}`);};
const port = 8000;
const server = app.listen(port, listening);


