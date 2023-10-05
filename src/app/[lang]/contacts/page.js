import React from 'react';
import { getDictionary } from '../../../../getDictionary';

const Contacts = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return <div>Contacts</div>;
};

export default Contacts;
