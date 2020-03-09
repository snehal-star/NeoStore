import React from 'react';
import { Form } from 'react-bootstrap';



export default function Inputs(props){
    return (
        <Form.Group controlId="formBasicName">
        <Form.Label>{props.Label}</Form.Label>
        <Form.Control 
            type={props.type} 
            placeholder={props.placeholder}
            onBlur={props.handleChange}
            />
        </Form.Group>
    );
}