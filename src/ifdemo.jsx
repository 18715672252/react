import React from 'react'
export default class ComponentLife extends React.Component {
    /*
        1.对应的试图切换
        2.做缺省值
    
    */ 
   constructor () {
       super()
       this.state = {
           flag: false,
           arr: [1,2,3,4]
       }
   }
    render () {
        let showUi = this.state.flag ? <span></span> : <span style={{'color': 'red'}}>111</span>
        return (
            <div>
                <div>
                条件渲染
                {
                    showUi
                }
                </div>
                <div>
                    <ul>
                        {
                            this.state.arr.map((ele, index) => {
                                // 单个class写法
                                return <li key={index} className={index % 2 === 0 ? 'reda' : 'aaaa'} style={{'color': index % 2 === 0 ? 'red' : 'blue', 'fontSize': (index+1) * 12 + 'px', 'height': (index+1) * 20 + 'px'}}>{ ele }</li>
                                // 多个class共存的写法
                                // return <li key={index} className={`nnn www ${index % 2 === 0 ? 'reda' : 'aaaa'}`} style={{'color': index % 2 === 0 ? 'red' : 'blue', 'fontSize': (index+1) * 12 + 'px'}}>{ ele }</li>

                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}