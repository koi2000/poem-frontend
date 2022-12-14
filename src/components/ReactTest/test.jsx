import React from 'react'

function myReactComponent(props) {
    const { message } = props
    function childClickHandle() {
        props.onMyEvent('React子组件传递的数据')
    }
    return (
        <div>
            <h2>{ message }</h2>
            <button onClick={ childClickHandle }>向Vue项目传递React子组件的数据</button>
        </div>
    )
}

export default myReactComponent

