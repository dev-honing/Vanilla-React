// server.js

const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

// 'dist' 디렉토리에서 정적 파일 제공
app.use(express.static(path.join(__dirname, 'dist')));

// API 엔드포인트를 시뮬레이션하기 위한 코드
app.get('/api/data', (req, res) => {
  res.json({ message: '서버에서의 안부! (Hello from the server!)' });
});

// 'index.html' 파일을 제공하는 캐치-올 라우트
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 서버를 특정 포트에서 실행
app.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 실행 중입니다. (Server is running on port ${port})`);
});
