import React, { useEffect } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
 
export function useAuth() {
  const [user, setUser] = React.useState<User>();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
        console.log('useAuth---',unsubscribeFromAuthStateChanged);
        console.log('useAuth user---',user);
        
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
  };
}