import React from 'react';
import { getDictionary } from '../../../../getDictionary';

const MallMap = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return <div>MallMap</div>;
};

export default MallMap;
