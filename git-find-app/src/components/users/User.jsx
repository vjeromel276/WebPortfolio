import React, { Component } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Spinner } from "../layout/Spinner";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  render() {
    const { loading } = this.props;

    const {
      avatar_url,
      bio,
      blog,
      company,
      followers,
      following,
      hireable,
      html_url,
      location,
      login,
      name,
      public_gists,
      public_repos,
    } = this.props.user;

    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Link to="/" className="btn btn-light">
              Back to Search Page
            </Link>
            Hireable:{" "}
            {hireable ? (
              <i className="fas fa-check text-success" />
            ) : (
              <i className="fas fa-times-circle text-danger" />
            )}
            <div className="card grid-2">
              <div className="all-center">
                <img
                  className="round-ing"
                  src={avatar_url}
                  alt="avatar"
                  style={{ width: "150px" }}
                />
                <h1>{name}</h1>
                <p>{location}</p>
              </div>
              <div>
                {bio && (
                  <>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                  </>
                )}
                <a href={html_url} className="btn btn-dark my-1">
                  Visit Github Profile
                </a>
                <ul>
                  <li>
                    {login && (
                      <>
                        <strong>Username: {login}</strong>
                      </>
                    )}
                  </li>
                  <li>
                    {company && (
                      <>
                        <strong>Company: {company}</strong>
                      </>
                    )}
                  </li>
                  <li>
                    {blog && (
                      <>
                        <strong>Website: {blog}</strong>
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="card text-center">
              <div className="badge badge-primary">Followers: {followers}</div>
              <div className="badge badge-success">Following: {following}</div>
              <div className="badge badge-light">
                Public Repos: {public_repos}
              </div>
              <div className="badge badge-dark">Public Gists: {followers}</div>
            </div>
          </>
        )}
      </>
    );
  }
}
