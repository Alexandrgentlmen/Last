import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '~/router';
import { useAppSelector } from '~/store/hooks';

export function useRedirect() {
  const location = useLocation();
  const navigate = useNavigate();
  const fromThisPage = location.state?.from ?? routes.TODO_LIST;
  // const isAuth = useAppSelector((state) => state.auth.isAuth);
  const isAuth = localStorage.getItem('token');
  const authRedirect = () => {
    navigate(fromThisPage, { replace: true });
  };
  useEffect(() => {
    if (isAuth) {
      authRedirect();
    }
  }, [isAuth, fromThisPage]);

  return { authRedirect };
}
