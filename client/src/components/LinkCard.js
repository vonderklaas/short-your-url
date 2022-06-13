import React from 'react';

export const LinkCard = ({ link }) => {
  console.log(link);
  return (
    <div>
      <h3>Results</h3>
      <p>
        Shortened:{' '}
        <a target='_blank' rel='noopener noreferrer' href={link.to}>
          {link.to.split('5000')[1]}
        </a>
      </p>
      <p>
        Original:{' '}
        <a target='_blank' rel='noopener noreferrer' href={link.from}>
          {link.from}
        </a>
      </p>
      <p>
        Link clicks: <strong>{link.clicks}</strong>
      </p>
      <p>
        Date: <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </div>
  );
};
