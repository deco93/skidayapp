import React,{Component} from 'react'
import {PropTypes} from 'prop-types'
import AutoComplete from './AutoComplete'

class AddDayForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            alertmessage: props.alertmessage,
            resorts: [
                "Taj",
                "Shangrila",
                "Oberoi",
                "Moria",
                "Lime",
                "Club Mahindra"
            ]
        };
        this.submit = this.submit.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    }
    submit(e){
        e.preventDefault()
        console.log('resort>>',this.refs.resort.value)
        console.log('date>>', this.refs.date.value)
    }

    inputChanged(e){
        console.log('-->>>>> inside inputChanged: '+e.target.value);
        this.setState({
           alertmessage: e.target.value
        });
    }

    render() {
    const {resort,date,childChanged} = this.props
        return (
            <div className="container">
                <form className="add-day-form" style={{backgroundColor: 'rgba(33, 255, 206,0.8)',marginTop: '200px',boxShadow: '0 0 5px 20px rgba(33, 255, 206,0.8)'}} onSubmit={this.submit}>
                    <label htmlFor="resort">Resort Name</label>
                    {/*<input id={"resort"} type={"text"} required placeholder={"resort"} defaultValue={this.state.alertmessage} ref="resort" onChange={ (event) => this.inputChanged(event)}/>*/}
                    <AutoComplete options={this.state.resorts}/>
                    <label htmlFor="date">Date</label>
                    <input id={"date"} type={"date"} placeholder={"date"} defaultValue={date} ref="date"/>
                    <button onClick={childChanged}>Add Day</button>
                </form>
            </div>
        )
    }
}
/*let _resort,_date;
let changedInput;
const submit = () => {
    console.log("---- received resort and date input fields values")
    console.log('resort>>',_resort.value)
    console.log('date>>', _date.value)
}

const onInputChanged = (e) => {
    console.log('===== fired onInputChanged '+e.target.value)
    changedInput = e.target.value

    alert
}

const submitInChild = ({childchanged}) => {
    chi
}

const AddDayForm = ({resort,date,childChanged,alertmessage}) => {
    return (
        <div className="container">
            <form className="add-day-form" style={{backgroundColor: 'rgba(33, 255, 206,0.8)',marginTop: '200px',boxShadow: '0 0 5px 20px rgba(33, 255, 206,0.8)'}} onSubmit={submit}>
                <label htmlFor="resort">Resort Name</label>
                <input id={"resort"} type={"text"} required placeholder={"resort"} defaultValue={resort} ref={input => _resort = input} onChange={onInputChanged}/>
                <label htmlFor="date">Date</label>
                <input id={"date"} type={"date"} placeholder={"date"} defaultValue={date} ref={input => _date = input}/>
                <button onClick={submitInChild(childChanged)}>Add Day</button>
            </form>
        </div>
    )
}*/

AddDayForm.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}

AddDayForm.defaultProps = {
    resort: 'coorg',
    date: new Date('24/05/2019')
}

export default AddDayForm