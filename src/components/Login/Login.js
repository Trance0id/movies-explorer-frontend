import { LOGIN_PAGE_DATA } from '../../utils/constants';
import Auth from '../Auth/Auth';

export default function Login() {
  return (
    <Auth {...LOGIN_PAGE_DATA} />
  );
};
