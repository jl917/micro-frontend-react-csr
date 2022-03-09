import { useEffect, useRef } from 'react';

const targetNode: HTMLHeadElement = document.head;

const usePrevious = (prevMenu, menu) => {
  useEffect(() => {
    if(prevMenu){
      window.mfModule[prevMenu.id].unmount()
    }
    const element = document.createElement('script');
    element.setAttribute('src', menu?.entry || '');
    targetNode.appendChild(element);
    element.onload = () => {
      window.mfModule[menu.id].mount();
    }
  }, [menu.id])
  return []
};

export default usePrevious;