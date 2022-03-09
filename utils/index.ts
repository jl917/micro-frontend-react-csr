import { moduleLoader as reactModuleLoader } from './react';
import { moduleLoader as vueModuleLoader } from './vue';

window.mfModule = window.mfModule || {}

const moduleLoader: IModuleLoader = (id, component, dom) => {
  // vue모듈로더
  if (component._isVue) {
    vueModuleLoader(id, component);
  }
  // react모듈로더
  if (dom) {
    reactModuleLoader(id, component, dom);
  }
}

export {
  moduleLoader,
}