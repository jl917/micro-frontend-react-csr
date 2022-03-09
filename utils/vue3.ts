export const moduleLoader = ({ id, instance, appContainer }: IModuleInfo) => {
  // devModeRun(id);
  if (!window.mfModule[id]) {
    window.mfModule[id] = {
      mount: () => {
        instance.mount(appContainer);
      },
      unmount: () => {
        try {
          instance.unmount();
        }
        catch (error) {
          console.log('unmount error')
        }
      }
    }
  };
}