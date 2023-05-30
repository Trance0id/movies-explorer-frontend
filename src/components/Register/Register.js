import { REGISTER_PAGE_DATA } from '../../utils/constants';
import Auth from '../Auth/Auth';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const onRegister = (e) => {
    e.preventDefault();
    navigate('/signin', { replace: true });
  }
  return (
    <main className='auth'>
      <Auth {...REGISTER_PAGE_DATA} onFormSubmit={onRegister}  />
    </main>
  );
};
