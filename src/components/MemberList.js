import React, {Component} from 'react'
import Member from './Member'
import fetch from 'isomorphic-fetch'

class MemberList extends Component{

    constructor(props){
        super(props);
        this.state = {
            members: [],
            loading: false,
            administrators: []
        };
        this.makeAdmin = this.makeAdmin.bind(this);
        this.removeAdmin = this.removeAdmin.bind(this);
    }

    makeAdmin(email){
        const {administrators} = this.state;
        this.setState({administrators: [...administrators, email]});
    }

    removeAdmin(email){
        const administrators = this.state.administrators.filter(member => member.email !== email);
        this.setState({administrators: administrators});
    }

    componentDidMount(){
        this.setState({loading: true});
        fetch('https://randomuser.me/api/?results=200')
            .then(resp => resp.json())
            .then(data => data.results)
            .then(results => this.setState({members: results, loading: false}));
    }

    /**
     * assigns admin only   by only 15% probability
     */
    isAdminRandomly(){
        const rand = Math.random();
        const randPercentage = (rand * 100);
        return (randPercentage < 15);
    }

    render(){
        const {members, loading} = this.state;
        return (
            <div className="memberLists center" >
                <ul style={{transform: 'translateX(0%)', margin: '0 auto'}}>
                    { !loading &&
                       members.length &&
                       members.map((member,i) =>
                           <span>
                           {/*<li key={i}><Member name={member.name}*/}
                                               {/*email={member.email}*/}
                                               {/*thumbnail={member.thumbnail}*/}
                                               {/*admin={member.admin}/>*/}
                               <li key={i}><Member name={member.name.first+' '+member.name.last}
                                                   email={member.email}
                                                   thumbnail={member.picture.large}
                                                   admin={this.isAdminRandomly()} makeAdmin={this.makeAdmin} removeAdmin={this.removeAdmin}/>
                           </li>
                           <hr/></span>
                           )
                    }
                </ul>
            </div>
        )
    }
}

export default MemberList