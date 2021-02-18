import react from 'react'
import PropTypes from 'prop-types';
export default class PropsTypeDemo extends react.Component {
    render () {
        return (
            <div>
                
                <div>
                PropsTypeDemo { this.props.title }
                </div>
            </div>
        )
    }
}
PropsTypeDemo.PropTypes = {
    // title: PropTypes.string.isRequired, // 传值类型需要是string且必填
    title: PropTypes.string
}
PropsTypeDemo.defaultProps = {
    title: '莫热门'
}