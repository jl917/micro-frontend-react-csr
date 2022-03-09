import React from 'react';
import Logo from '@/ui/atoms/Logo';
import Nav from '@/ui/atoms/Nav';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <Logo />
        <div className="flex flex-col justify-between mt-6">
          <aside>
            <Nav />
          </aside>
        </div>
      </div>
      <div className="w-full h-full p-4 m-8 overflow-y-auto">
        <div className="flex items-center justify-center p-40 border-4 border-dotted" id="container">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;
