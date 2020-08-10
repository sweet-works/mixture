const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
    ctx.body = 'Hello World';
    await next();
});
app.use(router.routes())
app.listen(3000, () => {
    console.log('http://localhost:3000');
});