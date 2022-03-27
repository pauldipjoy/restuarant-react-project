import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, CardColumns, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { addComment, fetchDishes } from '../../redux/actionCreators.js';
import DishDetail from './DishDetail.js';
import Loading from './Loading.js';
import MenuItem from './MenuItem.js';


const mapStateToProps = state => {

    return{

        dishes: state.dishes,
        comments: state.comments

    }
}


const mapDispatchToProps = dispatch => {

    return{

        addComment : (dishId , author, rating, comment) => dispatch( addComment(dishId , author, rating, comment)),

        fetchDishes: () => dispatch(fetchDishes())

    };
}




class Menu extends Component {

state = {
// dishes : DISHES,
// comments : COMMENTS,
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


componentDidMount(){
    this.props.fetchDishes();
}




render() {

    document.title = "Menu";
    

    if(this.props.dishes.isLoading){

        return(

            <Loading />

        );
    }

    else{

        const menu = this.props.dishes.dishes.map(item => {

            return(
    
    
                <MenuItem  
                
                    dish ={item}
    
                    key = {item.id}
    
                    DishSelect = { () => this.onDishSelect(item) }
                />
    
            );
        })
    
        
    
        let  dishDetail  = null;
    
        if(this.state.selectedDish != null) {
    
        const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id)
    
    
        dishDetail = <DishDetail
            dish = {this.state.selectedDish}
            comments = {comments}
            addComment = {this.props.addComment}
            />
    
        }
    
        
    
    return (
    
        <div className ="container" >
    
            <div className ="row">
    
    
            <CardColumns>
    
                {menu}
    
            </CardColumns>
    
    
            <Modal isOpen = {this.state.modalOpen}>
    
    
    
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

}



export default connect(mapStateToProps , mapDispatchToProps)(Menu);
