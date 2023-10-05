import React from 'react';
import { getDictionary } from '../../../../getDictionary';

const Services = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return <div>Services</div>;
};

export default Services;
