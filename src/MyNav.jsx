import React from 'react'
export default class MyNav extends React.Component {
    render () {
        return (
            <div>
                <ul>
                    {
                        // this.props获取父组件向子组件传递的数据 (this.props的数据不可以修改)
                        this.props.nav.map((ele, index) => {
                            return <li key={index}>{ ele }</li>
                        })
                    }
                </ul>
                <div>{ this.props.title }</div>
            </div>
        )
    }
}