import React, { Component } from 'react';
import {connect} from 'react-redux'
import { createKit } from './actions'

class AddKitForm extends Component{
    state={
        name:''
    }
    onSubmit(e){
        this.props.createKit({
            name:this.state.name
        })
        e.preventDefault();
        return false;
    }
    onNameChange(e) {
        this.setState({
            name:e.target.value 
        })
    }
    render() {
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Kit Name</label>
                    <input type="text" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        placeholder="Enter item" 
                        value={this.state.name}
                        onChange={this.onNameChange.bind(this)}/>
                    <small id="emailHelp" className="form-text text-muted">This will be placed on the table below.</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default connect(
    null,
    {
        createKit
    }
)(AddKitForm)