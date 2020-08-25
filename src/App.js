import React, {Component} from 'react';
import logo from './components/logo.svg';
import './App.css';
import {Login} from "./components/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {TodoApp} from './components/TodoApp'


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
                        <div>

                        <Link to="/todo">Click here to make a TODO</Link>
                        <Route exact path="/todo" component={TodoAppView}/>
                        </div>
                        : 
                        /*<li>

                        </li>*/
                      
                            <Route exact path="/" component={LoginView}/>
                     
                    } 
                </ul> </div>


            </Router>
        );

    }
}
export default App;
