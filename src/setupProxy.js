const proxy = require('http-proxy-middleware');

// react app 에서 
// localhost:3000/api/* 로 요청을 보내면 프록시가 동작하여 
// localhost:3001/api/* 로 요청을 보냄
module.exports = app => {
    app.use(
        proxy('/api', {
            target: 'http://localhost:3001/'
        })
    )
}