const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Backend SW OK');
});

app.get('/data/person', async (req, res) => {
    const response = await fetch('https://swapi.info/api/people');
    const swPersonData = await response.json();

    res.json(swPersonData)
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});