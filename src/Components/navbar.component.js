import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            description: "",
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test user','abhi'],
            username: 'abhi'
        })
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(e){
        this.setState({
            date: Date
        });
    }

    onSubmit(e){
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise)

        window.location = "/";
    }

    render(){
        return(
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <Link to="/" className='navbar-brand'>Exercise Tracker</Link>
                <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='navbar-item'>
                            <Link to="/" className='nav-link'>Exercise</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to="/create" className='nav-link'>Create Exercise</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to="/user" className='nav-link'>New User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}