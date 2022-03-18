import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';



class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {

        firstname : "",
        lastname : "",
        telnum : "",
        email : "",
        agree : false,
        contactType: 'Tel.',
        message: ""
    }
}






render() {


            return(

                <div className= "container">
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Send us your feedback</h3>
                        </div>
                        <div className="col-12">
                            <Form>
                                <FormGroup row>
                                    <label htmlFor="firstname" md = {2}> First Name </label>
                                    <col md = {10}>
                                        <Input type="text" name = "firstname" value={this.state.firstname} placeholder= "First Name" />
                                    </col>
                                </FormGroup>
                                <FormGroup row>
                                    <label htmlFor="lastname" md = {2}> Last Name </label>
                                    <col md = {10}>
                                        <Input type="text" name = "lastname" value={this.state.lastname} placeholder= "Last Name" />
                                    </col>
                                </FormGroup>
                                <FormGroup row>
                                    <label htmlFor="telnum" md = {2}> Contact Tel. </label>
                                    <col md = {10}>
                                        <Input type="text" name = "telnum" value={this.state.telnum} placeholder= "Tel. Number" />
                                    </col>
                                </FormGroup>
                                <FormGroup row>
                                    <label htmlFor="email" md = {2}> Email </label>
                                    <col md = {10}>
                                        <Input type="email" name = "email" value={this.state.email} placeholder= "Email" />
                                    </col>
                                </FormGroup>


                                <FormGroup>

                                    <Col md = {{size: 6 , offset:2}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="agree"  checked={this.state.agree} /> <strong>May we contact you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col md ={{size: 3 , offset: 1}}>
                                        <Input type="select" name="contactType" value={this.state.contactType}>

                                                <option>Tel.</option>
                                                <option>Email</option>
                                    
                                        </Input>

                                    
                                    </Col>

                                </FormGroup>



                                <FormGroup row>
                                    <label htmlFor="message" md = {2}> Your Feedback </label>
                                    <col md = {10}>
                                        <Input type="textarea" name = "message" value={this.state.message} placeholder= "Write something here" rows= "12">

                                        </Input>
                                    </col>
                                </FormGroup>


                                <FormGroup>
                                    <Col md= {{size:10, offset : 2}}>

                                        <Button type="submit" color="primary">

                                            Send feedback

                                        </Button>
                                    </Col>
                                </FormGroup>






                            </Form>

                        </div>
                        
                    </div>
                    


                </div>



);




}



}


export default Contact;