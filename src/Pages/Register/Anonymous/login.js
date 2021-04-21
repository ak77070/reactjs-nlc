import React, { Component } from 'react'
// import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Login extends Component {

  constructor( props ){
    super( props )
    this.state = { show : false };
    
    this.userNav = this.userNav.bind(this)
    }

    userNav = () => {
        // const { show } = this.state;
        this.setState( { show : true } )
    }

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
            <form>
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
                  {/* <Link to="/nlc/games"> */}
                    <button onClick={ this.userNav } type="submit" className="button rbtn text-uppercase mt-5">
                      Continue 
                    </button>
                  {/* </Link> */}
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
