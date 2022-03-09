import { appContainer, devModeRun } from './common';

export const moduleLoader: IModuleLoader = (id, component) => {
  let instance: any;
  // devModeRun(id);

  window.mfModule[id] = {
    mount: () => {
      instance = component.$mount(appContainer);
    },
    unmount: () => {
      instance.$destroy();
      instance.$el.innerHTML = '';
      instance = null;
    }
  }
}