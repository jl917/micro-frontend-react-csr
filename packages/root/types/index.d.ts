interface IMenu{
    id: string;
    name: string;
    path: string;
    entry?: string;
}

interface Window {
    mfModule: {
      [key: string]: IMfModule;
    };
  }
  
  interface IMfModule {
    mount: Function;
    unmount: Function;
  }