import React from 'react';
import { Link } from 'react-router-dom';

export const LinkList = ({ links }) => {
  console.log(links);
  if (!links.length) {
    return <p className='center'>No links yet, try adding some</p>;
  }

  return (
    <>
      <h3>Links</h3>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Original</th>
            <th>Shortened</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {links.map((link, index) => {
            return (
              <tr key={link._id}>
                <td>{index + 1}</td>
                <td>{link.from}</td>
                <td>
                  <a target='_blank' rel='noopener noreferrer' href={link.to}>
                    {link.to.split('5000')[1]}
                  </a>
                </td>
                <td>
                  <Link to={`/detail/${link._id}`}>...</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
