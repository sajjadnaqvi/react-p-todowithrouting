import React from 'react';

class TodoItems extends React.Component{
    state = {
        active :false
    }
    
    activeSet = () =>{
        let a = false;
        if(this.props.todo.price !=="")
        {
            a =true;
        }
        this.setState({
            active : a
        });
    }
    render(){
        
        if(this.props.todo <= 0)
        {
            return(
                <div className ="App">
                    <h3 >No Item Selected</h3>

                </div>);
        }
        else{
            return(
                <div >
                    <h1 className="editButton">{this.props.todo.items}</h1>
                    <label>Price</label>
                    <p>{this.props.todo.price}</p>
                    <label>Quantity</label>
                    <p>{this.props.todo.quantity}</p>
                    <label>Decsription</label>
                    <p>{this.props.todo.description}</p>

                </div>

            );
        }
       
    }
}
export default TodoItems;