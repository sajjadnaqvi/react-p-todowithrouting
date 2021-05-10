import React from 'react';
import EditTodo from './EditTodo';
import History from './History';

class TodoItems extends React.Component{

    state ={
        active: false
    }
   
    chechActive = () =>{
        //console.log("running");
        let a = false;
        a = this.props.checkAvtiveUser(this.props.index,this.props.todo) ;

        this.setState({
            active : a
        });  
    }

    editButtonClick = ()=>{
        //let history = useHistory;
       //this.props.history.push('/edittodo');
        History.push('/edittodo');

    }

render(){
    return(
        <div>
            <li className={`list-group-item ${this.props.activeItem === this.props.todo.items ?"active":""}`}>
                <span onClick={this.chechActive}>{this.props.todo.items}</span> 
                {this.props.activeItem === this.props.todo.items ? <button className="editButton" onClick={this.editButtonClick}>Eidt</button> : ""}
                </li>
                <EditTodo show="no" todo={this.props.todo}/>
        </div>
        
    );
}
}
export default TodoItems;
