import React, { createContext } from 'react'
import { useState } from 'react';
import { useEffect} from 'react';
import axios from 'axios';

const ContextAPI = () => {

const ContextA = createContext()

const [user2Data, setuser2Data] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com//todos/1`)
      .then((response) => {
        setuser2Data(response.data);
      })
      .catch((error) => {
        console.log("This is an error", error);
      });
  },[]);
  return (
    <>
    <ContextA.Provider value ={user2Data}>
    {children}
    </ContextA.Provider>
    </>
  )
}

export default ContextAPI;
export {ContextA}
