import { useEffect, useState } from 'react';

const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem('session');
    setIsLoggedIn(!!session);
  }, []);

  return { isLoggedIn, setIsLoggedIn };
};

export default useAuthStatus;
