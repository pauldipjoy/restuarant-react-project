import React, { Component } from 'react';
import { Button, CardColumns, Modal, ModalBody, ModalFooter } from 'reactstrap';
import COMMENTS from '../../data/comments';
import DISHES from '../../data/dishes.js';
import DishDetail from './DishDetail.js';
import MenuItem from './MenuItem.js';



class Menu extends Component {

state = {

dishes : DISHES,
comments : COMMENTS,
selectedDish : null,
modalOpen : false

}


onDishSelect = dish => {
    
    // console.log(dish);

    this.setState({
        
        selectedDish : dish,

        modalOpen : !this.state.modalOpen


    
    
    });
}


toggleModel = () => {

    this.setState({

    modalOpen : !this.state.modalOpen

    })


}




render() {


    const menu = this.state.dishes.map(item => {

        return(


            <MenuItem  
            
            dish ={item}

            key = {item.id}

            DishSelect = { () => this.onDishSelect(item)}



        />

        );
    })
    

    let  dishDetail  = null;

    if(this.state.selectedDish != null){

    const comments = this.state.comments.filter(comment => comment.dishId === this.state.selectedDish.id)

    dishDetail = <DishDetail
        dish = {this.state.selectedDish}
        comments = {comments}
        />
    }

    

        


    return (

    <div className ="container" >

        <div className ="row">


        <CardColumns>

            {menu}

        </CardColumns>


        <Modal isOpen = {this.state.modalOpen} onClick = {this.toggleModel} >



            <ModalBody>

                {dishDetail}

            </ModalBody>



            <ModalFooter>

                <Button color= "danger" onClick={this.toggleModel} >

                    Close

                </Button>



            </ModalFooter>


        </Modal>

        

        </div>

    </div>
    
    );


}
}



export default Menu;
