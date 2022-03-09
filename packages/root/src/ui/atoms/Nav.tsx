import React, { useMemo } from 'react';
import NavData from '@/mock/nav.json';
import { Link, useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
  const location = useLocation();

  return (
    <ul>
      {
        NavData.menus.map(menu => (
          <li key={menu.id}>
            <Link className={`flex items-center px-4 py-2 text-gray-700 rounded-md ${location.pathname === menu.path && 'bg-gray-100'}`} to={menu.path}>
              <span className="mx-4 font-medium">{menu.name}</span>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default Nav;
