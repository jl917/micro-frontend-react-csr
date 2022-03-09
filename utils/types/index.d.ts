interface Window {
  mfModule: {
    [key: string]: IMfModule;
  };
}

interface IMfModule {
  mount: Function;
  unmount: Function;
}

interface IModuleInfo {
  id: string;
  instance?: any;
  component?: any;
  uif: 'react' | 'vue' | 'vue3' | 'react18';
  appContainer?: string;
  dom?: any;
}
