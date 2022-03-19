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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

}


handleInputChange = event =>{

const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
const name = event.target.name;

this.setState({
    [name] : value
})

}


handleSubmit = event =>{

    console.log(this.state);
    event.preventDefault();

}




render() {


            return(

                <div className= "container">
                    <div className="row row-content" style={ {paddingleft:"20px" ,textAlign: "left"} }>
                        <div className="col-12">
                            <h3>Send us your feedback</h3>
                        </div>
                        <div className="col-12 col-md-7">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstname" md = {2}> First Name </Label>
                                    <Col md = {10}>
                                        <Input
                                            type="text" 
                                            name = "firstname"
                                            value={this.state.firstname} 
                                            placeholder= "First Name"
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastname" md = {2}> Last Name </Label>
                                    <Col md = {10}>
                                        <Input 
                                            type="text"
                                            name = "lastname" 
                                            value={this.state.lastname}
                                            placeholder= "Last Name"
                                            onChange={this.handleInputChange} 
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="telnum" md = {2}> Contact Tel. </Label>
                                    <Col md = {10}>
                                        <Input
                                            type="text"
                                            name = "telnum" 
                                            value={this.state.telnum}
                                            placeholder= "Tel. Number" 
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md = {2}> Email </Label>
                                    <Col md = {10}>
                                        <Input 
                                            type="email"
                                            name = "email"
                                            value={this.state.email} 
                                            placeholder= "Email"
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>


                                <FormGroup row>

                                    {/* Checkbox */}
                                    <Col md = {{size: 6 , offset:2}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input 
                                                    type="checkbox"
                                                    name="agree"  
                                                    checked={this.state.agree}
                                                    onChange={this.handleInputChange}
                                                /> <strong> May we contact you? </strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                     {/* Checkbox end */}
                                    

                                    {/* options */}
                                    <Col md ={{size: 3 , offset: 1}}>
                                        <Input 
                                            type="select"
                                            name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}
                                        >

                                                <option>Tel.</option>
                                                <option>Email</option>
                                    
                                        </Input>

                                    
                                    </Col>
                                    {/* options end*/}

                                </FormGroup>



                                <FormGroup row>
                                    <Label htmlFor="message" md = {2}> Your Feedback </Label>
                                    <Col md = {10}>
                                        <Input 
                                            type="textarea" 
                                            name = "message" 
                                            value={this.state.message} 
                                            placeholder= "Write something here..." 
                                            rows = "12"
                                            onChange={this.handleInputChange}
                                        >

                                        </Input>
                                    </Col>
                                </FormGroup>




                                <FormGroup>
                                    <Col md= {{size:10, offset : 2}}>

                                        <Button type="submit" color="primary">

                                            Send Feedback

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