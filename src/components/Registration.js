import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import Assets from '../constants/Image';
import { Form,Button } from 'react-bootstrap';
import Inputs from './inputs';
import Footer from './footer'
import HomeNavBar from './navbar'

//Registration page
export default class Registration extends React.Component{
    constructor(){
        super();
        this.state={
            firstName:"",
            flag:false
        }
    }
    handleChange = (event) => {
        console.log("test" + (event.target.value));
        if(event.target.value === "" )
        {console.log("in");
            this.setState({flag:true})}
        else
        this.setState({firstName:event.target.value})
    }
    render(){
        console.log("hhhgh" + this.state.flag)
        let validation;
        if(this.state.flag=== true)
        {
            validation = <span id="error">error</span>
        }
        return(
            <Container fluid={true}>
            <HomeNavBar></HomeNavBar>
            <Row>
                <Col xs={7}>
                    <Image className="sideImage" src={Assets.SIDE_IMAGE} alt="SIDE_IMAGE"/>
                </Col>
                <Col xs={5}>
                    <Row className="signUpInfo">
                    <Form>
                        <h3>Sign Up</h3>
                        <br/><br/>
                        <Inputs Label="First Name" type="text" placeholder="First Name" value={this.state.value} handleChange={this.handleChange}/>
                        {validation}
                        <Inputs Label="Last Name" type="text" placeholder="Last Name"/>
                        <Inputs Label="Email" type="Email" placeholder="Email"/>
                        <Inputs Label="Username" type="text" placeholder="Username"/>
                        <Inputs Label="Password" type="password" placeholder="************"/>
                        <Inputs Label="Repeat Password" type="password" placeholder="************"/>
                        <Inputs Label="Mobile No" type="number" placeholder="Mobile No" /> 
                        {/* <Form.check type="radio">Male</Form.check> */}
                        <Form.Group id="formGridCheckbox" >
                                <Form.Check inline type="radio" label="Female" name="formHorizontalRadios" />
                                <Form.Check inline type="radio" label="Male" name="formHorizontalRadios" />
                                </Form.Group>
                        <Row>
                            <Col>
                                <Button type="submit" className="btn btn-primary btn-block" >Submit</Button>
                            </Col>
                            <Col>
                                <Link to="./signIn">
                                    <Button  type="submit" className="btn btn-info btn-block">Sign In</Button>
                                </Link>    
                             </Col>
                        </Row>
                    </Form>
                </Row>
                </Col>
            </Row>
            <Footer/>
        </Container>
        );
    }
}