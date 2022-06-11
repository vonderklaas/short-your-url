import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHTTP } from '../hooks/useHTTP';
import { useMessage } from '../hooks/useMessage';

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, request, clearError } = useHTTP();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    console.log('Error:', error);
    message(error);
    clearError();
  }, [error, message, clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      message(data.message);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      message(data.message);
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <>
      <h2>URL Shortener</h2>
      <div>
        <div>
          <br />
          <h5>Authorization</h5>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              placeholder='Enter email'
              name='email'
              id='email'
              type='email'
              value={form.email}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label disabled={loading} htmlFor='password'>
              Password
            </label>
            <input
              placeholder='Enter password'
              name='password'
              id='password'
              type='password'
              value={form.password}
              onChange={changeHandler}
            />
          </div>
        </div>
        <br />
        <div>
          <button disabled={loading} onClick={loginHandler}>
            Login
          </button>
          <button disabled={loading} onClick={registerHandler}>
            Register
          </button>
        </div>
      </div>
    </>
  );
};