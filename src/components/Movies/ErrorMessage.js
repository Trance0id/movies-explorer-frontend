import './ErrorMessage.css';

export default function ErrorMessage({ errorText }) {
  return <div className='movies__error'>{errorText}</div>;
}
