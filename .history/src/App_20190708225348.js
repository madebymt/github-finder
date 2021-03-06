import React, {Component} from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from './components/users/Search'
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  // Default users async componentDidMount() {   this.setState({loading: true});
  // const res = await
  // axios.get(`https://api.github.com/users?client_id${process.env.REACT_APP_GITH
  // U
  // B_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRECT})`);
  //   this.setState({users: res.data, loading: false}); }

  searchUsers = async text => {
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRECT})`);
    this.setState({users: res.data.items, loading: false});
  }

  clearUsers = () => {
    this.setState({user: []})

  }
  render() {
    return (
      <div className='App'>
        <Navbar/>

        <div className='container'>
          <Search searchUsers={this.searchUsers} clearUsers={thi.sclearUsers}/>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
