import React, { useMemo } from 'react';
import nav from '@/mock/nav.json';
import { useLocation } from 'react-router-dom';
import Layout from '../templates/Layout';
import Core from '../oganisms/Core';
import Page404 from '../atoms/Page404';

const Page: React.FC = () => {
  const location = useLocation();
  const is404 = useMemo(() => !nav.menus.some(menu => menu.path === location.pathname), [location.pathname]);
  const currentMenu = useMemo(() => nav.menus.find(menu => menu.path === location.pathname), [location.pathname]);
  return (
    <Layout>
      {
        is404 ? <Page404 /> : <Core menu={currentMenu as IMenu} />
      }
    </Layout>
  );
}

export default Page;
