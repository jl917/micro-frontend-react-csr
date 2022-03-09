import { useEffect } from 'react';

const useClearHeadEffect = (nodeBucket: Set<HTMLElement>) => {
  useEffect(() => () => {
    const targetNode: HTMLHeadElement = document.head;
    nodeBucket.forEach((e): void => {
      try {
        targetNode.removeChild(e);
      } catch (error) {
        console.log('노드가 존재하지 않습니다.');
      }
    });
    nodeBucket.clear();
  });
};

export default useClearHeadEffect;