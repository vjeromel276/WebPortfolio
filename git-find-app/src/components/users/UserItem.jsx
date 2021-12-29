import React, { Component } from "react";

export class UserItem extends Component {
  state = {
    id: "id",
    login: "mojombo",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
  };

  render() {
    const { avatar_url, html_url, id, login } = this.state;
    return (
      <div key={id} className="card text-center">
        <img
          className="round-img"
          src={avatar_url}
          alt="user avatar"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my1">
            {"More..."}
          </a>
        </div>
      </div>
    );
  }
}
