# 前端进阶全栈开发
上回个大家分享了前端进阶全栈开发接口的重要性，这回给大家介绍如何学习。
[前端进阶之困](https://juejin.im/post/5b189aa5e51d4506a65856c5)
## typescript 的价值
最近 deno 很火（一周内破万星, 不敢说后无来着, 也能说千无古人了）, 但有个小伙在 deno 项目的上发了个issue 说:"求不要更新了, 老子学不动了" 引发了争论.
我认为学不动，私下吐槽下善可，可别真别放下，技术这东西 **逆水行舟不进则退**。 
deno 很火除了作者的影响力之外, 我想就是大家对 typescript 的看好。
javascript 作为动态语言很好，但是本身是有很多不足的，作为特性来说动态性很好，但在编程阶段动态性确实编码的大敌；
- 现实的编程场景下大多数情况我们不需要过多动态性，增加类型约束能降低当前问题的复杂性:

```
function add(a, b){
  return a + b;   // 我们要考虑 a,b 是非 number 的情况。
}

function add(a:number, b:number){
  return a + b;   // 约束调用的时候必须传入 number。
} 
```
- 同样也能约束大家的编码习惯比如变量类型守恒。

```
var name = '张三';
name = 123 //编译错误

```
- typescript 能为包管理带来便利性，对于我们一些不太熟悉的包，我们使用 typescript 能很好的感知 api 跳转定位到 api 文档上看帮助提高效率；

- 更多为使用 typescript 的理由 [https://basarat.gitbooks.io/typescript/docs/why-typescript.html](https://basarat.gitbooks.io/typescript/docs/why-typescript.html)

## 进阶 typescript 全栈开发的官方示例项目
  [https://github.com/Microsoft/TypeScript-Node-Starter](https://github.com/Microsoft/TypeScript-Node-Starter)
  作为微软官方的学习推荐示例项目 TypeScript-Node-Starter 能给我们着手开始的第一手资料，里面用到的配置和使用的模块是一个非常好的学习借鉴。

### 开始准备

- 安装 Node.js [https://nodejs.org/en/](https://nodejs.org/en/) 推荐使用 LTS 长效版本
- 安装 MongoDB [https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-ubuntu](https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-ubuntu/)
- 安装 VS Code [https://code.visualstudio.com/](https://code.visualstudio.com/)

### 如何开始
- 获取代码
```
git clone --depth=1 https://github.com/Microsoft/TypeScript-Node-Starter.git <你的项目名称>
```
- 安装依赖
```
cd <你的项目名称>
npm install
```
- 配置启动你的 mongodb 
``` 
sudo mkdir -p /data/db 
sudo chmod 777 /data/db
```
- 启动 mongodb 
```
mongod
```

- 构建运行项目
```
npm run build
npm start
```
- 访问项目
http://localhost:3000

到目前为止你拥有了一个能运行的 typescript 的 nodejs 项目了。

### package.json 的内容分析
- scripts 节点 
你可以使用 npm run xxx 的形式调用 script 脚本如:
```
npm run build
```
脚本主要包含了， 启动、编译、监视、测试、复制前端资源等。

### 项目使用了 nodemon 来监视代码的修改，并重启项目。
[更多 nodemon 介绍](https://github.com/remy/nodemon#nodemon)

### 项目配置 .env 。
- 项目采用 dotenv 模块来管理 .env 你可以修改 .env.example 成你自己的配置; .env 是一个不需要编译的文本文件你可以使用这类文件来区分环境的配置差异。

### session 管理模块 connect-mongo
- 项目采用了 connect-mongo 模块把服务端的会话存储在 mongodb 上，这样避免会话过多造成的内存泄漏问题。

### express-flash 
- 一个用户提示消息的会话小模块、用过一次就清除 session , 可以方便用在各种消息泡上。

### lusca 模块
- 用户保护 xss 攻击保护

### expressValidator 数据验证模块
这个模块为 express 增加断言能力
```
  req.assert("name", "Name cannot be blank").notEmpty();
  req.assert("email", "Email is not valid").isEmail();
  req.assert("message", "Message cannot be blank").notEmpty();
```

### bluebird 模块
对于 mongoose 来说直接用原生的 promise 也是可以的, 但 bluebird 性能会更好一些。

### mongo schema 定义
本示例项目的 schema 直接定义在 model 上
见代码 [https://github.com/Microsoft/TypeScript-Node-Starter/blob/master/src/models/User.ts](https://github.com/Microsoft/TypeScript-Node-Starter/blob/master/src/models/User.ts)

实际的项目可能更复杂建议这么用 [https://github.com/vellengs/typerx-blogs/blob/master/ts-mongoose.md](https://github.com/vellengs/typerx-blogs/blob/master/ts-mongoose.md)

最后仍然安利下我项目 typerx (typerx 也学习自 TypeScript-Node-Starter, 同时本文也是 typerx 的附属学习资料)
[项目地址](https://github.com/vellengs/typerx), 欢迎交流