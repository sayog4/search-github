import React from 'react';
import './App.css';

import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import Profileview from './components/profile-view/profile-view.component';
import Reposview from './components/repos-view/repos-view.component';

class App extends React.Component {
  constructor(props){
    super(props);
    this.client_id = 'be04d26c0b0761958eea';
    this.client_secret= 'b18d9f3a5547bbbcf121d2edf3a4c9340f088947';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';

    this.state={
      input: '',
      profileData: null,
      fetching: true,
      error: false,
      repos: null
    }
  }
  async getUser(user) {
    const profileRes = await fetch(`https://api.github.com/users/${user}?client-id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client-id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileRes.json();
    const repos = await repoRes.json();
    return{
      profile,
      repos
    }
  }
  getData = () => {
    if(this.state.input !== ''){
      this.getUser(this.state.input)
        .then(data => {
          if(data.profile.message === "Not Found"){
            this.setState({ error: true });
          }else{
            // console.log(data.profile);
            this.setState({
              profileData: data.profile,
              fetching: false,
              error: false,
              repos: data.repos
            })
          }
        })
    }else{
      this.setState({ fetching: true})
    }
  }
  handleChane = e => {
    this.setState({input: e.target.value});
    
  }
  render() {
    
    return (
      <div className="App">
        <Navbar />        
        <div className="container">
        {
          this.state.error ?  <div className="alert alert-danger">User Not Found</div> : null
        }
          <div className="card card-body mb-4">
            <h1>Search Users In Github</h1>
            <p className="lead">Enter Username to find user profile and respos.</p>
            <input type="text" className="form-control" placeholder="UserName..." value={this.state.input} onChange={this.handleChane} onKeyUp={this.getData} />
          </div>
          { 
            !this.state.fetching ? 
            (<>
              <Profileview data={this.state.profileData} />
              <Reposview repos={this.state.repos} />
            </>) : null
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
