import React, { Component } from 'react';
import './App.css';
import AddKitForm from './AddKitForm'
import KitTable from './KitTable'

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <AddKitForm/>
        <KitTable/>
      </div>
    );
  }
}

export default App;