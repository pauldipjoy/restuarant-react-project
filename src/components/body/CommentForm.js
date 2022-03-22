import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';




class CommentForm extends Component{

    constructor(props) {
    super(props)
    
    this.state = {

        author:'',
        rating:'',
        comment:''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    }

    



handleInputChange = event =>{


    this.setState({

        [event.target.name] : event.target.value
    })

}


handleSubmit = event => {

// console.log(this.state);

this.props.addComment(this.props.dishId , this.state.author, this.state.rating, this.state.comment);


this.setState ({

    author: '' ,
    rating: '' ,
    comment: ''

    })

event.preventDefault();

}





render(){
    // console.log(this.props);
    return(
        <div>
            <div>
                <h3>Customer Feedback:</h3>
            </div>
            <Form onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    name="author"
                    value={this.state.author}
                    onChange = {this.handleInputChange}
                    placeholder="Type your name"
                    required
                />
                <br/>
                <Input
                    type="select"
                    name="rating"
                    value={this.state.rating}
                    onChange = {this.handleInputChange} >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                </Input>
                <br/>
                <Input
                    type="textarea"
                    name="comment"
                    value={this.state.comment}
                    onChange = {this.handleInputChange}
                    placeholder = "write your comments here..."
                    required
                >
                </Input>
                <br/>
                <Button type= "submit" > Submit Comment </Button>
            </Form>
        </div>

);

}




}

export default CommentForm;