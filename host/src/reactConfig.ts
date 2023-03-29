import { h } from "vue";

import React from "react";
import ReactDOM from "react-dom/client";

export function defineReactComponent({
  component,
  ...options
}: {
  component: Parameters<typeof React.createElement>[0];
}) {
  return {
    ...options,
    setup(props: React.Attributes) {
      let app: ReactDOM.Root | null = null;

      return () =>
        h("div", {
          onVnodeMounted({ el }) {
            app = ReactDOM.createRoot(el as Element | DocumentFragment);
            app.render(React.createElement(component, props));
          },
          onVnodeBeforeUnmount() {
            app?.unmount();
            app = null;
          },
        });
    },
  };
}
