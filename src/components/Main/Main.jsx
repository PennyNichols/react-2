import React from 'react';
import Card from '../Card/Card';
import data from '../../helper/data';

export const Main = () => {
  return (
    <div>
      {data.map((item, index) => (
        <Card key={index} title={item.name} desc={item.address.street} />
      ))}
    </div>
  );
};
