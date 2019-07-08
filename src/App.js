import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MemberList from './components/MemberList'
// import SkiDayList from './components/SkiDayList'
// import SkiDayCount from './components/SkiDayCount'
import Navbar from './components/Navbar'
import {Switch,BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import AddDayForm from './components/AddDayForm'

/*class App extends Component {

  constructor(){
    super()
      this.state= {
       allSkiDays: [
           {
              resort: "oberoi",
              date: new Date("1/03/2018"),
              powder: true,
              backcountry: false
           },
           {
               resort: "taj",
               date: new Date("1/04/2018"),
               powder: false,
               backcountry: true
           },
           {
               resort: "moria",
               date: new Date("1/05/2018"),
               powder: true,
               backcountry: false
           },
           {
               resort: "oberoi",
               date: new Date("1/06/2018"),
               powder: true,
               backcountry: true
           }
       ]
      }
  }

  countDays(filter){
    return this.state.allSkiDays.filter(function(day){
        if(filter)
          return day[filter]
        else
          return day
    }).length
  }

  render() {

    return (
      <div className="App">
        <SkiDayList days={this.state.allSkiDays}/>
        <SkiDayCount total={this.countDays()} powder={this.countDays("powder")} backcountry={this.countDays("backcountry")}/>
      </div>
    )
  }
}*/


class App extends Component{

    constructor(){
        super()
        this.onChildChanged = this.onChildChanged.bind(this);
        this.state = {
          alertMessage: "hello from parent App",
          members: [
              {
                name: 'Keanu Reaves',
                email: 'keanu@gmail.com',
                thumbnail: 'https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/204/2019/06/11093002/tmp0c75e455-9d46-4d07-bb3a-884b5a9fd00b-500x500.jpg',
                admin: true
              },
              {
                name: 'Jon Bernthal',
                email: 'jon@gmail.com',
                thumbnail: 'https://www.1stoptionsafety.com/images/bernthal-eea8e.jpg',
                admin: false
              },
              {
                name: 'John Wick',
                email: 'babayaga@gmail.com',
                thumbnail: 'https://images.8tracks.com/cover/i/012/490/869/john_wick_mix_cover-3611.png?rect=0,0,500,500&q=98&fm=jpg&fit=max',
                admin: true
              },
              {
                name: 'The Punisher',
                email: 'pennyandadime@gmail.com',
                thumbnail: 'http://www.femalefirst.co.uk/image-library/square/500/t/the-punisher-marvel-netflix-5.jpg',
                admin: true
              }
          ]
        };
    }
    onChildChanged(){
        alert("child component just now changed: "+this.state.alertMessage)
    }

    render(){
        return (
            <BrowserRouter >
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/add-day-form" render={(props) => <AddDayForm {...props} resort={"mcLeaudganj_monastry"} childChanged={this.onChildChanged} alertmessage={this.state.alertMessage}/>}/>
                        <Route path="/members" render={(props) => <MemberList {...props} members={this.state.members}/>}/>
                        <Route path="/:post_id" component={Post}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
