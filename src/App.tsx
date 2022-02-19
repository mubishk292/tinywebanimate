import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'

import Canvas from './components/sineWave/canvas'
import BoxFile from './components/boxes/boxToggle'
import './App.css'

export default function App() {

  return <div>
    <BrowserRouter>
      <div className='navbar'>
        <h2> <Link to='/'>Sinwave</Link> </h2>&nbsp; &nbsp;&nbsp;&nbsp;
        <h2> <Link to='/box'>Boxes Toggle</Link> </h2>
      </div>
      <Routes>
        <Route path='/' element={<Canvas />} />
        <Route path='/box' element={<BoxFile />} />
        

      </Routes>
    </BrowserRouter>
  </div>
}
