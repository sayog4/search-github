import React from 'react';

const Reposview = ({repos}) => {
  const Output = repos.map(repo => (
    <div className="card card-body mb-2" key={repo.name}>
      <h3 className="heading-3">Latest Repos</h3>
      <div className="row">
        <div className="col-md-6">
          <a href={repo.html_url} target="_blank">{repo.name}</a>
        </div>
        <div className="col-md-6">
          <span className="badge badge-primary">Stars: {repo.stargazers_count}</span>
          <span className="badge badge-primary">Watchers: {repo.watchers_count}</span>
          <span className="badge badge-primary">Forks: {repo.forks_count}</span>
        </div>
      </div>
    </div>
  ))
  return  Output;
    
};

export default Reposview;