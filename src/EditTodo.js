import React from 'react';
import History from './History';


class EditTodo extends React.Component {

    constructor (){
        super();
        this.state={
            iprice:"a",
            iquantity:"a",
            change:false
        }
          
    }
    onChangePrice = (event) =>{
        this.setState({
            iprice : event.target.value
        });
       // console.log(this.state.iprice);
    }
    onChangeQuantity = (event) =>{
        this.setState({
            iquantity : event.target.value
        });
       // console.log(this.state.iprice);
    }
   
    submitHandler = (event)=>{
        event.preventDefault();

        if (this.state.iquantity ==="a" && this.state.iprice==="a")
        {
            this.props.editTodoToState(this.props.index,this.props.todo.price,this.props.todo.quantity);
            console.log("condition is running");
        }
        else if(this.state.iquantity ==="a"){
            this.props.editTodoToState(this.props.index,this.state.iprice,this.props.todo.quantity);
        }
        else if (this.state.iprice==="a")
        {
            this.props.editTodoToState(this.props.index,this.props.todo.price,this.state.iquantity);
        }
        else{
            this.props.editTodoToState(this.props.index,this.state.iprice,this.state.iquantity);
        }
        this.setState({
            change:true
        });
        History.push("/");
    }
    goBackButton =()=>{
        History.push("/");
    }
    render(){
        
        
        if(this.props.show === "yes"){
            return(
                <div className = "container listItembox">
                <div className="row">
                  <section className="col-md box">
                      <h1>{this.props.todo.items}</h1>
                      <form onSubmit={this.submitHandler}>
                          <label>Price</label><br/>
                          <input type = "text"  onChange={this.onChangePrice} defaultValue={this.props.todo.price}/><br/>
                          <label>Quantity</label><br/>
                          <input type = "text" onChange={this.onChangeQuantity} defaultValue={this.props.todo.quantity}/><br/>
                          <button type="submit" className="btn btn-primary formButton">Save</button>
                          <button onClick={this.goBackButton} className="btn btn-light formButton">Cancel</button>
        
                      </form>
                </section>
                
                </div>
                </div>
                );
        }
        else{
            return null;
        }
       
    }
}

export default EditTodo;