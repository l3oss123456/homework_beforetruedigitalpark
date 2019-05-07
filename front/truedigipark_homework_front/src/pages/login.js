import React, { Component } from 'react'
import axios from 'axios'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    email: "",
    password: "",
    page: false
  }

  sendData = async () => {
    const http = await axios.post('http://localhost:5000/login', {
       email: this.state.email,
       password: this.state.password     
    })
    console.log("http : "+http.data)
    if(http.data){
      this.setState({
        page: true
      })
      localStorage.setItem('email',http.data[0].EmailAddress);
      localStorage.setItem('password',http.data[0].Password);
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');
      console.log(email);
      console.log(password);
      return(alert('Welcome-'+http.data.EmailAddress+" Your password-"+http.data.Password))
      // return (<Redirect to="/index" />)
    }
    else{
      return(alert("Invalid password"))
    }
  }

  clearData = async () => {
    this.setState({email:"",password:""})
  }
  
  // checkredirect = () => {
  //   if(this.state.status === true){
  //     return (<Redirect to="/index" />)
  //   }
  // }

  page = () => {
    if(this.state.page){
      return (<Redirect to='/index' />)
    }
  }


  render() {
    return (
      <div>
        <center><h1>Login</h1></center>
         <Row>
            <Col xs="3"></Col>
              <Col xs="6">
                <Form>
                  <FormGroup>
                  <Label>Email : </Label>
                      <Input type="text" name="firstname" onChange={(e) => this.setState({email:e.target.value})} value={this.state.email} placeholder="Example@gmail.com" />
                  </FormGroup>
                  <FormGroup>
                  <Label>Password : </Label>
                      <Input type="password" name="firstname" onChange={(e) => this.setState({password:e.target.value})} value={this.state.password} placeholder="1234" />
                  </FormGroup>
                </Form>
              </Col>
         </Row>
        <center><Button color="primary"  onClick={(e) => this.sendData()}>Sign in</Button>{' '}
        <Button color="danger" onClick={(e) => this.clearData()}>Clear</Button>{' '}<br />
        <a href="/register">Register</a></center>
        {this.page()}
      </div>
    )
  }
}

export default Login;