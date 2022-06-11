import React from 'react';

export const LinkCard = ({ link }) => {
  console.log(link);
  return (
    <div>
      <h2>Link</h2>
      <p>
        Your link:{' '}
        <a target='_blank' rel='noopener noreferrer' href={link.to}>
          {link.to}
        </a>
      </p>
      <p>
        From:{' '}
        <a target='_blank' rel='noopener noreferrer' href={link.from}>
          {link.from}
        </a>
      </p>
      <p>
        Link clicks: <strong>{link.clicks}</strong>
      </p>
      <p>
        Date of creation:{' '}
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </div>
  );
};
