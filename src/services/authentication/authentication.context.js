import React, { useState, createContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';

import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCIN28Am9fVmGqoyhSWi1VlIG-iIflBGIA',
  authDomain: 'mealstogo-c557b.firebaseapp.com',
  projectId: 'mealstogo-c557b',
  storageBucket: 'mealstogo-c557b.appspot.com',
  messagingSenderId: '971645305284',
  appId: '1:971645305284:web:99f2ac90d60a877a74a491',
};

//Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

//const auth = getAuth(app);
// //console.log(auth);

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(getAuth(app), email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
