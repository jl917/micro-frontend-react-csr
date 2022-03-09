import { useEffect } from 'react';

const useHeadTriggerEffect = (nodeBucket: Set<HTMLElement>) => {
  useEffect(() => {
    // head 요소 모니터링
    const targetTypes: string[] = ['LINK', 'STYLE', 'SCRIPT'];
    const targetNode: HTMLHeadElement = document.head;
    const config: MutationObserverInit = { attributes: true, childList: true, subtree: true };
    const callback: MutationCallback = (mutationsList) => {
      // eslint-disable-next-line
      for (const { addedNodes } of mutationsList) {
        if (addedNodes[0] && targetTypes.includes(addedNodes[0].nodeName)) {
          nodeBucket.add(addedNodes[0] as HTMLElement);
        }
      }
    };
    const observer: MutationObserver = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }, [nodeBucket]);
};

export default useHeadTriggerEffect;