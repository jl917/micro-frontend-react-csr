interface Window {
  mfModule: {
    [key: string]: IMfModule;
  };
}

interface IMfModule {
  mount: Function;
  unmount: Function;
}
interface IModuleLoader {
  (id: string, component: any, dom?: any): void;
}