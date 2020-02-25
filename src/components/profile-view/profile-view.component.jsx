import React from 'react';

const Profileview = ({data}) => (
  <div className="card card-body mb-3">
    <div className="row">
      <div className="col-md-3">
        <img src={data.avatar_url} alt="Profile" className="img-fluid mb-2"/>
        <a href={data.html_url} target="_blank" className="btn btn-primary btn-block mb-4">View Profile</a>
      </div>
      <div className="col-md-9">
        <span className="badge badge-primary">Public Repos: {data.public_repos}</span>
        <span className="badge badge-secondary">Public Gists: {data.public_gists}</span>
        <span className="badge badge-success">Followers: {data.followers}</span>
        <span className="mb-3 badge badge-info">Following Repos: {data.following}</span>
        <ul className="list-group">
          <li className="list-group-item">Company: {data.company}</li>
          <li className="list-group-item">Website/Blog: {data.blog}</li>
          <li className="list-group-item">Location: {data.location}</li>
          <li className="list-group-item">Member Since: {data.created_at}</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Profileview;