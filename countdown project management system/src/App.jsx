

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import './App.css';
import ProteectedRout from './components/ProteectedRout';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import About from './Pages/About';

function App() {
  const [user, setUser] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
        setIsFetching(false)
        return
      }
      setUser(null)
      setIsFetching(false)
    })
    return ()=>unsubscribe()
  },[])

  if(isFetching){
    return <h2>Loading.....</h2>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/About" element={<ProteectedRout user={user}>
          <About/>
          </ProteectedRout>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;