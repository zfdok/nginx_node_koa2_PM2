const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa();
const router = new Router();

router
  .get('/', async (ctx, next) => {
    ctx.body = 'index'
  })

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log("server is running at 3000");
})