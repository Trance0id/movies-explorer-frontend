import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  // console.log(props.loggedIn);
  return props.loggedIn ? <Component {...props} /> : <Navigate to='/' replace />;
};

export default ProtectedRoute;
