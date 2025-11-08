const express = require('express');
const app = express();
app.get('/products', (req, res) => res.json([{ id: 1, name: 'Laptop' }]));
app.listen(3001, () => console.log('Product Service running on port 3001'));
