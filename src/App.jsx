import react from "react";
import Home from "./home";
import MyNav from "./MyNav";
import State from './stateComponent'
import ComponentLife from './ComponentLife'
import IfDemo from './ifdemo'
import FromDemo from './FormDemo'
import RefsAndDom from './refsAndDom'
import Compose from './compose'
import PropsTypeDemo from './PropsTypeDemo'
// 用类形式创建组件
export default class App extends react.Component {
  constructor () {
    super()
    this.state = {
      message: '我是福组件数据',
      PropsType: '验证实验'
    }
  }
  updateMessage = () => {
    this.setState({
      message: '父组件的message数据改变了，通过自身修改'
    })
  }
  clickChanges = (data) => {
    this.setState({
      message: '父组件的message数据改变了,通过子组件修改的' + data
    })
  }
  // 渲染函数
  render () {
    let arr1 = ['a', 'b', 'c']
    let arr2 = ['a1', 'b1', 'c1']



    return (
      <div>
        <Home />
        {/* nav和title向子组件传递的数据 */}
        <MyNav nav={ arr1 } title="111"/>
        <MyNav nav={ arr2 } title="222"/>
        <State />
        <ComponentLife message={ this.state.message } clickChanges111={ this.clickChanges }/>
        <button onClick={ this.updateMessage } >福组件修改数据message</button>
        <IfDemo />
        <FromDemo />
        <RefsAndDom />
        <Compose>
          <div id="rrr">hthhaha</div>
        </Compose>
        <PropsTypeDemo />
      </div>
    )
  }
}
