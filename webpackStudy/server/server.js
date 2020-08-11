const Koa = require('express');
const Router = require('koa-router');
const ReactSSR = require('react-dom/server')
const serverEntry = require('../dist/server-entry.js')
const app = Koa();
const fs = require('fs')
const path = require('path')
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
// const router = new Router();
// router.get('*', async (ctx) => {
//     const appString = ReactSSR.renderToString(serverEntry);
//     ctx.body = appString;
//     next();

// })
// app.use(router.routes())
 app.use('/public', Koa.static(path.join(__dirname, '../dist')))
app.get('*', (req,res) => {
    const appString = ReactSSR.renderToString(serverEntry.default);
    res.send(template.replace('<app></app>', appString));
})

app.listen(3000, () => {
    console.log(`http://localhost:${3000}`)
})