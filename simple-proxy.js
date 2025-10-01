// Simple Node.js proxy for TON site
const http = require('http');
const https = require('https');
const url = require('url');

const TARGET_URL = 'https://botmaster-25xauro62-chatbotist.vercel.app';

const server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    
    // Proxy the request to Vercel
    const targetUrl = TARGET_URL + req.url;
    
    https.get(targetUrl, (targetRes) => {
        res.writeHead(targetRes.statusCode, targetRes.headers);
        targetRes.pipe(res);
    }).on('error', (err) => {
        console.error('Proxy error:', err);
        res.writeHead(500);
        res.end('Proxy error');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
    console.log(`Proxying to: ${TARGET_URL}`);
});
