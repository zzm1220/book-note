### mvvm
#### 如何理解mvvm
#### 如何实现mvvm
#### 是否解读过vue源码
#### 题目
1. jquery 和 使用框架的区别
   1. jquery实现todolist
   2. vue实现todolist
   3. 两者的区别：
    1. 数据和视图的分离（解耦）
    2. 以数据驱动视图，只关心数据变化，DOM操作被封装
2. 说一下对MVVM的理解
    1. MVC
    2. MVVM:
        1. Model: 模型，数据
        2. View: 视图，模板(视图和模板是分离的)
        3. ViewModel: 连接Model和View
3. vue如何实现响应式
    1. 什么是响应式
    2. Object.defineProperty
    3. 模拟
4. vue如何解析模板
    1. 模板是什么
        1. 本质：字符串
        2. 有逻辑：v-if, v-for
        3. 和html很像，但有很大区别
        4. 最终还是要转化为html来显示
        5. 模板最终必须转换成JS代码，因为：
            1. 有逻辑，必须用js才能实现
            2. 转化为html, 必须用js
            3. 所以，模板最后要转化为一个JS函数(render函数)
    2. render 函数
    3. render 函数与vdom
5. vue的整个实现流程
    1. 解析模板成render函数
    2. 响应式开始监听
    3. 首次渲染，显示页面，且绑定依赖
    4. data属性变化，触发rerender
#### MVVM框架的三要素
1. 响应式：vue如何监听到data的每个属性变化？
2. 模板引擎：vue的模板如何解析，指令如何处理？
3. 渲染：vue的模板如何渲染成html？以及渲染过程