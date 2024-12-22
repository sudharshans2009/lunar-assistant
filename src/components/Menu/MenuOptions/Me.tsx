import React from 'react';
import { useTranslation } from 'react-i18next';

import AboutIcon from '@icon/AboutIcon';

const Me = () => {
  const { t } = useTranslation();
  return (
    <a
      className='flex py-2 px-2 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
      href='https://itproject2023.repl.co'
      target='_blank'
    >
      <AboutIcon />
      {t('author')}
    </a>
  );
};

export default Me;
