import React, { useEffect } from 'react';
import usePrevious from '@/hooks/usePrevious';
import useMountModule from '@/hooks/useMountModule';
import useClearHead from '@/hooks/useClearHead';
import useHeadTrigger from '@/hooks/useHeadTrigger';

interface Props {
  menu: IMenu;
}

const nodeBucket = new Set();

const Core: React.FC<Props> = ({ menu }) => {
  const prevMenu = usePrevious(menu);

  useClearHead(nodeBucket); // 페이지 이동할떄 이전 프로젝트 버켓 지우기
  useHeadTrigger(nodeBucket); // head 모니터링(진입시 1회만 실행)
  useMountModule(prevMenu, menu);

  return (
    <div>loading</div>
  )
}

export default Core;
