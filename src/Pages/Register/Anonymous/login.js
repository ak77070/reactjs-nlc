import React, { Component } from 'react'
// import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import axios from "axios";

class Login extends Component {

    // constructor(props) {
    //   super(props);

    //   this.state = {
    //     password: "",
    //     loginErrors: ""
    //   };

    //   this.handleSubmit = this.handleSubmit.bind(this);
    //   this.handleChange = this.handleChange.bind(this);
    // }

    // handleChange(event) {
    //   this.setState({
    //     [event.target.name]: event.target.value
    //   });
    // }

    // handleSubmit(event) {
    //   const { password } = this.state;
  
    //   axios
    //     .post(
    //       "http://localhost:3000/sessions",
    //       {
    //         user: {
    //           password: password
    //         }
    //       },
    //       { withCredentials: true }
    //     )
    //     .then(response => {
    //       if (response.data.logged_in) {
    //         this.props.handleSuccessfulAuth(response.data);
    //       }
    //     })
    //     .catch(error => {
    //       console.log("login error", error);
    //     });
    //   event.preventDefault();
    // }

    render() {
        return (
          <>
            <Container fluid className="rsec1">
              <Row>
                <Col>
                  <h2 className="txt1 text-uppercase text-center mb-4 pb-0"> Login </h2>
                  <p className="rtxt2 mb-4 text-uppercase">Welcome Back!</p>
                </Col>
              </Row>
              <Row>
                <Col>
                <form onSubmit={this.handleSubmit}>
                    <div className="createpassword">
                        <p className="mr-2">Enter Password: </p>
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          required
                        />
                    </div>
                    <div>
                      <Link to="/nlc/games">
                        <button type="submit" className="button rbtn text-uppercase mt-5">Continue</button>
                      </Link>
                      <Link to="/nlc/CreatePassword" className="forgot">
                        <p className="mt-2">Forgot Your Password?</p>
                      </Link>
                    </div>
                </form>
                </Col>
              </Row>
            </Container>
          </>
        )
      }
}


export default Login
