## 创建react项目
1.npx create-react-app 项目名
2.cd 项目名
3.npm start

## jsx语法
jsx语法：javascript + html
解读jsx语法：遇到<>按照html语法解析，遇到{}按照javascript解析

## 元素渲染

## 组件 （App.jsx）
单文件组件的后缀可以是js，也可以是jsx

## props父传子传值 （App.jsx的MyNav组件）
父组件通过自定义属性向子组件传值（<MyNav nav={ arr1 } title="111"/>）
子组件在jsx语法里通过this.props.nav或者this.props.title获取传递过来的数据（this.props.title）

## 子向父传值 （App.jsx和ComponentLife组件）vue中的this.$emit('aa') @aa="父组件的事件"
父组件通过自定义属性向子组件传递一个函数（<ComponentLife message={ this.state.message } clickChanges111={ this.clickChanges }/>）
子组件通过自定义属性的属性名在this.props中可以获取到该函数并执行（可以向该函数传参）this.props.clickChanges111('ahahha')
子组件触发this.props.clickChanges111('ahahha')该函数后，父组件就会触发父组件中的clickChanges并传参

## state数据(相当于vue的data)见stateComponent组件
1.state里面的数据只能通过this.setSate()修改
2.this.setSate有两个参数，第一个是个对象是要修改的state的数据，第二个是修改state数据完成后的回调
例子：把state的里面a属性的属性值修改为10，后吊用后面传递的函数
this.setSate({ a: 10 }, () => {

})

## 生命周期函数 （ComponentLife组件）
1.componentWillMount:在组件渲染之前执行
2.componentDidMount:在组件渲染之后执行
3.shouldComponentUpdate: 返回true和false,true允许改变，false不允许改变
4.componentWillUpdate: 数据改变之前执行（state，props）都会触发
5.componentDidUpdate: 数据改变之后执行（state，props）都会触发
6.componentWillReceiveProps: props发生改变执行
7.componentWillUnmount: 组件卸载之前执行

## setState是同步还是异步
1.setState会引起试图重绘
2.在可控情况下是异步，非可控是同步
3.要取state改变后的数据，在setState第二个参数（回调函数中取）

##条件渲染和列表渲染，动态class和动态style(ifdemo)
// 单个class写法和动态style
<li className={index % 2 === 0 ? 'reda' : 'aaa'} style={{'color': index % 2 === 0 ? 'red' : 'blue', 'fontSize': (index+1) * 12 + 'px'}}>{ ele }</li>
// 多个class写法
<li key={index} className={`nnn www ${index % 2 === 0 ? 'reda' : 'aaaa'}`} >{ ele }</li>


## 状态提升（表单）vue中v-modle
### 受控组件（value通过state管理）和事件对象的用法（FormDemo组件）
1.给value绑定state的之后，还要给input绑定一个onChange事件，来时逝改变state里的数据（可以实现双向绑定）
input type="text" value={ input } onChange={ this.changeHandler }/>
changeHandler = (e) => {
    this.setState({
        input: e.target.value
    })
}
### ref和DOM（ref标记来获取dom元素）refsAndDom组件 比较：vue中ref="box" 获取this.$refs.box

## 状态提升（兄弟组件之间的数据交互）
1.先执行子组件传值父组件，然后再执行父组件传值子组件

## 组合与继承（）vue的solt
<Compose><div id="rrr">hthhaha</div></Compose>
在Compose组件中通过this.props.children获取<div id="rrr">hthhaha</div>该doM

## propsType组件传值检查