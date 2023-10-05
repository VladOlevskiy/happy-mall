import React from 'react';
import { getDictionary } from '../../../../getDictionary';

const Restaurants = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return <div>Restaurants</div>;
};

export default Restaurants;
