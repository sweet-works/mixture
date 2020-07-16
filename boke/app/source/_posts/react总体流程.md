[toc]
# 1、为什么要使用react
# 2、软件开发流程
react全家桶： react + react-dom + react-router-dom + redux/react-redux/redux-thunk(redux-saga/redux-promise)(或者世界使用mobx) + element-ui/antd/antd-mobile + prop-types + axios/fetch + mock

(1)问题定义
 确定系统的目标、规模和基本任务。
(2)可行性研究
 从经济、技术、法律等方面分析确定系统是否值得开发，及时建议停止项目开发，避免人力、物力、时间的浪费。
(3)需求分析
 确定软件系统应具备的具体功能。通常用数据流图、数据字典和简明算法描述来表示系统的逻辑模型，以防止产生系统设计与用户实际需求不相符的后果。
(4)概要设计 ---- 为什么要使用vue
 确定系统设计方案、软件的体系结构、软件的模块结构。
(5)详细设计
 描述如何具体地实现系统。
(6)软件实现阶段
进行程序设计(编码)和模块测试。
(7)综合测试阶段
 通过各种类型的测试，查出软件设计中的错误并改正错误，确保软件的质量;还要在用户的参与下进行验收，才可交付使用。
(8)软件维护
 软件运行期间，通过各种必要的维护改正错误、或修改扩充功能，使软件适应环境变化，以便延长软件的使用寿命和提高软件的效益。每次维护的要求及修改步骤都应详细、准确地己录下来，并作为文档加以保存。

# 3、开发流程 - 创建项目

* 安装脚手架

> cnpm / npm i create-react-app -g
> create-react-app myapp
> cd myapp
> npm run eject
> npm run start

* 不安装脚手架

> npx create-react-app myapp
> cd myapp
> npm run eject
> npm run start

* 安装[dva](https://www.cnblogs.com/wheatCatcher/p/8485150.html)脚手架

> cnpm / npm i dva-cli -g
> dva new myapp

# 4、开发流程 - 项目配置

1、配置 @，指向src目录，方便后续的组件以及模块的导入
config/webpack.config.js
![8cdbf79e5bca9da8e56fcdbe5ff79ccc](react总体流程.resources/QQ截图20190709111026.png)

2、改造src的目录
![3eff465a4fd3bcaa4624c451237e6cc0](react总体流程.resources/QQ截图20190709111431.png)

# 5、开发流程 - 添加路由模块以及实现基本的页面构造
> cnpm i react-router-dom -S

入口找布局，布局找页面，页面找组件

1、 layout/App.jsx

> cnpm i node-sass -D

![0ec9f7cebd11652c579d344c738970d2](react总体流程.resources/QQ截图20190709112438.png)

2、实现 layout/App.scss文件 --- 布局文件

3、src/index.js入口文件处配置布局文件
![d0a584ebcb86cf4f0641484688d26440](react总体流程.resources/QQ截图20190709112901.png)

4、布局文件App.jsx找页面文件

# 6、创建各个页面 -- src/views

> cnpm i redux react-redux redux-thunk -S

1、src/views/home/index.jsx  +  src/views/home/UI.jsx,同理创建 kind,cart,user
![77be8cd899e832baeeb3f9bd6fac3e90](react总体流程.resources/QQ截图20190709113622.png)
![f592866c2742c1868cd6e04736615be0](react总体流程.resources/QQ截图20190709114102.png)

2、创建各个页面需要的状态管理器，以首页为例

src/views/home/store.js
![d651f047d014da3fb03fe0218ab8c475](react总体流程.resources/QQ截图20190709114804.png)

3、store/index.js 引入相关的分reducer
![4bc0da1c368444fa6cb9f3243b9f0a8b](react总体流程.resources/QQ截图20190709115104.png)

4、src/index.js 处引入状态管理器
![66d7a38f1e162f7f79798d224048c9b3](react总体流程.resources/QQ截图20190709115250.png)

5、修改 App.jsx，使用路由加载页面
![1770b5cf5db43e2f45d0b955ac9679af](react总体流程.resources/QQ截图20190709115611.png)
浏览器输入 /home  /kind  /cart /user查看效果

6、修改页面底部，添加导航
![848ccd35ee3c8dc65349e5bfa6dac294](react总体流程.resources/QQ截图20190709120126.png)

![05c17fea889b82d21df417483bc15bc2](react总体流程.resources/QQ截图20190709120152.png)

# 7、首页的数据渲染

1、获取数据
home/index.jsx
![3dae23a978c9cfda2caeacafac2c9d0c](react总体流程.resources/QQ截图20190709170133.png)

home/UI.jsx 触发请求
![cd33473a10d3c59af70d4b37db90abb6](react总体流程.resources/QQ截图20190709170307.png)

home/action.js
![38e01ff5ca48086ef5b17b48d1fb2a2e](react总体流程.resources/QQ截图20190709170818.png)

home/index.jsx 容器组件触发action
![8445182a189e46aeacec4554365e1c2d](react总体流程.resources/QQ截图20190709171004.png)

封装数据请求的方法 api/index.js
> cnpm i axios -S
![5b580691701042202b3820af2f13f13c](react总体流程.resources/QQ截图20190709171431.png)

home/action.js 请求数据
![fed56c552f4d30f24a1539e2cffbc198](react总体流程.resources/QQ截图20190709172308.png)

2、UI库
> cnpm i antd-mobile -S

入口页面的相关配置 index.html
```
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" /> <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script> <script> if ('addEventListener' in document) { document.addEventListener('DOMContentLoaded', function() { FastClick.attach(document.body); }, false); } if(!window.Promise) { document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>'); } </script>
```

按需加载组件
> cnpm i babel-plugin-import -D

配置样式 config/webpack,config.js
![cb3703e7e776b4e2636a8716833febe7](react总体流程.resources/QQ截图20190709173003.png)

home/UI.jsx 使用组件并且渲染
![d21080fddd5eeb12bfc0f54af3bf0100](react总体流程.resources/QQ截图20190709173419.png)


# 8、如果你想要写详情页面，详情页面有自己的底部

详情页面是一个单独的布局文件
![9135f9c31a129b3e65720a0f08c55df7](react总体流程.resources/QQ截图20190709174248.png)

编写一个详情的页面 views/detail/index.jsx
![7765df0a03f40c011a9424eb3251d5ff](react总体流程.resources/QQ截图20190709174329.png)

修改入口文件处的配置
![49e4e3f180b4bbadf52da25113afcb07](react总体流程.resources/QQ截图20190709174437.png)

# 9、渲染列表并且点击进入详情页面
home/index.jsx 添加产品列表的数据
![12605c4224904f6c8eb230935c20da49](react总体流程.resources/QQ截图20190709174846.png)

home/UI.jsx
![b051f8306ef59f0830121a7b4fe1f312](react总体流程.resources/QQ截图20190709174723.png)

修改一下layout/DetailApp.jsx中的路由的定义，给它设定一下参数
![ad538718ce9a6cb63b4e2114806a8aa4](react总体流程.resources/QQ截图20190709175007.png)


列表跳转

声明式跳转 NavLink  Link
![c6aab03a478ec61fa20667aed6afe933](react总体流程.resources/QQ截图20190709175435.png)

编程式跳转 子组件没有属性的话父组件传递  {...this.props}
![f3428da32a3da486256f5b57c02fd1c3](react总体流程.resources/QQ截图20190709175757.png)

详情页面获取数据并且渲染
![b0c705f5d8604e0d5b075322e55782bb](react总体流程.resources/QQ截图20190709180356.png)

# 10、react +mobx
 react + react-dom + react-router-dom + axios/fetch + mobx/mobx-react + antd-mobile/antd/element-ui + prop-types
 
 1 装饰器(Decorator)  es7 语法
 底层原理(是什么):
是个函数,用来装饰类|类成员 
是个语法糖(Object.defineProperty)
Object.defineProperty(参数): 给对象添加或修改属性的
    参数: target目标 prop针对的属性 descriptor针对目标的描述
如何实现(怎么用):
@装饰器名 类
@装饰器名 类的实例属性|静态属性
@装饰器名 类的实例方法|静态方法
使用场景(用在哪)
mobx / angluar +Ts


2 配置
安装：npm i @babel/plugin-proposal-decorators --save

配置：package.json

babel: {
    "presets":...

    +
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
     ]

    ....
  }

配置： vscode->设置->搜索设置输入：experimentalDecorators->勾上
   webstrom 无需设置

3 mobx成员: observable action
    干嘛的:MobX 的理念是通过观察者模式对数据做出追踪处理，在对可观察属性作出变更或者引用的时候，触发其依赖的监听函数
		整体的store注入机制采用react提供的context来进行传递

怎么用: 定义类

@observable 装饰store类的成员，为被观察者
@action 实例方法, 修改状态，同步异步都修改，不推荐组件内部改

用在哪: react 

4 mobx-react成员:  inject,observer,Provider

Provider: 顶层提供store的服务，Provider store={store}

inject: 注入Provider提供的store到该组件的props中，组件内部使用
    inject 是一个高阶组件 高阶组件返回的是组件，作用在包装组件
        场景:	export default inject('store')(react函数式组件)
    @inject 是装饰器，装饰的是类本身和类成员，
        @inject('store') class 类组件
observer: 设置当前组件为观察者,一旦检测到store中被监测者发生变化就会进行视图的强制刷新
    @observer class 类组件 ..
    const 组件=observer((store)=>{jsx})
    
构建
程序主入口:<Provider store={store}>所有</.>
store: export default 实例store
       构造器: this.childStore=new ChildStore(this)       this=store
childStore:
    构造器: this.store=store  便于任何子store可以访问其他子store
    @observable 实例属性
    @action 实例方法(){修改实例属性==redux reducer+action}
    
    

> cnpm i mobx mobx-react -S
> cnpm i @babel/plugin-proposal-decorators --save
配置：package.json

babel: {
    "presets":...

    +
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
     ]

    ....
  }
 store/index.js
![87579291e2846f1cd911f5bedd8a26f3](react总体流程.resources/066A9364-BE43-4549-B487-520EEF1BBA25.png)

src/index.js
![5afcfdf002bf46d8fb19941a92d79aa7](react总体流程.resources/8FE72E37-03BA-4DB0-B7BC-E99DC3E56564.png)

store/HomeStore.js  ---  处理首页中的状态管理
store/KindStore.js
![82f89fc55cb3c332ad6e9a41d56d8b65](react总体流程.resources/7370B945-2D4C-4786-BB51-E271475F1D58.png)

store/index.js 处引入 各个分 模块的状态库
![0917a5907ba08abd79dafb6e75e23982](react总体流程.resources/EB63B946-A84C-4C2D-8D2F-45E6C5F9DE75.png)

store/HomeStore.js   store/kindStore.js的构造器 说明store
![043439cbe5cada4cafb2acb1bedd4e1f](react总体流程.resources/QQ截图20190709194246.png)


store/HomeStore.js  ---设计首页的状态以及改变状态的方式
![413d30fab47d0ff3e332be33baa0d148](react总体流程.resources/QQ截图20190709195227.png)

改造src/views/home（kind/cart/user）组件
![08fdc51369b2f265fdcea0b4695abb58](react总体流程.resources/QQ截图20190709201456.png)

把当前的首页的这个类组件变为观察者 home/index.jsx
![be88a9cd48b012c76e888bd7fde04051](react总体流程.resources/QQ截图20190709201557.png)

请求数据home/index.jsx
![6e93315f6598c8c76adf478f7f5ff77e](react总体流程.resources/QQ截图20190709201655.png)

store/homeStore.js中给事件绑定this
![a4d4ba116d8cca6d6b05328f7c43abcb](react总体流程.resources/QQ截图20190709201811.png)

首页渲染数据 home/index.jsx
![8f51902655dde924c3bb51785eadef17](react总体流程.resources/QQ截图20190709202018.png)


假设你在分类页面需要访问列表的数据


# 11、[dva-cli](https://dvajs.com/guide/getting-started.html)

> cnpm i dva-cli -g
> dva new dvaapp
> cd dvaapp
> npm start