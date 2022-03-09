import { appContainer, devModeRun } from './common';

export const moduleLoader: IModuleLoader = (id, component, ReactDom) => {
  // devModeRun(id);
  window.mfModule[id] = {
    mount: () => {
      ReactDom.render(
        component,
        document.querySelector(appContainer),
      );
    },
    unmount: () => {
      try{
        ReactDom.unmountComponentAtNode(document.querySelector(appContainer));
      }
      catch(error){
        console.log('unmount error')
      }
    }
  }
}