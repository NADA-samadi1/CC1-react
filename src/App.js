import logo from './logo.svg';
import './App.css';
import Dataapi from './Compenat/Dataapi';
import Firstpart from './Compenat/Firstpart';
import Menu from './Compenat/Menu';
import Calc from './Compenat/Calc';
import Slider from './Compenat/Slider';
import LangContext from './Compenat/LangContext';
import Icones from './Compenat/Icones';
import Complang2 from './Compenat/Complang2';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
   
     <div>
      <h1><Menu/></h1> <br />
      <Routes>
      <Route path='/' element={<Calc/>}/>
      <Route path='/Firstpart' element={<Firstpart/>}/>
      <Route path='/Slider' element={<Slider/>}/>
        <Route path='/Dataapi' element={<Dataapi/>}/>
        <Route path='/Slider' element={<Slider/>}/>
        <Route
  path='/LangContext'
  element={
    <LangContext>
      <Icones />
      <Complang2 />
    </LangContext>
  }
/>
      <Route path='*' element={<h1 className='h1' style={{textAlign:'center'}}>404</h1>}/>
      
      

        
      </Routes>
     </div>
  )
}

export default App;
