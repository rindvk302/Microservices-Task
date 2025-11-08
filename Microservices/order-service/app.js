const express = require('express');
const app = express();
app.get('/orders', (req, res) => res.json([{ id: 1, userId: 1, productId: 1 }]));
app.listen(3002, () => console.log('Order Service running on port 3002'));
