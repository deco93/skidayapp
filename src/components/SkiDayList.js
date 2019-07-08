import React from 'react'
import {SkiDayRow} from './SkiDayRow'
import '../App.css';
// import PropTypes from 'prop-types'

 export const SkiDayList = ({days}) => (
    <table>
        <thead>
            <tr>
                <th>resort</th>
                <th>date</th>
                <th>powder</th>
                <th>backcountry</th>
            </tr>
        </thead>
        <tbody>
                {days.map((day,i) =>
                    <SkiDayRow key={i}
                        resort={day.resort}
                        date={day.date}
                        powder={day.powder}
                        backcountry={day.backcountry}
                    />
                )}
        </tbody>
    </table>
 )

SkiDayList.propTypes = {
    days: function(props){
        if(!Array.isArray(props.days))
            return new Error("days prop must be of type array")
        else if(!props.days.length)
            return new Error("days prop must have at least 1 day's record")
        else
            return null
    }
}

export default SkiDayList