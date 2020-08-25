import React, {Component} from 'react';
import logo from './components/logo.svg';
import './App.css';
import moment from "moment";
import {Login} from "./components/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {TodoApp} from './components/TodoApp'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const LoginView = () => (
    <Login/>
);
const TodoAppView = () => (
    <TodoApp/>
);


class App extends Component {

    constructor(props) {
        super(props); 
        localStorage.setItem("email","chan@mail.com");
        localStorage.setItem("password","chan123");
    }

    

    render() {

        return (

            <Router>
                <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>
                
                <ul>
                    {localStorage.getItem('IsLoggedIn')==="true" ? 
                        <li>
                            <Link to="/todo">Todo</Link> <Route path="/todo" component={TodoAppView}/>
                        </li>
                        : 
                        <li>
                            <Link to="/">Login</Link> <Route exact path="/" component={LoginView}/>
                        </li>
                    } 
                </ul> </div>


            </Router>
        );

    }
}
export default App;
