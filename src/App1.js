import React from 'react';
//import First from './components/First';

const MyContext = React.createContext()

// class Coder3 extends React.Component{
//   static contextType = MyContext
//   render(){
//     return(
//       <>
//         <h1>My name is {this.context.name}</h1>
//       </>
//     )
//   }
// }
const Coder3 = () =>{

  return(
    <MyContext.Consumer>
{/* 
    {
        (data) =>{
            return <h1>my name is {data}</h1>
        }
    } */}

{
        (data) =>{
            return (
              <>
              <h1>my name is {data.name}</h1>
              <h1>my age is {data.age}</h1>
              </>
            )
            
            
        }
    }

</MyContext.Consumer>
  )
}


// we can pass data  in coder 2 ALSO
const Coder2 = () =>{

  return(
    <div>
       <MyContext.Consumer>
{
        (data) =>{
            return (
              <>
              <h1>my name is {data.name}</h1>
              <h1>my age is {data.age}</h1>
              </>
            )
            
            
        }
    }

</MyContext.Consumer>
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
    <MyContext.Provider value={{name:"arif", age:26}}>
    <div className="App">
     
      {/* <MyContext.Provider value="arif"> */}
      {/* <First/> */}
      <Coder/>
     
     
    </div>
    </MyContext.Provider>
  );
}

export default App;
