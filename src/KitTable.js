import React, { Component } from 'react';

class KitTable extends Component{
    constructor(props) {
        super(props)
        this.state= {
          kit: [{
            name:'tent',
            checkedIn:true
          }, {
            name:'stove',
            checkedIn:false
          },{
            name:'marquee',
            checkedIn:true
          }]
        }
      }
    
     
       renderRows() {
        return this.state.kit.map(kit=>(
          <tr key={kit.name}>
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


export default KitTable;