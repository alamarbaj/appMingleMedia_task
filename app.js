const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const indexRouter = require('./routes/indexRoutes')
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());


app.use('/', indexRouter)
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
