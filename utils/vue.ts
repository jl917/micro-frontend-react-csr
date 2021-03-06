export const moduleLoader = ({ id, instance, appContainer }: IModuleInfo) => {
  let vueInstance: any;
  // devModeRun(id);
  if (!window.mfModule[id]) {
    window.mfModule[id] = {
      mount: () => {
        vueInstance = instance.$mount(appContainer);
      },
      unmount: () => {
        try {
          vueInstance.$destroy();
          vueInstance.$el.innerHTML = '';
          vueInstance = null;
        }
        catch (error) {
          console.log('unmount error')
        }

      }
    }
  };
}