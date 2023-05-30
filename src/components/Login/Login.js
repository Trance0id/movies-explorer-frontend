import { LOGIN_PAGE_DATA } from '../../utils/constants';
import Auth from '../Auth/Auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const onLogin = (e) => {
    e.preventDefault();
    navigate('/movies', { replace: true });
  }
return (
  <main className='auth'>
    <Auth {...LOGIN_PAGE_DATA} onFormSubmit={onLogin} />
  </main>
  );
};
