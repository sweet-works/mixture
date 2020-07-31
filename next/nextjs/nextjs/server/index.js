const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
// 判断环境
const dev = process.env.NODE_ENV !== 'production'
// const dev = process.env.NODE_ENV === 'production';
const app = next({ dev }) ;
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = new Koa();
    const router = new Router();

    router.get('/router/:id', async(ctx) => {
        const id = ctx.params.id;
        await handle(ctx.req, ctx.res, {
            pathname: '/router',
            query: {
                id
            }
        })
    })
    server.use(router.routes())
    server.use(async (ctx, next) => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false;
    })
    server.listen(3000, () => {
        console.log('server is running at http://localhost:3000');
    }) 
})

