const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
const Session = require('koa-session');
// 判断环境
const dev = process.env.NODE_ENV !== 'production'
// const dev = process.env.NODE_ENV === 'production';
const app = next({ dev }) ;
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = new Koa();
    const router = new Router();
    const SESSION_CONFIG = {
        'key': 'juuid'
    }
    server.keys = ['sweet develop Github app'];
    server.use(Session(SESSION_CONFIG, server))
    server.use(async (ctx, next) => {
        if (!ctx.session.user) {
            ctx.session.user= {
                name: 'sweet',
                age: 18
            }
        } else {
            console.log('ctx.session.user is ' + ctx.session.user.name)
        }
        await next();
    });
    router.get('/router/:id', async(ctx) => {
        const id = ctx.params.id;
        await handle(ctx.req, ctx.res, {
            pathname: '/router',
            query: {
                id
            }
        })
    })
    router.get('/set/user', async (ctx) => {
        ctx.session.user = {
            name: 'sweet',
            age: 18
        }
        ctx.body = 'set user success'

    })
    server.use(router.routes())
    server.use(async (ctx, next) => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false;
    })
    server.listen(3000, () => {
        console.log('server is running at http://localhost:3000');
        console.log('server is running at http://sweet.com:3000');
    }) 
})

