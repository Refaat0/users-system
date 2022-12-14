/**
 * author: Refaat
 * this module is the starting point of the application
 */
// setup
const express = require('express');
const app = express();
const { load } = require('./utility/loader');

// $2b$12$y1x6XuYcBi.Wh.pNpJWkQuPIZfiXgR/atGyabvZJbTYu5yOsPw60y

// initialize the web application
load(app);

// hello, world 👋
app.get('/', (request, response) => {
    response.json({ msg: 'hello, world 👋' });
});

// open port
app.listen(process.env.PORT || 3000, () => {
    console.log(`listening @ http://localhost:${process.env.PORT || 3000}`);
});