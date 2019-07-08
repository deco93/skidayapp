import React from 'react'

class SkiDayCount extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>Total days:{this.props.total}</span>
                </div>
                <div className="powder-days">
                    <span>Powder days:{this.props.powder}</span>
                </div>
                <div className="backcountry-days">
                    <span>BackCountry days:{this.props.backcountry}</span>
                </div>
            </div>
        )
    }
}

export default SkiDayCount