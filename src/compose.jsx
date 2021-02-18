import React from 'react'
export default class compose extends React.Component {
    // this.props.children是组件里面的内容
    render () {
        return (
            <div>
                hhhh
                <div>
                    { this.props.children }
                </div>
            </div>
        )
    }
}