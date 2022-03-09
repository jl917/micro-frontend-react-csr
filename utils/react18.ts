export const moduleLoader = ({ id, instance, component }: IModuleInfo) => {
  // devModeRun(id);
  if (!window.mfModule[id]) {
    window.mfModule[id] = {
      mount: () => {
        instance.render(component);
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
  }
}