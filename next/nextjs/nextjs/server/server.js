const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
// 判断环境
const dev = process.env.NODE_ENV === 'production';
const app = next({ dev }) ;
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = new Koa();
    server.use(async (ctx, next) => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false;
    })
    server.listen(3000, () => {
        console.log('http://localhost:3000');
    }) 
})
