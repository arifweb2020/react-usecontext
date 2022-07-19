import React, { useState } from 'react';
import First from './components/First';
import { NameContext } from './NameContext'
import { AgeContext } from './AgeContext'

//https://www.youtube.com/watch?v=lhMKvyLRWo0 

function App() {

  const [value, setValue] = useState('18')

  return (
    <NameContext.Provider value={"arif"}>
      {/* <AgeContext.Provider value={"50"}> */}

      <AgeContext.Provider value={{ value, setValue }}>
        <>
          <First />
        </>
      </AgeContext.Provider>
    </NameContext.Provider>
  );
}

export default App;

