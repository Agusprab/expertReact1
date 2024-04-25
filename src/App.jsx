// eslint-disable-next-line no-unused-vars
import React,{useEffect} from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import { asyncPreloadProcess } from './states/isPreload/action';


function App() {
  const authUser = useSelector((states) => states.authUser);
  const isPreload = useSelector((states) => states.isPreLoad);
  const dispatch = useDispatch();
  useEffect(() => {
    // @TODO: dispatch async action to preload app
    dispatch(asyncPreloadProcess());
  }, [dispatch]);
  if (isPreload) {
    return null;
  }
  if (authUser === null) {
    return (
      <> 
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />        
          </Routes>
        </main>
    
    </>
  );
}

export default App;
