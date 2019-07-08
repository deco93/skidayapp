import React from 'react'

class Layout extends React.Component{
    constructor(){
        super()
        this.state ={
            name: 'saransh wali'
        }
    }
    render(){
        return (
            <h1>{this.state.name}</h1>
        )
    }
}

export default Layout