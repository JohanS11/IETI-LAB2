import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import { TodoApp } from './TodoApp';


export class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {email:"", password:""};
        this.handleSubmitEmail = this.handleSubmitEmail.bind(this)
        this.handleSubmitPasswd = this.handleSubmitPasswd.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    handleSubmitEmail(e) {
        this.setState({
            email : e.target.value
        });
    }

    handleSubmitPasswd(e) {
        this.setState({
            password : e.target.value
        })
    }

    handleSend() {
        localStorage.setItem("isLoggedIn",true)
        this.setState(this.state)
       
    }

    loggedIn(){
        localStorage.setItem("isLoggedIn",true)
        this.setState(this.state)
    }

    render(){
        if (localStorage.getItem("isLoggedIn" != null)){
            return <TodoApp> </TodoApp>
        }
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input 
                                id="email" 
                                name="email" 
                                autoComplete="email" 
                                onChange={(e) => this.handleSubmitEmail(e)}
                                value = {this.state.password}
                                autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    onChange={(e) => this.handleSubmitPasswd(e)}
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.email}
                                />
                            </FormControl>
                            <Button onClick={()=>this.handleSend()}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}
