import React, { useEffect } from 'react';
import './App.css';
import Chat from './Components/Chat/Chat';
import Sidebar from './Components/Sidebar/Sidebar'
import { selectUser } from './features/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import Login from './Components/Login/Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log('user is', authUser)
      if (authUser) {
        // log In
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        // log out
        dispatch(logout())
      }
    })
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
          <Login />
        )}


    </div>
  );
}

export default App;