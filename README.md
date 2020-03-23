##
1. cnpm install

![image.png](https://upload-images.jianshu.io/upload_images/16670204-a7c22be1564685b4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
[https://juejin.im/post/5e5a281be51d4526d059596d](https://juejin.im/post/5e5a281be51d4526d059596d)
#第一步 写一个NODE服务(本地)
##1. 新建工程
(1). 新建一个工程文件夹,用vsCode打开文件夹
```
npm init -y
```
(2). 在github上建一个空项目
(3). 本地终端中执行
```
git init
```
(4).用git命令将本地工程与github关联
(5). 新建文件.gitignore 添加忽略git的文件夹node_modules
(6).npm安装koa
(7).npm安装koa-router
(8). 写个readme
(9). 将git命令将代码与github同步
##2. 写一个简单的测试用服务
新建一个index.js写入:
```
const Koa = require('koa');
const app = new Koa();
const router = require('./api/test')
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
app.use(router.routes())
app.listen(3000);
```
新建一个 api/test.js 写入
```
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
module.exports = router
```
写完之后目录如下:
![](https://upload-images.jianshu.io/upload_images/16670204-2c633fcf7b47d445.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
写完之后请git一下
#第二步 服务器安装nodejs和pm2
centerOS安装nodejs
[https://blog.csdn.net/u014726163/article/details/82837125](https://blog.csdn.net/u014726163/article/details/82837125)
国内npm慢,可以用cnpm代替
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
#第三步 安装git ,把项目拉到服务器 或者FTP
```
yum -y install git
```
服务器cd到home
执行
```
git clone  项目地址
```
#第四步 尝试启动服务
cd 到工程中
1.安装依赖
```
cnpm install
```
2. 运行起服务
```
node index.js
```
3.尝试服务器本地访问
新开一个终端
```
curl http://127.0.0.1:3000
```
![](https://upload-images.jianshu.io/upload_images/16670204-f1bb49d4096cd89f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#第五步 PM2守护进程
pm2是一个进程管理工具,可以用它来管理你的node进程，并查看node进程的状态，当然也支持性能监控，进程守护，负载均衡等功能
[https://www.douban.com/note/314200231/](https://www.douban.com/note/314200231/)
1. 启动PM2
```
pm2 start index.js -i max -n myapp1
```
![](https://upload-images.jianshu.io/upload_images/16670204-3fcab323bfa459a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

启动后就可以访问了
如果想远程访问,请去服务器安全组打开对应的端口
2. 常用命令
```
查看服务
pm2 list

杀死所有进程
pm2 delete all

监视管理进程
pm2 monit

查看日志
pm2 log

全部启动
pm2 start all

全部停止
pm2 stop all

全部重启
pm2 restart all

0秒停机重启
pm2 reload all
```
![监视管理进程](https://upload-images.jianshu.io/upload_images/16670204-c23a71371dcb44df.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![日志](https://upload-images.jianshu.io/upload_images/16670204-88e5a09fa3e11d40.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
# 第六步 安装nginx 配置nginx反向代理
```
yum install nginx
```
####1. 配置反向代理