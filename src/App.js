import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/index.js'
import './App.js'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}

export default App