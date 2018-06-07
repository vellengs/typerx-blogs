### mongoose 与 TS 怎么搭档。
博主早期是写C# 的, 非常喜欢 linq 和 lambda 表达式的写法, 转写 node 之后原本以为同是 javascript 系的mongodb, node 下
写起来应该比 c# 更舒适才对, 然而直到 typescript 相对成熟后 通过 mongoose 的 types definition 才让我真正找回感觉。<br>
最近开源了 [typerx](https://github.com/vellengs/typerx), 所以也和大家分享下这个愉悦的用法。

### 初始化项目及安装模块

```
  npm init
```

```
npm install  mongoose bluebird --save 
npm install  @types/bluebird @types/mongoose @types/node --save-dev
```

###  创建链接字符串模块 connector.ts

```
import * as mongoose from 'mongoose';
import bluebird from 'bluebird';

export function connect(uri: string) {
    (<any>mongoose).Promise = bluebird;
    mongoose.connect(uri);
    const db = mongoose.connection;
    db.on('error', (err: any) => {
        throw new Error('unable to connect to database at ' + uri + err);
    });
}
```
### 创建 schema 

```
import { Schema, SchemaTypes as t, SchemaOptions, model } from 'mongoose';

export const ExampleSchema = new Schema({
    title: t.String,
    content: t.Mixed
},
    { timestamps: true });
```
使用 timestamps 参数可以自动维护两个时间字段


### 创建 interface

```
export class Example {
    id: string;
    title: string;
    content: string;
}

```

### 创建 database 模块

```
import { model, Document } from 'mongoose';
import { Example } from './interfaces/example.interface';
import { ExampleSchema } from './schemas/example.schema';

export const ModuleDatabase = {
    Example: model<Example & Document>('Example', ExampleSchema),
};
```

### 创建 example.service.ts

```
import { ModuleDatabase as Db } from './modules/module.database';

export class ExampleService {
    async findOneByTitle(title: string) {
        return Db.Example.findOne({ title: title }).exec();
    }
}
```

在这里敲 Db. , Db.Example. 等都能呼出相应的类型接口，非常方便。

### 创建一个调用示例 test.ts

```
import { connect } from './connector';
import { ExampleService } from './example.service';
connect('mongodb://localhost/example');

const service = new ExampleService();
service.findOneByTitle('hello').then(res => console.log('title', res.title));

```
在这里敲 res. 就能呼出 title了

示例代码 [https://github.com/vellengs/typerx-blogs](https://github.com/vellengs/typerx)

更多使用方法见 [typerx](https://github.com/vellengs/typerx)