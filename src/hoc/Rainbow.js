import React from 'react'

const Rainbow = (WrapppedComponent) => {

    const colors = ['#480032','#df0054','#ff8b6a','#ffd6c2','#feffdb','#ffc60b','#ff8b00','#444444','#5e0606','#831212','#970690','#ffa400']

    return (props) => {
    const randomColor = colors[Math.floor(Math.random()*12)]
        return (
            <div style={{color: randomColor}}>
                <WrapppedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow