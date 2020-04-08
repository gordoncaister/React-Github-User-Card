import React from 'react';
import axios from "axios";
import PersonCard from "./Components/PersonCard"
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={followerurls: [], followers: []};
    
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/octocat/followers")
    .then(response => {
      console.log(response)
      response.data.forEach(e => {
        this.setState({
          followerurls: [...this.state.followerurls, e.url]
        });
      })
      
    })
    .then(() => {
      this.state.followerurls.forEach(e=>{
        axios.get(e)
        .then(res => {
          console.log(res)
          
          this.setState({
              followers: [...this.state.followers, res.data]
            })
          
        })
        .catch(err => {
          console.log("err 2", err)
        })
      })
    })
    .catch(err => {
      console.log("err 1", err)
    });
    
  }

  render () {
    console.log(this.state)
    return (
      <div className="App">
        <h1>hi</h1>

        {this.state.followers.map(x=> (
        <PersonCard follower={x} />
        ))}
        
      </div>
    );
  }
  
}

export default App;
