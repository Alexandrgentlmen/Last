import { Navigate, useLocation } from 'react-router-dom';
import { routes } from '~/router/';
import { useAppSelector } from '~/store/hooks';

interface RequireProps {
  children?: React.ReactNode;
}

export const RequireAuth = ({ children }: RequireProps) => {
  const location = useLocation();
  // const isAuth = useAppSelector((state) => state.auth.isAuth);
  const isAuth = false;
  if (!isAuth) {
    return <Navigate to={routes.LOGIN_PAGE} state={{ from: location }} />;
  }

  return children;
};
