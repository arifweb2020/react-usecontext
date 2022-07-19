import React,{useContext} from 'react';
//import First from './components/First';

const NameContext = React.createContext()
const AgeContext = React.createContext()

const Coder3 = () =>{

const name =  useContext(NameContext)
const age = useContext(AgeContext)

  return(
   <div>
     <h1>My name is {name}</h1>
     <h1>My age is {age}</h1>
     </div>
  )
}


const Coder2 = () =>{

  return(
    <div>
      <Coder3/>
      </div >
  )
}

const Coder = () =>{

  return(
    <div>
      <Coder2/>
      </div >
  )
}

function App() {
  return (
    <NameContext.Provider value={"arif"}>
      <AgeContext.Provider value={30}>
      <div className="App">
     
     
     <Coder/>
    
    
   </div>
      </AgeContext.Provider>
    
    </NameContext.Provider>
  );
}

export default App;
