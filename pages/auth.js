import { verify } from 'crypto';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const verifyAsync = promisify(jwt.verify);



function auth() {
  // const router = useRouter();

  // const user = {
  //   id: 1234,
  //   name: 'John Doe',
  //   email: 'john.doe@example.com'
  // };
  
  // const secret = 'mysecretkey';
  
  // const token = jwt.sign(user, secret, { expiresIn: '1h' });
  
  // try {
  //   const decodedToken = verify(token, secret);
  //   console.log(decodedToken);
  // } catch (err) {
  //   console.log(err);
  // }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sessionToken = sessionStorage.getItem('token');
      if (!sessionToken) {
        router.push('/login');
      }
    }
  }, []);

  return (
    <></>
  );
}

export default auth;