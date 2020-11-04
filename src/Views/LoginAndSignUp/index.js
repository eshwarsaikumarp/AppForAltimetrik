import React, { Component } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import {
  Grid,
  AppBar,
  Typography,
  Toolbar
} from "@material-ui/core";
import "./styles.css";

class LoginAndSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      isLogin: true 
    };
  }

  switchComponents = (isLogin) => {
    this.setState({ isLogin })
  };

  render() {
    const { isLogin } = this.state;
    return (
      <div>
        <AppBar position="static" alignitems="center" color="primary">
          <Toolbar>
            <Grid container justify="center" wrap="wrap">
              <Grid item>
                <Typography variant="h6">For Altimetrik</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        {isLogin ? 
          <Login switchComponent={this.switchComponents} /> 
          : <SignUp switchComponent={this.switchComponents} />}
       </div>
    );
  }
}
  
export default LoginAndSignUp;
