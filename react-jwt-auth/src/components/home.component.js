import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container container-fluid">
        <div className="jumbotron">
          <h1>This page is a self-maintained project. Items/products cannot be purchased, this is not a webshop.</h1>
          <hr/>
          <h2>Please log in with an existing account or sign up.</h2>
          <div className="container container-fluid">
            <div className="row justify-content-center">
              <div className="col-sm">
                <a className= "btn btncolor btn-lg" href="/login" role="button"> Login </a>
              </div>
              <div className="col-sm">
                <a className= "btn btncolor btn-lg" href="/register" role="button"> Sign up </a>
              </div>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}