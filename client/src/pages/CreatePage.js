import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHTTP } from '../hooks/useHTTP';

import { useNavigate } from 'react-router-dom';

export const CreatePage = () => {
  const { request } = useHTTP();
  const [link, setLink] = useState('');

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  useEffect(() => {
    console.log(isUrl(link));
  }, [link]);

  const isUrl = (string) => {
    try {
      return Boolean(new URL(string));
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    const data = await request(
      '/api/link/generate',
      'POST',
      { from: link },
      {
        Authorization: `Bearer ${auth.token}`,
      }
    );
    navigate(`/detail/${data.link._id}`, { replace: true });
    console.log(data);

    try {
    } catch (error) {}
  };

  return (
    <div className='row'>
      <h3>Paste the URL to be shortened</h3>
      <div className='col s8 offset-s2' style={{ paddingTop: '2rem' }}>
        <div>
          <label htmlFor='link'>URL</label>
          <input
            placeholder='Place your URL here'
            name='link'
            id='link'
            type='text'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button
            className='waves-effect waves-light btn-small'
            disabled={!isUrl(link)}
            onClick={handleSubmit}
          >
            Shorten URL
          </button>
        </div>
        {!isUrl(link) && <p>Please add a valid URL</p>}
      </div>
    </div>
  );
};
