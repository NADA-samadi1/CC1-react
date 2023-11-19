import React, { useContext } from 'react';
import Data from './Data';
import { lange } from './LangContext';

export default function Complang2() {
  const { lang, setLang } = useContext(lange);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="mb-4" style={{fontSize:'400%'}}>{Data[lang].title}</h1>
          <p  style={{fontSize:'200%'}}>{Data[lang].txt}</p>
        </div>
      </div>
    </div>
  );
}