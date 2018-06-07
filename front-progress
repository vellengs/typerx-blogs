# 前端进阶之困
最近看了不少文章和帖子， 如文：

- [前端的焦虑，你想过30岁以后的前端路怎么走吗？](https://juejin.im/post/5b124fdd5188257d6c0465da?utm_source=gold_browser_extension)
- [前端怎么一步步走向全栈呢？](https://cnodejs.org/topic/5af047150a36e5312d6ecdf0)
- [移动端入门Node.js怎么学习?](https://cnodejs.org/topic/5b164efa29e6e510415b2803)
- [前端的未来走向在哪里？](https://cnodejs.org/topic/5a4cc04cebc575dc49b270d5)
- [工作2年多的前端，现在迷茫了，如何更进一步的提升自己](https://cnodejs.org/topic/5ab1ebb5e7b166bb7b9eccaa)

身边和朋友圈也不少做前端开发的同事朋友问如何发展和提升
这里我向大家给一些建议

## 扎实基础
首先思考下手上的工作是否做得足够好了，近几年前端技术发展迅猛各种框架层出不穷，刚学会jquery还没用熟， angular 、vue 、react 已经满大街了。
gulp 还没明白怎么回事、webpack 已开始遍地开花了。眼花缭乱的技术不知道从哪里开始好。<br>
如果你还被这些困扰的话，那请静下来思考一下，技术的发展总是有规律的，学习也是有规律可循的，我的建议是，把共性和必要的技能先稳固下来，既不浪费时间，又能提高效率，如果这块还么稳固好、框架什么少看几种吧，先有一样可用的就好。<br/>
对于加强基础一个可行的方案是，从自己上手的工作开始、除了专注现学现用工作需要的框架技术外加强基础的学习，如：
- 基本的逻辑（与、或、非）
- 运算操作（加减乘除 Math 下的各种函数）
- 字符串处理 （什么大小写、编码、裁剪什么的）
- 时间处理 （日期的加减、对比、格式转换等）
- 数组、集合对象处理
可以了解学习一些基础库 如: [lodash](https://github.com/lodash/lodash)、[moment](https://github.com/moment/moment) 等、若时间有限可以看看示例有个印象回头可以查找，当然最好的方式是实践练习。

## 发展全栈的正确姿势
Javascript 生态链对于全栈有一些优势，但全栈不是贴金的标签，如果技能不够硬，必然落得个 **前端不强，后端不行** 的尴尬局面。 <br>

### 那对于前端是不是不该发展后端呢？<br>
回答当然是否定的，前端*有目的、有计划的发展后端技能*，对于系统全局观、工作协作能力提升是非常有帮助的，**另外切实让老板愿意为你加工资是非常可能的**。<br/>

### 那要如何才能是有目的、有计划的发展后端技能呢？
首先认清后端技能出发点和关键点。
- 出发点: 是主动权和话语权（可能某个后端老是鄙视你，你要的东西，说这个没办法，那个不应该，造成了你工作很被动，效率不高，出错了可能还先找你）。
- 关键点: 前后端接口 （如果你能清晰、标准、明确你要的接口，那么一些都会明朗起来）。
所以我任务，前端切入后端应该从接口开始。

### 从标准接口开始，什么样的接口才是标准的呢？
[OpenAPI  Specification](https://swagger.io/resources/open-api/)<br>
这里我为大家推荐 Swagger 标准接口 (目前有两个标准 OAS 2.0 和 OAS 3.0)<br>
Swagger 致力于接口的标准化，并为此提供了一系列的工具，方便大家对进口进行标准化。<br>

### 有什么好处呢
- 简化工作流程 (Streamline Your Workflow)。
- 自由构建 (Restraint-Free Build)
- 开放/全球化的支持 (Open & Globally Supported) <br>
我的理解是增强系统的健壮性、降低沟通成本、提高写作效率，另外接口是系统的一种抽象可以更好的从宏观把握系统。

### 标准化的接口要如何实践
这里我安利下我的开源项目 [typerx](https://github.com/vellengs/typerx), typerx 是一个轻量注解式的全栈系统、你可以使用他快速的实践接口标准的全栈开发。
- 创建接口前、我们仍旧还是要考虑接口模块的、模块化的设计能降低我们一次思考的复杂度。
  在 typerx 中我们分了 core 模块和 cms 模块。
- 接口的创建从原型开始考虑、确定接口所需的模型 model, 这个模型我们称之为 DTO(data transform object) 也就是接口的输入输出数据对象。
  [dto 的编写示例](https://github.com/vellengs/typerx/blob/master/packages/server/src/modules/core/dto)
- 有了模型之后我们就可以确定需要哪些接口方法了，编写接口的时候先不着急考虑接口的实现，我们只要先提供模型（可以建立一个按模型提供的数据mock)确保必要的接口规格描述就好，
  [account 的接口定义](https://github.com/vellengs/typerx/blob/master/packages/server/src/modules/core/account.controller.ts)
  这里我们通过直接编写代码的方式来实现文档，这样方便我们高效、可维护的接口文档（当然先完成文档再来生成代码也是可以的，不过代码能表述的永远比文档能描述的多，所以应该是有一套能够自动生成api 文档的代码来维护比较合适，过去也曾从文档开始，但文档的错漏不方便验证、而且文档维护数据模型是很累的一个事情无法动态关联重构）。
- 按要求完成了接口定义之后，你只要轻松运行
```
npm run build 
```
你就拥有标准的接口文档描述文件 swagger.json / swagger.yaml 了, 你可以使用 typerx 直接启动服务端预览接口 [localhost:4700](http://localhost:4700/docs) 或者放到在线编辑器上预览 [editor.swagger.io](http://editor.swagger.io/);
- 好了标准话的接口有了你可以保持这个接和后端的接口一致，这样就可以和后端愉快的协作了，当然如果你喜欢，直接使用 typerx 实现自己真实的后端。 

最后欢迎大家关注 [typerx](https://github.com/vellengs/typerx) 一起讨论努力进阶。
