import React, { useContext, useState } from 'react';
import { lange } from './LangContext';
import image1 from './image1.webp';
import image2 from './image2.webp';
import img3 from './img3.avif';





export default function Icones() {
  const { lang, setLang } = useContext(lange);

  return (
    <div className="container mt-5" >
      <div className="row">
        <div className="col-md-4" style={{width:'10%'}}>
          <img
            onClick={() => {
              setLang('es');
            }}
            src={image1}
            alt="Spanish Flag"
            className="img-fluid cursor-pointer"
          />
        </div >
        <div className="col-md-4" style={{width:'10%'}}>
          <img
            onClick={() => {
              setLang('en');
            }}
            src={image2}
            alt="English Flag"
            className="img-fluid cursor-pointer"
          />
        </div>
        <div className="col-md-4" style={{width:'10%'}}>
          <img
            onClick={() => {
              setLang('fr');
            }}
            src={img3}
            alt="French Flag"
            className="img-fluid cursor-pointer"
          />
          
        </div>
        
       
      </div>
    </div>
  );
}