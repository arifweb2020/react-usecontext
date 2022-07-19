import React, { useContext } from 'react';
import { NameContext } from '../NameContext'
import { AgeContext } from '../AgeContext'


const Third = () => {
     const name = useContext(NameContext)

     const { value, setValue } = useContext(AgeContext)
     // const age = useContext(AgeContext)
     return (
          <div>
               <h1>My name is {name}</h1>
               <h1>My age is {value}</h1>
               {/* <h1>My age is {age}</h1> */}
               <button onClick={() => setValue(20)}>Change</button>
          </div>


     )

}
export default Third