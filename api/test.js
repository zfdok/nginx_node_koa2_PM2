const Router = require('koa-router')

const router = new Router();

const wxp = {
  "data": [
    {
      "id": 5113,
      "tag": "g3",
      "name": "高音mi",
      "imgsrc": "https://s1.ax1x.com/2020/03/22/8ouf7n.jpg",
      "voice": 3,
      "sound": null
    },
    {
      "id": 5112,
      "tag": "g2",
      "name": "高音re",
      "imgsrc": "https://s1.ax1x.com/2020/03/22/8ouW0s.jpg",
      "voice": 2,
      "sound": null
    },
    {
      "id": 5111,
      "tag": "g1",
      "name": "高音do",
      "imgsrc": "https://s1.ax1x.com/2020/03/22/8ouRmj.jpg",
      "voice": 1,
      "sound": null
    },
    {
      "id": 5027,
      "tag": "dd7",
      "name": "低低音si",
      "imgsrc": "https://s1.ax1x.com/2020/03/22/8ougXQ.jpg",
      "voice": 7,
      "sound": null
    },
    {
      "id": 5026,
      "tag": "dd6",
      "name": "低低音la",
      "imgsrc": "https://s1.ax1x.com/2020/03/22/8ouc6g.jpg",
      "voice": 6,
      "sound": null
    },
    {
      "id": 5025,
      "tag": "dd5",
      "name": "低低音so",
      "imgsrc": "https://s1.ax1x.com/2020/03/22/8ou61S.jpg",
      "voice": 5,
      "sound": null
    }
  ]
}

router
  .get('/', async (ctx, next) => {
    ctx.body = 'index'
  })
  .get('/wxp',async (ctx, next) => {
    ctx.body = wxp
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
