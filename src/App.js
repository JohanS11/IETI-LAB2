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

class App extends Component {



    constructor(props) {
        super(props); 
        
    }


    render() {

        const LoginView = () => (
            <Login/>
        );
        const TodoAppView = () => (
            <TodoApp/>
        );
       
        return (
            
            <Router>
                <Route exact path="/" component={LoginView}> </Route>
                <Route exact path="/todo" component={TodoAppView}> </Route>
    
            </Router>
        );

    }
}

export default App;
