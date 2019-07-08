import React, { Component } from 'react';

class AutoComplete extends Component{
    render(){
        return (
            <div>
                <input type="text" list="tahoe-resorts" ref="inputResort"/>
                <datalist id="tahoe-resorts">
                    {
                        this.props.options.map((key,i) =>
                            <option key={i}>{key}</option>
                        )
                    }
                </datalist>
            </div>
        )
    }
}

export default AutoComplete
