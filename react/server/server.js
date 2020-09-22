var Koa = require('koa');
var Router = require('koa-router');
var serve = require('koa-static');
var views = require('koa-views');
var path = require('path');
var webpack = require('webpack');
var compress = require('koa-compress');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');
var webpackHotMiddleware = require('koa-webpack-hot-middleware');
var devConfig = require('../webpack/webpack.dev');
// var logger = require('./log/logger');
var envConfig = require('../env-config');
// var config = require('../config');

// 端口设置
var PORT = envConfig.port || 8080;

var app = new Koa();
var router = new Router();

var options = {threshold: 2048};
app.use(compress(options));
app.use(router.routes()).use(router.allowedMethods());

// 开发环境启用devserver
if (!process.env.DEPLOY_ENV) {
    // 不同环境选用不同webpack配置
    var compile;
    compile = webpack(devConfig);
    app.use(webpackDevMiddleware(compile, {
        'noInfo': true,
        'publicPath': devConfig.output.publicPath,
        'stats': {
            'colors': true
        }
    }));
    app.use(webpackHotMiddleware(compile));
}
// app.use(views(path.join(__dirname, config.dirname), {
//     'extension': 'html'
// }));

// response
app.use(async(ctx) => {
    await ctx.render('index');
});

router.get('/sweet', function(ctx, next) {
    // ctx.status = 500;
    let data = {
        success: true,
        status: 200,
        data: {
            code:1,
            name: '王耀杰',
            age: 18
        }
    }
    ctx.body = data;
    // return;
    // ctx.body({king:80})
    next()
});

router.all('/authorization', async(ctx, next) => {
    await next();
});
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

// error
app.on('error', (err, ctx) => {
    // if (ctx.request.url !== '/__webpack_hmr' && ctx.request.url.indexOf('hot-update.json') < 0) {
    //     logger.debug('------------------------------------------');
    //     logger.error('错误信息请求地址:', ctx.request.url);
    //     logger.error('错误信息:', err);
    //     logger.debug('------------------------------------------');
    // }
});

app.listen(PORT, () => {
    console.log(`\n\n------------------------------------------------\n`);
    console.log(`正在监听: http://localhost:${PORT}`);
    console.log(`当前环境: ${process.env.DEPLOY_ENV || 'local'}`);
    console.log(`\n------------------------------------------------\n\n`);
});
