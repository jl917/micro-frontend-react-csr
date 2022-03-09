export const moduleLoader = ({ id, component, dom, appContainer }: IModuleInfo) => {
  // devModeRun(id);
  if (!window.mfModule[id]) {
    window.mfModule[id] = {
      mount: () => {
        dom.render(
          component,
          document.querySelector(appContainer as string),
        );
      },
      unmount: () => {
        try {
          dom.unmountComponentAtNode(document.querySelector(appContainer as string));
        }
        catch (error) {
          console.log('unmount error')
        }
      }
    }
  }
}