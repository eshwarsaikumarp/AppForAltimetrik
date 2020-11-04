import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { loginUser } from "./actions";
import "./styles.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", authflag: 1 };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
  };

  render() {
    const { email, password } = this.state;
    const { switchComponent } = this.props;
    console.log('thees', this.props)
    return (
      <div>
        <Grid container spacing={0} justify="center" direction="row">
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              className="login-form"
            >
              <Grid item>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
              </Grid>
              <Paper
                variant="elevation"
                elevation={2}
                className="login-background"
              >
                <Grid item>
                  <form onSubmit={this.handleSubmit}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          size="small"
                          type="email"
                          placeholder="Email"
                          fullWidth
                          name="email"
                          variant="outlined"
                          value={email}
                          onChange={this.handleChange}
                          required
                          autoFocus
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          size="small"
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          value={password}
                          onChange={this.handleChange}
                          required
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid item>
                  <Typography onClick={() => {switchComponent(false)}} variant="body2">
                    New User?
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// Object of action creators
const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
