import { REGISTER_PAGE_DATA } from '../../utils/constants';
import Auth from '../Auth/Auth';

export default function Register() {
  return (
    <Auth {...REGISTER_PAGE_DATA} />
  );
};
