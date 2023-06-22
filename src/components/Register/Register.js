import { REGISTER_PAGE_DATA } from '../../utils/constants';
import Auth from '../Auth/Auth';

export default function Register({ onFormSubmit, formIsLoading, error }) {
  return (
    <main className='auth'>
      <Auth
        {...REGISTER_PAGE_DATA}
        onFormSubmit={onFormSubmit}
        formIsLoading={formIsLoading}
        error={error}
      />
    </main>
  );
}
