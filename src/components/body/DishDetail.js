import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import CommentForm from './CommentForm.js';
import LoadComments from './LoadComments.js';

const DishDetail = props => {

return(

<div>

    <Card style={{marginTop:"10px"}}>

        <CardImg top src= {props.dish.image}  alt= {props.dish.name} />


        <CardBody style={{textAlign: "left"}}>


            <CardTitle>
                
                {props.dish.name}
            
            </CardTitle>


            <CardText>

                {props.dish.description}
                
            </CardText>

            

            <CardText>

                Price: {props.dish.price}/-

            </CardText>
                
    


            <hr />
            

            <LoadComments  comments = {props.comments} />

            <hr/>

            <CommentForm dishId = {props.dish.id}  addComment = {props.addComment} />


            
            
            
            
            
        </CardBody>   


    </Card>


</div>


);

}


export default  DishDetail;