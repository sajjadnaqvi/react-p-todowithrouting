import './App.css';
import React from 'react';
import TodoItems from './TodoItems';
import DetailTodo from './DetailTodo';
import {Route,Switch} from "react-router-dom";
import EditTodo from './EditTodo';

class App extends React.Component{
  state = {
    activeItem :"",
    selectedTodo:"",
    itemIndex : "",
        todos : [
          {
            items : "Milk",
            price : "40",
            quantity : "8",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard " 
          },
          {
            items : "Bread",
            price : "20",
            quantity : "8",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard " 
          },
          {
            items : "Eggs",
            price : "10",
            quantity : "82",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard " 
          },
          {
            items : "Yougart",
            price : "30",
            quantity : "18",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard " 
          }
        ]
  };
  checkAvtiveUser = (index,todo) =>{
    let ans = false;
    let item ="";
      this.state.todos.map((todo,i)=>{

          if(i === index)
        {
           ans = true;
           item = todo.items;
        }
        
      })
      this.setState({
        activeItem : item,
        itemIndex : index
      });
      this.sendDetail(todo);
      console.log(this.state.itemIndex);
      return ans;
  } 

  sendDetail = (todo) =>
  {
    this.setState({
      selectedTodo:todo
    });
    console.log(this.state.selectedTodo);
  }

  editTodoToState = (indx,price,quantity)=>{
    const newTodo = this.state.todos.map((todo , i)=>{
     if(indx === i){
      return{
        ...todo,
        price:price,
        quantity : quantity
      }
    }
    return todo;
    });
    this.setState({
      todos : newTodo,
    });
    this.resetSelecetedTodo(indx)
  };

  resetSelecetedTodo=(index)=>{
    const newTodo = this.state.todos.map((todo,i)=>{
      if(index === i)
      {
        return todo;
        
      }
    });

    this.setState({
      selectedTodo:newTodo
    });

  }

  
  render(){
    return(
      <>
      <Switch>
        <Route path="/edittodo" render={()=>< EditTodo show="yes" todo={this.state.selectedTodo} editTodoToState={this.editTodoToState} index={this.state.itemIndex}/>}/>
        <div className = "container listItembox">
        <div className="row">
          <section className="col-md">
          <ul className="list-group">
          {this.state.todos.map((todo,index)=>{
            return(<TodoItems todo={todo} key={index}
              index={index}
              checkAvtiveUser = {this.checkAvtiveUser}
              activeItem = {this.state.activeItem}
            />);
          })}
        </ul>
          </section >
          <section className="col-md box" >
            <div className="row">
            <DetailTodo todo={this.state.selectedTodo}/>
            
            

            </div>
          </section>
        </div>

      </div>
      </Switch>
      
        
      </>
    );
  }
}

export default App;
