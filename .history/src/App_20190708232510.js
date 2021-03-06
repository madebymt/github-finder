import React, {Component} from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
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
    this.setState({users: [], loading: false})

  }

  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg,
        type
      }
    })

  }
  render() {
    const {users, loading} = this.state;
    return (
      <div className='App'>
        <Navbar/>

        <div className='container'>
          <Alert alert={this.state.alert}/>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            setAlert={this.setAlert}
            showClear={users.length > 0
            ? true
            : false}/>
          <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  }
}

export default App;
