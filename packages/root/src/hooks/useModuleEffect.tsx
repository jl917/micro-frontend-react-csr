import { useEffect } from 'react';

const targetNode: HTMLHeadElement = document.head;

const useModuleEffect = (prevMenu: IMenu | undefined, menu: IMenu) => {
  useEffect(() => {
    if (prevMenu) {
      window.mfModule[prevMenu.id].unmount();
      delete window.mfModule[prevMenu.id];
    }
    const element = document.createElement('script');
    element.setAttribute('src', menu.entry || '');
    targetNode.appendChild(element);
    element.onload = () => {
      window.mfModule[menu.id].mount();
    }
  }, [menu.id])
};

export default useModuleEffect;