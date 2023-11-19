import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Next from './Next';

export default function Firstpart() {
    const [task, setTask] = useState([
        { id: uuidv4(), nom: "hello world" },
        { id: uuidv4(), nom: "its me" },
        { id: uuidv4(), nom: "good bye!" },
      ]);
      const [tache, setTache] = useState('');
    
      const addTo = () => {
        let newT = [...task];
        let newTache = { id: uuidv4(), nom: tache };
        newT.push(newTache);
        setTask(newT);
        setTache('');
      };
    
      const supprimer = (idE) => {
        let newT = task.filter((t) => t.id !== idE);
        setTask(newT);
      };
    
      const editer = (id, nouveau) => {
        const nvListe = task.map((t) => (t.id === id ? { ...t, nom: nouveau } : t));
        setTask(nvListe);
      };
    
      return (
        <div className='container'>
          <h1 className='display-1'>TodoListe-Part1</h1>
    
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Enter un élément"
              value={tache}
              onChange={(e) => { setTache(e.target.value) }}
            />
            <input type="button" value="enregistrer" className="btn btn-primary" style={{ marginTop: '3%' }} onClick={addTo} />
          </form>
          <div>
            <h2 className='display-3'>les résultats:</h2>
            <ul>
             {
  task.map((el) => (
    <Next
      key={el.id}
      t={el.nom}
      supp={() => supprimer(el.id)}
      edit={(nouveau) => editer(el.id, nouveau)}
    />
  ))
}
            </ul>
          </div>
        </div>
      );
    }