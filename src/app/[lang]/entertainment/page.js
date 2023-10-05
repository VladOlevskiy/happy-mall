import React from 'react';
import { getDictionary } from '../../../../getDictionary';

const Entertainment = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return <div>Entertainment</div>;
};

export default Entertainment;
