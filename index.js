const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Backend SW OK');
});

app.get('/data/all', async (req, res) => {
    const response = await fetch('https://akabab.github.io/starwars-api/api/all.json');
    const swAllData = await response.json();

    res.json(swAllData)
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});