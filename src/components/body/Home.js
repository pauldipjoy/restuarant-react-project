import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {

    // console.log("mapStateToProps:" , state);

    return{

        dishes : state.dishes,
        sample : state.sample

    }
}

class Home extends Component {

    componentDidMount(){

        console.log("Home Props:" , this.props);

        this.props.dispatch({

        type : 'TEST',
        str : "Bohubrihi"


        })


    }


    componentDidUpdate(){
        console.log("Home Props updated:" ,this.props );
    }



render() {

    document.title = "Bohubrihi Resturant";


return(

<div>


</div>



);




}



}


export default  connect(mapStateToProps)(Home);