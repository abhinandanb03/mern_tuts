import React, {Component} from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default class CreateExercise extends Component{
    render(){
        return(
            <div className='container'>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username: </label>
                        <select ref="userInput" 
                            required 
                            className='form-control' 
                            value={this.state.username} 
                            onChange={this.onChangeUsername}>
                            {
                                this.setState.users.map((user) => {
                                    return <option key={user} value={user}>{user}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <input type="text" className="form-control" 
                            value={this.state.description} onChange={this.onChangedescription}></input>
                    </div>
                    <div className='form-group'>
                        <label>Duration (in Minutes): </label>
                        <input type="text" className="form-control" 
                            value={this.state.duration} onChange={this.onChangeduration}></input>
                    </div>
                    <div className='form-group'>
                        <label>Date: </label>
                        <div>
                            <DatePicker selected={this.state.date} onChange={this.onChangedate}></DatePicker>
                        </div>
                    </div>
                    <div className='form-group'>
                        <input type="submit" value="Create Exercise Log" className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        )
    }
}