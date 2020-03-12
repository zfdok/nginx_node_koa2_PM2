const Router = require('koa-router')

const router = new Router();

router
  .get('/', async (ctx, next) => {
    ctx.body = 'index'
  })
  .get('/api/test', async (ctx, next) => {
    ctx.body = {
      msg: 'hahahaha',
      url: ctx.url,
      query:ctx.query,
      queryStr:ctx.querystring
    }
  })
  .get('*', async (ctx, next) => {
    ctx.body = '404 not fxxking found~~!!'
  })
module.exports = router
