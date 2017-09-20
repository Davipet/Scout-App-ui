import React, { Component } from 'react';

class AddKitForm extends Component{
    render() {
        return(
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Kit Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default AddKitForm;