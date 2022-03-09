import { moduleLoader as reactModuleLoader } from './react';
import { moduleLoader as react18ModuleLoader } from './react18';
import { moduleLoader as vueModuleLoader } from './vue';
import { moduleLoader as vue3ModuleLoader } from './vue3';

window.mfModule = window.mfModule || {}

const map = {
  react: reactModuleLoader,
  vue: vueModuleLoader,
  vue3: vue3ModuleLoader,
  react18: react18ModuleLoader,
}

const moduleLoader = (moduleInfo: IModuleInfo) => {
  if (!moduleInfo.appContainer) {
    moduleInfo.appContainer = '#container';
  }
  map[moduleInfo.uif](moduleInfo)
};

export {
  moduleLoader,
}