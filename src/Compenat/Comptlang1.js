import React from 'react'

import { useContext } from 'react';
import { lange } from './LangContext';

export default function Comptlang1() {
  return (
    <div>
      <div>
      <h1 onClick={()=>{setLang('fr')}}></h1>
      <h1 onClick={()=>{setLang('en')}}></h1>
      <h1 onClick={()=>{setLang('es')}}></h1>
    </div>
  
    </div>
  )
}
