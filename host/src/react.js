import { h } from 'vue'

import React from 'react'
import ReactDOM from 'react-dom/client'

export function defineReactComponent({ component, ...options }) {
  return {
    ...options,
    setup(props) {
      let app = null

      return () => h('div', {
        onVnodeMounted({ el }) {
          app = ReactDOM.createRoot(el)
          app.render(React.createElement(component, props))
        },
        onVnodeBeforeUnmount() {
          app.unmount()
          app = null
        }
      })
    }
  }
}
