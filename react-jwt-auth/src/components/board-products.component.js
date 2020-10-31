import React, { Component } from "react";

import UserService from "../services/user.service";
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"


export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getProductsListing().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div >
          <div className="productListHeader">
            Available products
          </div>
          <div className="listContainer">
            <div className="productListContainer">
              <div>
              <Card className="productCard">
                <CardMedia>

                </CardMedia>
                <CardContent>
                  This is a test card.
                </CardContent>
              </Card>
              </div>
              <div classname="productCardContainer">
              <Card className="productCard">
                <CardMedia>

                </CardMedia>
                <CardContent>
                  This is a test card.
                </CardContent>
              </Card>
              </div>
              <div classname="productCardContainer">
              <Card className="productCard">
                <CardMedia>

                </CardMedia>
                <CardContent>
                  This is a test card.
                </CardContent>
              </Card>
              </div>
              <div classname="productCardContainer">
              <Card className="productCard">
                <CardMedia>

                </CardMedia>
                <CardContent>
                  This is a test card.
                </CardContent>
              </Card>
              </div>
              <div classname="productCardContainer">
              <Card className="productCard">
                <CardMedia>

                </CardMedia>
                <CardContent>
                  This is a test card.
                </CardContent>
              </Card>
              </div>
              <div classname="productCardContainer">
              <Card className="productCard">
                <CardMedia>
                  
                </CardMedia>
                <CardContent>
                  This is a test card.
                </CardContent>
              </Card>
              </div>
              <div classname="productCardContainer">
              <Card className="productCard">
                <CardMedia>

                </CardMedia>
                <CardContent>
                  This is a test card.
                </CardContent>
              </Card>
              </div>
            </div>
          </div>
      </div>
    );
  }
}