import React from 'react'


class App extends React.Component{
    constructor(props){
      super(props);
        this.state= {
          data: 0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
    };
    setNewNumber(){
        console.log("---->>>>> inside setNewNumber")
        this.setState({data: this.state.data +1})
    }

    render(){
        return (
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <Content mynumber={this.state.data} ></Content>
            </div>
        )
    }
}

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            mynumber: 0
        }
    };
    componentWillMount(){
        console.log("---------- component WILL MOUNT")
    }

    componentDidMount(){
        console.log("---------- component DID MOUNT")
    }

    componentWillReceiveProps(newProps){
        console.log("---------- component WILL RECEIVE PROPS")
    }

    shouldComponentUpdate(newProps,newState){
        console.log("---------- SHOULD component UPDATE")
        return true
    }

    componentWillUpdate(nextProps,nextState){
        console.log("---------- component WILL UPDATE")
    }

    componentDidUpdate(prevProps,prevState){
        console.log("---------- component DID UPDATE")
    }

    componentWillUnmount(){
        console.log("---------- component WILL UNMOUNT")
    }

    render(){
        return (
            <div>
                <h3>Hi: {this.state.mynumber}</h3>
            </div>
        )
    }
}

export default App