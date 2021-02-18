import React from 'react'
export default class FormDemo extends React.Component {
    constructor () {
        super()
        this.state = {
            input: 1
        }
    }
    changeHandler = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    render () {
        let { input } = this.state
        return (
            <div>
                <input type="text" value={ input } onChange={ this.changeHandler }/>
                <div>{ input }</div>
            </div>
        )
    }
}