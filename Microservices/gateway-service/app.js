const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/api/users', createProxyMiddleware({ target: 'http://user-service:3000', changeOrigin: true }));
app.use('/api/products', createProxyMiddleware({ target: 'http://product-service:3001', changeOrigin: true }));
app.use('/api/orders', createProxyMiddleware({ target: 'http://order-service:3002', changeOrigin: true }));

app.listen(3003, () => console.log('Gateway Service running on port 3003'));
