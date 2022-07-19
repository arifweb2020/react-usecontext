import React, {useContext,useReducer, createContext } from 'react';

const Mycontext = createContext()
const iState = {
  name : "arif",
  
}

const reducer = (state,action) =>{
  switch(action.type){
      case 'CHANGE_NAME':
        return {
         
          name:action.payload
        }
        default:
          return state



  }

}

const Coder3 = () =>{
  const myname = useContext(Mycontext)
  return(
    <div>
     <h1>coder3</h1>
     <h2>{myname.name}</h2>
     <button onClick={()=>myname.changeName({type:"CHANGE_NAME",payload:"arim"})}>change name</button>
      </div >
  )
}

const Coder2 = () =>{
  const myname = useContext(Mycontext)
  return(
    <div>
      <h2>coder2</h2>
      <h2>{myname.name}</h2>
      <button onClick={()=>myname.changeName({type:"CHANGE_NAME",payload:"asif"})}>change name</button>
      <Coder3/>
      </div >
  )
}

const Coder1 = () =>{
const myname = useContext(Mycontext)
  return(
    <div>
 <h2>coder1</h2>
 <h2>{myname.name}</h2>
 <Coder2/>
      </div>
    
  )
}


function App() {

  const [data,dispatch] = useReducer(reducer,iState)
  return (
    
    <Mycontext.Provider value={{name:data.name,changeName:dispatch}}>
    <div>
    
    <Coder1/>
    </div >
  </Mycontext.Provider>
    
  );
}

export default App;

