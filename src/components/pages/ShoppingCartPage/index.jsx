import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

import "./styles.css";

export const ShoppingCartPage = () => {
  
  const history = useHistory();

  //check if a current user is logged into firebase
  useEffect(
    () => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          history.push('/login');
        }
      })
    }, []
  );
  
  return (
    <div className="posts-page">
      My Shopping Cart
    </div>
  );
};
