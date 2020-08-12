const Koa = require('express');
const ReactSSR = require('react-dom/server')
const serverEntry = require('../dist/server-app.js')
const app = Koa();
const fs = require('fs')
const path = require('path')
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
app.use('/public', Koa.static(path.join(__dirname, '../dist')))
app.get('*', (req,res) => {
    const appString = ReactSSR.renderToString(serverEntry.default);
    res.send(template.replace('<app></app>', appString));
})

app.listen(3000, () => {
    console.log(`http://localhost:${3000}`)
})