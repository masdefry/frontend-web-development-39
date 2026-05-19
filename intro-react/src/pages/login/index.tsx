import { Link } from 'react-router-dom';
import Button from '../../components/Button';


export default function LoginPage() {
  return (
    <>
      <h1>Login Page</h1>
      <Button title='Submit Login' />

      <Link to='/profile-user'>Go to Profile Page</Link>

      {/* <a href='/profile-user'>Go to Profile Page</a> */}
    </>
  );
}
