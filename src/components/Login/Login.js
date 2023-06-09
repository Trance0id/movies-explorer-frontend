import { LOGIN_PAGE_DATA } from '../../utils/constants';
import Auth from '../Auth/Auth';

export default function Login({ onFormSubmit, formIsLoading, error, loggedIn }) {
  return (
    <main className='auth'>
      <Auth
        {...LOGIN_PAGE_DATA}
        onFormSubmit={onFormSubmit}
        formIsLoading={formIsLoading}
        error={error}
        loggedIn={loggedIn}
      />
    </main>
  );
}
