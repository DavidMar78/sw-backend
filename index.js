const express = require('express');

const app = express();

app.get('/api/people', async (req, res) => {

    const response = await fetch('https://swapi.info/api/people');
    const peopleData = await response.json();

    res.json(
        peopleData
    )

    res.send('Backend SW OK');
});

app.listen(3001, () => {
    console.log('Server running on http://192.168.1.59:3001');
});