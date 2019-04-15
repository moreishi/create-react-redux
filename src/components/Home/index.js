import React from 'react';
import '../../styles/components/_home.scss';
import { Form, FormGroup } from "react-bootstrap";

const Home = () => {
    return (
        <div className="container">
            <div className="col-md-6 offset-md-3 mt-8" style={{marginTop:'250px'}}>
                <h1 style={{textAlign:'center'}}>The Portfolio</h1>
                <Form className="col-md-6 offset-md-3">
                    <FormGroup>
                        <input placeholder="Enter invite code to continue" style={{textAlign:'center'}} className='form-control form-control-sm' type="text"/>
                        <button type='button' className='btn btn-sm btn-primary mt-2 offset-5'>Enter</button>
                    </FormGroup>
                </Form>
            </div>
            <div className="col-md-6 offset-md-3 mt-8">

            </div>
        </div>
    );
}

export default Home;