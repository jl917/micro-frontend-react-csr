export const devModeRun = (id: string) => {
  // 개발환경일 경우 실행
  if (!window.mfModule) {
    window.mfModule = {};
    setTimeout(() => {
      window.mfModule[id]?.mount()
    }, 0);
  }
}

export const appContainer = '#container';