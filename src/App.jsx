import './App.css'
import { Home } from './pages/Home';
import { Header } from './pages/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <Header />
      <main>
      <Routes>
         <Route path="/" element={<Home />}></Route>
         {/* <Route path="/gems" element={<Gems />}></Route>
         <Route path="/" element={<Home />}></Route>
         <Route path="/" element={<Home />}></Route> */}
      </Routes>
      </main>
      </div>
    </Router>
  )
}

export default App
