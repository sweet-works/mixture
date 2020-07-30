const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
// 判断环境
const dev = process.env.NODE_ENV === 'production';
const app = next({ dev }) ;
const handle = app.getRequestHandler();

// app.prepare().then(() => {
//     const server = new Koa();
//     server.use(async (ctx, next) => {
//         await handle(ctx.req, ctx.res)
//         ctx.respond = false;
//     })
//     server.listen(3000, () => {
//         console.log('http://localhost:3000');
//     }) 
// })
const server = new Koa();
const router = new Router();
router.get('/json', (ctx) => {
    ctx.body = {success: true}
    ctx.set('Content-Type', 'application/json')
})
router.get('/test', (ctx) => {
    ctx.body = '<h1>koa-router</h1>'
})
// 中间件
server.use(async (ctx, next) => {
    ctx.body = `<h1>Koa server</h1>${ctx.path}`
    await next();
})
server.use(router.routes())
server.listen(3000, () => {
    console.log('http://localhost:3000');
}) 