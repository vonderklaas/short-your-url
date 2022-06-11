import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Loader } from '../components/Loader';
import { AuthContext } from '../context/AuthContext';
import { useHTTP } from '../hooks/useHTTP';
import { LinkList } from '../components/LinksList';

export const LinksPage = () => {
  const [links, setLinks] = useState([]);
  const { request, loading } = useHTTP();
  const { token } = useContext(AuthContext);

  const fetchLinks = useCallback(async () => {
    try {
      const fetchedLinks = await request('/api/link', 'GET', null, {
        Authorization: `Bearer ${token}`,
      });
      setLinks(fetchedLinks);
    } catch (error) {}
  }, [token, request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>LinksPage</h1>
      <div>{!loading && <LinkList links={links} />}</div>
    </div>
  );
};
