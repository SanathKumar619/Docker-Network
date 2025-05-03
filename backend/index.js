const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('Hello from Dockerized Node.js! This work done by Mr. Sanath Kumar'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

