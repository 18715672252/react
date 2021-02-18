import React from 'react'
export default class StateComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            a: 10,
            flag: true
        }
    }
    add () {
        this.setState({
            // eslint-disable-next-line react/no-direct-mutation-state
            a: this.state.a+=1
        })
    }
    increment () {
        this.setState({
            // eslint-disable-next-line react/no-direct-mutation-state
            a: this.state.a-=1,
            
        })
    }
    // 用箭头函数下面用onClick绑定事件不用指定this
    clickHandler = () => {
        this.setState({
            flag: !this.state.flag
        }, () => {
            console.log(this.state.flag)
        })
    }
    render () {
        let showUi = this.state.flag ? '封天都' : 'xiaoakla1'
        return (
            <div>
                <div>
                    组件state
                </div>
                <p>{ this.state.a }</p>
                <button onClick={ this.add.bind(this) }>增加</button>
                <button onClick={ this.increment.bind(this) }>减少</button>
                <button onClick={ this.clickHandler }>关于this</button>
                <p>{ showUi }</p>
            </div>
        )
    }
}