import React from 'react'
export default class ComponentLife extends React.Component {
    constructor () {
        super()
        this.box = React.createRef()
    }
    componentDidMount () {
        console.log(this.box.current)
    }
    render () {
        return (
            <div id="box" ref={this.box}>
                refs&dom
            </div>
        )
    }
}