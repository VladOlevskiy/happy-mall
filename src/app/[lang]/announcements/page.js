import React from 'react';
import { getDictionary } from '../../../../getDictionary';

const Announcements = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return <div>Announcements</div>;
};

export default Announcements;
