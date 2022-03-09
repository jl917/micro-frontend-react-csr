import { useEffect } from 'react';

const useClearHead = (nodeBucket: Set<any>) => {
  useEffect(() => () => {
    const targetNode = document.head as HTMLHeadElement;
    nodeBucket.forEach((e): void => {
      try {
        targetNode.removeChild(e as HTMLElement);
      } catch (error) {
        console.log('노드가 존재하지 않습니다.');
      }
    });
    nodeBucket.clear();
  });
};

export default useClearHead;