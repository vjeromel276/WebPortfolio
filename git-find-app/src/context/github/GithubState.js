import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  REMOVE_ALERT,
  SEARCH_USERS,
  SET_ALERT,
  SET_LOADING,
} from "./types";

import GithubContext from "./githubContext";
import axios from "axios";
import { githubReducer } from "./githubReducer";
import { useReducer } from "react";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);
  //*** search github users */
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //*** get individual github users */
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //*** get individual github users repos*/
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_idclient_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //**  Clear users from state */
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  //*Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
