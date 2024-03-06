const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer();

app.use(express.static('build')); // 클라이언트 애플리케이션의 정적 파일 제공

app.all('/api/*', (req, res) => {
  proxy.web(req, res, { target: 'http://127.0.0.1' }); // 백엔드 서버로의 요청 전달
});

app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});