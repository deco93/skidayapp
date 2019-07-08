import React from 'react'
import PropTypes from 'prop-types'
import TiWeatherSnow from 'react-icons/lib/ti/weather-snow'
import TiHome from 'react-icons/lib/ti/home'
import SkiDayList from "./SkiDayList";

export const SkiDayRow = ({resort, date, powder, backcountry}) => (
    <tr className="table_rows">
        <td>{resort}</td>
        <td>{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</td>
        <td>{powder? <TiWeatherSnow />: null}</td>
        <td>{backcountry? <TiHome />: null}</td>
    </tr>
)

SkiDayRow.defaultProps = {
    resort: "BLAH BLAH BLAHHHHHH",
    date: new Date(),
    powder: true,
    backcountry: true
}

SkiDayRow.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
    powder: PropTypes.bool,
    backcountry: PropTypes.bool
}

export default SkiDayRow