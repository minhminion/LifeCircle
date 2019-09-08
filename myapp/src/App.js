import React ,{Component} from 'react';
import './App.css';
import Layout from './component/AppLayout'

export default class App extends Component {
  render(){
    return (
      <div className="App">
          <Layout />
      </div>
    );
  }
}

