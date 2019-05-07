import React, {Component} from 'react';
import axios from 'axios'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect,Link } from 'react-router-dom'
export default class register extends Component{
    state = {
        First_Name : "",
        Middle_Name : "",
        Last_Name : "",
        HomePhone : "",
        MobliePhone : "",
        EmailAddress : "",
        Password: "",
        MailingAddress : "",
        SocialSecurityNumber : "",
        Money: 0,
        status: false
    }

    sendData = async () => {
        if(this.state.First_Name !== "" && this.state.Last_Name !== "" && this.state.HomePhone !== "" && this.state.MobliePhone !== "" &&
        this.state.EmailAddress !== "" && this.state.Password !== "" && this.state.MailingAddress && this.state.SocialSecurityNumber !== "" && 
        this.state.Money !== 0){
            
            const http = await axios.post('http://localhost:5000/registers ', {
                First_Name : this.state.First_Name,
                Middle_Name : this.state.Middle_Name,
                Last_Name : this.state.Last_Name,
                HomePhone : this.state.HomePhone,  
                MobliePhone : this.state.MobliePhone,
                EmailAddress : this.state.EmailAddress,
                Password: this.state.Password,
                MailingAddress : this.state.MailingAddress,
                SocialSecurityNumber : this.state.SocialSecurityNumber,
                Balance: this.state.Money
                
            })

            if(http.data[0]){
                this.setState({
                    status: true
                })
                console.log('yoyo')
                
                //this.clearData()
                return (alert("Register Complety !"))
            } 
            
            // console.log('yoyo')
            // {this.clearData()}
            // alert("Register Complety !")
            // return (alert("Register Complety !"))
            
        }
        else{
            return (alert("Please Enter all of your information"))
        }
        // console.log(http)
            // if (http.data){
            //     this.setState({status:true})
            //     alert('success')
            // }
            // console.log("aaaa")
    }
    checkredirect =  () => {
        if(this.state.status){
            console.log('yoyo')
            return <Redirect to="/" />
        }
    }


    // clearData =  () => {
    //     <Redirect to="/register" />
    //     // this.setState({
    //     //     First_Name:"",
    //     //     Middle_Name:"",
    //     //     Last_Name:"",
    //     //     HomePhone:"",
    //     //     MobliePhone:"",
    //     //     EmailAddress:"",
    //     //     Password:""
    //     //     ,Money:"",
    //     //     MailingAddress:"",
    //     //     SocialSecurityNumber:"",
    //     //     Money: 0,
    //     //     status:false
    //     // })
    // }
    render(){
        return(
            <div>
                <center><h1>Register</h1></center>
                {this.checkredirect()}
                <Row> 
                    <Col xs="3"></Col>
                    <Col xs="6">
                    <Form>
                    <FormGroup>
                        <Label>First Name : </Label>
                        <Input type="text" name="firstname" onChange={(e) => this.setState({First_Name:e.target.value})} value={this.state.First_Name} placeholder="Adam" />
                        </FormGroup>
                        <FormGroup>
                        <Label>Middle Name : </Label>
                        <Input type="text" name="middlename" onChange={(e) => this.setState({Middle_Name:e.target.value})} value={this.state.Middle_Name} placeholder="Else" />
                        </FormGroup>
                        <FormGroup>
                        <Label>Last Name : </Label>
                        <Input type="text" name="lastname" onChange={(e) => this.setState({Last_Name:e.target.value})} value={this.state.Last_Name} placeholder="Smith" />
                        </FormGroup>
                        <FormGroup>
                        <Label>Home Phone : </Label>
                        <Input type="text" name="homephone" onChange={(e) => this.setState({HomePhone:e.target.value})} value={this.state.HomePhone} placeholder="0856634033" maxLength="10" />
                        </FormGroup>
                        <FormGroup>
                        <Label>Mobile Phone : </Label>
                        <Input type="text" name="mobilephone" onChange={(e) => this.setState({MobliePhone:e.target.value})} value={this.state.MobliePhone} placeholder="0863334025" maxLength="10" />
                        </FormGroup>
                        <FormGroup>
                        <Label>Email Address : </Label>
                        <Input type="email" name="emailaddress" onChange={(e) => this.setState({EmailAddress:e.target.value})} value={this.state.EmailAddress} placeholder="Example@gmail.com" />
                        </FormGroup>
                        <FormGroup>
                        <Label>Password : </Label>
                        <Input type="password" name="maillingaddress" onChange={(e) => this.setState({Password:e.target.value})} value={this.state.Password} placeholder="1234" />
                        </FormGroup>
                        <FormGroup>
                        <Label>Mailing Address : </Label>
                        <Input type="text" name="maillingaddress" onChange={(e) => this.setState({MailingAddress:e.target.value})} value={this.state.MailingAddress} placeholder="Example@gmail.com" />
                        </FormGroup>
                        <FormGroup>
                        <Label>SocialSecurityNumber : </Label>
                        <Input type="text" name="socialsecuritynumber" onChange={(e) => this.setState({SocialSecurityNumber:e.target.value})} value={this.state.SocialSecurityNumber} placeholder="123654" maxLength="6" />
                        </FormGroup>
                        <FormGroup>
                        <Label>Balance : </Label>
                        <Input type="number" name="money" onChange={(e) => this.setState({Money:e.target.value})} value={this.state.Money} min="0" />
                        </FormGroup>
        
                    </Form>  
                    </Col>
                </Row>
                <center><Button color="primary" onClick={(e) => this.sendData()}>Sign up</Button>{' '}     
                {/* <Link to="/register"><Button color="danger" >Clear</Button>{' '}  </Link><br /> */}
                </center>
                
                </div>
                
        );
    }
}
// export default register