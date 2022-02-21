import React, { useState } from "react"
import Person from "./Components/Person"
import data from "./data"

export default function App() {
  return (
    <React.Fragment>
      {data.map(({ id, ...item }) =>
        <Person 
          key={id}
          {...item}
        />    
    )}
    </React.Fragment>
  )
}
