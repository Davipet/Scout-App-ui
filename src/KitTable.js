import React, { Component } from 'react';
import {connect} from 'react-redux'

class KitTable extends Component{

       renderRows() {
        return this.props.kit.map(kit=>(
          <tr key={kit._id}>
            <td>{kit.name}</td>
            <td>{kit.checkedIn ? 'Yes' : 'No'}</td>
          </tr>
        ))
      }

    render() {
        return(
            <table className='table table-striped table-inverse'>
            <thead>
              <tr>
                <th>Kit</th>
                <th>Checked In</th>
              </tr> 
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        )
    }
}


export default connect((state)=>({
  kit: state
}),null)(KitTable)