const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/api',
        createProxyMiddleware(
            {
                target: 'http://www.example/ipad/api',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/"
                },
            }));
}
// http://localhost:3000/api/foo/bar -> http://hvrte.gambition.cn/ipad/api/foo/bar