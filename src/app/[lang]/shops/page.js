import React from 'react';
import { getDictionary } from '../../../../getDictionary';

const Shops = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return <div>Shops</div>;
};

export default Shops;
