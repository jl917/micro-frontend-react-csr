import React from 'react';
import usePrevious from '@/hooks/usePrevious';
import useModuleEffect from '@/hooks/useModuleEffect';
import useClearHeadEffect from '@/hooks/useClearHeadEffect';
import useHeadTriggerEffect from '@/hooks/useHeadTriggerEffect';

interface Props {
  menu: IMenu;
}

const nodeBucket = new Set<HTMLElement>();

const Core: React.FC<Props> = ({ menu }) => {
  const prevMenu = usePrevious(menu);

  useClearHeadEffect(nodeBucket); // 페이지 이동할떄 이전 프로젝트 버켓 지우기
  useHeadTriggerEffect(nodeBucket); // head 모니터링(진입시 1회만 실행)
  useModuleEffect(prevMenu, menu);

  return (
    <></>
  )
}

export default Core;
