import React, { useEffect, useState } from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { BsFacebook } from 'react-icons/bs';
import { AppContext } from '../../context/StateContext';
import { useNavigate } from 'react-router-dom';

function LoginFacebook2() {
  const { userResponse, setUserResponse, facebookResponse, setFacebookResponse, error, setError } = AppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (userResponse) {
      navigate('/');
    }
  }, [userResponse]);

  const handleFacebookResponse = (response) => {
    if (response.accessToken) {
      setFacebookResponse(response);

      fetch(`https://graph.facebook.com/v13.0/me?fields=id,email,first_name,last_name,picture&access_token=${response.accessToken}`)
        .then(response => response.json())
        .then(data => {
          setUserResponse(data);
          console.log('Facebook profile data:', data);
        })
        .catch(error => {
          setError(error);
          console.log('Error getting Facebook profile data:', error);
        });
    } else {
      setError('Could not authenticate with Facebook.');
      console.log('Could not authenticate with Facebook.');
    }
  };

  return (
    <div className=''>
      <FacebookLogin
        appId='867570441004969'
        children={
          <div className='flex flex-row items-center'>
            <BsFacebook className='text-xl mr-3' />
            Facebook Login
          </div>
        }
        onSuccess={handleFacebookResponse}
        onFail={error => {
          setError(error);
          console.log('Login Failed!', error);
        }}
        className='bg-blue-600 py-4 px-6 rounded-lg'
      />
      {error ? (
        <p className='flex flex-row items-center justify-center mt-4'>Ocurrio un error</p>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default LoginFacebook2;
