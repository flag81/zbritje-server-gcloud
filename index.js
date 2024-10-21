const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello world.'));

app.listen(process.env.PORT, () => console.log('App is running at: http://localhost:8080'));
