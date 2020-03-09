import React from 'react'

import { Form } from 'react-bootstrap'
import {Container,Row,Col} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Inputs from './inputs'
import Assets from '../constants/Image'
import Footer from './footer'
import HomeNavBar from './navbar'


//Sign In Page
export default class SignIn extends React.Component{
    render(){
        return(
            <Container fluid={true}>
                <HomeNavBar/>
                <Row>
                    <Col xs={7}>
                        <Image className="sideImage" src={Assets.SIDE_IMAGE} alt="SIDE_IMAGE"/>
                    </Col>
                    <Col xs={5}>
                        <Row className="signInInfo" >
                            <Form>
                                <h3 className="signInInfo_header">Sign In</h3><br/>
                                <Inputs Label="Username" type="text" placeholder="Username..."/>
                                <br/>
                                <Inputs Label="Password" type="password" placeholder="************"/>
                                <br/>
                                
                                <Link to="/ForgotPassword">Forgot Password</Link>
                                <Button variant="primary" type="submit" className="btn btn-primary" >
                                     Submit
                                </Button>
                            </Form>
                        </Row>
                    </Col>
                </Row>
                <Footer/>
            </Container>
        );
    }
}