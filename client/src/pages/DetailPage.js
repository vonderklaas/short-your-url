import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { AuthContext } from '../context/AuthContext';
import { useHTTP } from '../hooks/useHTTP';
import { LinkCard } from '../components/LinkCard';

export const DetailPage = () => {
  const { token } = useContext(AuthContext);
  const { request, loading } = useHTTP();
  const [link, setLink] = useState(null);
  const linkId = useParams().id;

  const getLink = useCallback(async () => {
    try {
      const fetchedLink = await request(`/api/link/${linkId}`, 'GET', null, {
        Authorization: `Bearer ${token}`,
      });
      setLink(fetchedLink);
    } catch (error) {}
  }, [token, linkId, request]);

  useEffect(() => {
    getLink();
  }, [getLink]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h1>DetailPage</h1>
      <div>{!loading && link && <LinkCard link={link} />}</div>
    </>
  );
};
