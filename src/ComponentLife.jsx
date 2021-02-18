import React from 'react'
export default class ComponentLife extends React.Component {
    constructor () {
        super()
        this.state = {
            a: 0
        }
    }
    componentWillMount () {
        console.log('在组件渲染之前执行componentWillMount')
    }
    componentDidMount () {
        console.log('在组件渲染之后执行componentDidMount')
    }
    shouldComponentUpdate () {
        return true
    }
    componentWillUpdate () {
        console.log('数据改变之前执行（state，props）都会触发,componentWillUpdate')
    }
    componentDidUpdate () {
        console.log('数据改变之后执行（state，props）都会触发,componentDidUpdate')
    }
    componentWillReceiveProps () {
        console.log('props发生改变执行,componentWillReceiveProps')
    }
    componentWillUnmount () {
        console.log('组件卸载之前执行,componentWillUnmount')
    }
    updateDate = () => {
        this.setState({
            // eslint-disable-next-line react/no-direct-mutation-state
            a: this.state.a += 1
        })
    }
    clickChange = () => {
        this.props.clickChanges111('ahahha')
    }
    render () {
        return (
            <div>
                <p>{ this.state.a }</p>
                <p>{ this.props.message }</p>
                <button onClick={ this.updateDate }>更改数据</button>
                <button onClick={ this.clickChange }>子组件更改父组件数据</button>
            </div>
        )
    }
}