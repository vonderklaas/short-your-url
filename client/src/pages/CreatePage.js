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

  const pressHandler = async (e) => {
    if (e.key === 'Enter') {
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
    }
  };

  return (
    <div className='row'>
      <h2>Create</h2>
      <div className='col s8 offset-s2' style={{ paddingTop: '2rem' }}>
        <div>
          <label htmlFor='link'>Link</label>
          <input
            placeholder='Place your link'
            name='link'
            id='link'
            type='text'
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={pressHandler}
          />
        </div>
      </div>
    </div>
  );
};
