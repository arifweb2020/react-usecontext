// import React,{useReducer} from 'react';

// const iState = "arif"

// const reducer = (state,action) =>{
//   switch(action){
//       case 'CHANGE_NAME':
//         return "asif"
//         default:
//           return state



//   }

// }

// function App() {

//   const [name,dispatch] = useReducer(reducer,iState)
//   return (
    
//       <div className="App">
     
     
//      <h1>use Reducer</h1>

//      <h2>My name is {name}</h2>
//      <button onClick={()=>dispatch('CHANGE_NAME')}>Change Name </button>
    
    
//    </div>
    
//   );
// }

// export default App;


import React,{useReducer} from 'react';

const iState = {
  name : "arif",
  wish:['eat','sleep','drink']
}

const reducer = (state,action) =>{
  switch(action.type){
      case 'CHANGE_NAME':
        return {
          ...state,
          name:action.payload
        }
        default:
          return state
  }
}


function App() {

  const [data,dispatch] = useReducer(reducer,iState)
  return (
    
      <div className="App">
     
     
     <h1>use Reducer</h1>

     <h2>My name is {data.name}</h2>
     <h2>i wish to  {data.wish[0]}</h2>
     {/* <button onClick={()=>dispatch('CHANGE_NAME')}>Change Name </button> */}

     <button onClick={()=>dispatch({type:"CHANGE_NAME",payload:"asif"})}>Change Name </button>
    
    
   </div>
    
  );
}

export default App;

