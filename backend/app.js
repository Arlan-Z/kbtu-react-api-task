const express = require('express');
const app = express();

const records = [
    { name: 'Arl', score: 3 },
    { name: 'lan', score: 2 },
    { name: 'gul', score: 2 },
    { name: 'Tom', score: 5 },
    { name: 'Sar', score: 4 },
    { name: 'Max', score: 6 },
    { name: 'Lia', score: 1 },
    { name: 'Ben', score: 7 },
    { name: 'Nin', score: 3 },
    { name: 'Ole', score: 8 },
    { name: 'Kat', score: 10 },
    { name: 'Dan', score: 9 },
    { name: 'Ira', score: 4 },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.get('/', (_, res) => {
    res.status(200).send(records);
});

app.post('/', (req, res) => {
    const { name, score } = req.body;

    if (!name || typeof score !== 'number') {
        return res.status(400).send('Invalid data format');
    }

    try {
        records.push({ name, score });
        return res.status(201).send({ message: 'Success' });
    } catch (ex) {
        return res.status(500).send('Internal server error');
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));