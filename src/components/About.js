import React from 'react'
// import '../navbar_unit.css'
import '../hoc/Rainbow'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import Rainbow from "../hoc/Rainbow";
import Home from './Home'

const topics = [
    {
        name: 'React Router',
        id: 'react-router',
        description: 'Declarative, component based routing for React',
        resources: [
            {
                name: 'URL Parameters',
                id: 'url-parameters',
                description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
                url: 'https://tylermcginnis.com/react-router-url-parameters/'
            },
            {
                name: 'Programmatically navigate',
                id: 'programmatically-navigate',
                description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
                url: 'https://tylermcginnis.com/react-router-programmatically-navigate/'
            }
        ]
    },
    {
        name: 'React.js',
        id: 'reactjs',
        description: 'A JavaScript library for building user interfaces',
        resources: [
            {
                name: 'React Lifecycle Events',
                id: 'react-lifecycle',
                description: "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
                url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/'
            },
            {
                name: 'React AHA Moments',
                id: 'react-aha',
                description: "A collection of 'Aha' moments while learning React.",
                url: 'https://tylermcginnis.com/react-aha-moments/'
            }
        ]
    },
    {
        name: 'Functional Programming',
        id: 'functional-programming',
        description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
        resources: [
            {
                name: 'Imperative vs Declarative programming',
                id: 'imperative-declarative',
                description: 'A guide to understanding the difference between Imperative and Declarative programming.',
                url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/'
            },
            {
                name: 'Building User Interfaces with Pure Functions and Function Composition',
                id: 'fn-composition',
                description: 'A guide to building UI with pure functions and function composition in React',
                url: 'https://tylermcginnis.com/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
            }
        ]
    }
];

const Resource = ({match}) => {
    const resourceDescription = topics.find(({name,id}) => id === match.params.topicId )
                                .resources.find(({name,id}) => id === match.params.resourceId ).description
    console.log(">> inside Resource>>"+JSON.stringify(match))
    return (
        <div style={{width: '99%',position: 'absolute',marginTop: '5%'}}>
            {resourceDescription}
        </div>
    )
}

const Topic = ({match}) => {
    const topic = topics.find(({id}) => id === match.params.topicId)
    console.log(">> inside topic>>"+JSON.stringify(match))
    return (
        <ul style={{width: '99%',position: 'absolute',marginLeft: '60%',marginTop: '5%'}}>
            {
               topic.resources.map(({name, id}) => {
                return  <li><Link to={`${match.url}/${id}`}>{name}</Link></li>
                //return  <li><Link to={`/topics/${match.params.topicId}/${id}`}>{name}</Link></li>
               })
            }
            <hr/>
            <Route path={`${match.path}/:resourceId`} component={Resource}/>
            {/*<Route path="/topics/:topicId/:resourceId" component={Resource}/>*/}
        </ul>
            //TODO display resources as links for the currently selected topic
    )
}

const Topics = () => {

    return (
        <ul style={{width: '99%',position: 'absolute',marginLeft: '60%',marginTop: '5%'}}>
            {
               topics.map(({name,id}) => {
                   return <li><Link to={`/topics/${id}`}>{name}</Link></li>
               })
            }
        <hr/>
        <Route path="/topics/:topicId" component={Topic}/>
        </ul>
    )
}

const About = () => {
    
    return (
        <BrowserRouter>
            <div className="container" style={{width: '90%',position: 'relative',margin: '0 auto'}}>
                <h1 className="center">TOPICS</h1>
                <Link to="/">Home</Link><br/>
                <Link to="/topics">Topics</Link>
            </div>
            <Route exact path="/" component={Home}/>
            <Route path="/topics" component={Topics}/>
        </BrowserRouter>
    )
}

export default Rainbow(About)