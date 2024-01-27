import React from "react";

// to use react state hook in components then change function name to first letter cap 

function TodoItem(props){
  // to execute on click 
  return <li  onClick={()=>{
    props.onChecked(props.id)
  }}>{props.text}</li>
}


export default TodoItem;