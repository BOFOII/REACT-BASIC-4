import React, { Component } from 'react';
import NavbarComponent from './components/NavbarComponent';
import JumbotronComponent from './components/JumbotronComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from './pages/HomeContainer';
import AddUserContainer from './pages/AddUserContainer';
import EditUserContainer from './pages/EditUserContainer';
import DetailUserContainer from './pages/DetailUserContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'ZLearns',
      users: [
        { id: 1, nama: 'Riski rahmand', nohp: 6282269990089, alamat: 'Koba' },
        { id: 2, nama: 'Zalpha', nohp: 6282269990089, alamat: 'Koba' },
        { id: 3, nama: 'Ziee', nohp: 6282269990089, alamat: 'Koba' },
        { id: 4, nama: 'Gadz', nohp: 6282269990089, alamat: 'Koba' },
        { id: 5, nama: 'Sinz', nohp: 6282269990089, alamat: 'Koba' },
      ],
    }
  }
  render() {
    return(
      <div>
        <NavbarComponent title={ this.state.title }/>
        <JumbotronComponent />
        <Router>
          <Route path="/" exact><HomeContainer users={ this.state.users }/></Route>
          <Route path="/create" exact><AddUserContainer /></Route>
          <Route path="/edit/:id" exact><EditUserContainer /></Route>
          <Route path="/details/:id" exact><EditUserContainer /></Route>
        </Router>
      </div>
    );
  }
}

export default App;