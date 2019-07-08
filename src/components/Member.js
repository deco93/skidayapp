import React, {Component} from 'react'
import FaShield from 'react-icons/lib/fa/shield'
class Member extends Component{
    constructor(props){
        super(props);
        const {name, email, thumbnail, admin} = props;
        this.state = {
            name,
            email,
            thumbnail,
            admin
        };
        this.addAdminClickHandler = this.addAdminClickHandler.bind(this);
        this.removeAdminClickHandler = this.removeAdminClickHandler.bind(this);
    }
    componentDidMount(){
        this.style = {
            backgroundColor: 'gray'
        }
        this.anchorStyle = {
            margin: '0 20px'
        }
    }
    addAdminClickHandler(){
        this.props.makeAdmin(this.props.email);
        this.setState({admin: true});
    }

    removeAdminClickHandler(){
        this.props.removeAdmin(this.props.email);
        this.setState({admin: false});
    }

    /*shouldComponentUpdate(newProps,newState){
        console.log('-->> newProps admin: ' + newProps.admin+ ' email[' +newProps.email+ ']');
    }*/

    render(){
    const {name,email,thumbnail,admin} = this.state
        return(
            <span className="membersingle center" style={this.style}>
                <h1>{admin? <FaShield/>:"Member"}</h1>
                <h4>{name}</h4>
                <h4>{email}</h4>
                <h3>{(!admin) ? <a style={this.anchorStyle} onClick={this.addAdminClickHandler}>MakeAdmin</a> : <a style={this.anchorStyle} onClick={this.removeAdminClickHandler}>RemoveAdmin</a>}</h3>
                <img src={thumbnail} style={{maxWidth: '250px'}}/>
            </span>
        )
    }
}

export default Member