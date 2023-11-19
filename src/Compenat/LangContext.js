import React from 'react'
 import { createContext, useState } from "react";

export const lange=createContext();


export default function LangContext({children}) {
    const [lang,setLang]=useState('fr')
  return (
    <div>
      <lange.Provider value={{lang,setLang}}>
        {children}

      </lange.Provider>
    </div>
  )
}
