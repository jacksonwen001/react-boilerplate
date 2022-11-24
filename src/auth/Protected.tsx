import { Navigate } from 'react-router-dom';
import { useAuth } from './auth';

const Protected = ({ children }: any) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Protected;
