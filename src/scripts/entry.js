import React from 'react'

import { render, unmountComponentAtNode } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

const root = document.querySelector('#application-container')

const renderApp = () => {
  const Routes = require('./routes').default

  render(
    <AppContainer>
      {Routes}
    </AppContainer>,
    root
  )
}

renderApp()

if(module.hot) {
  module.hot.accept('./routes', () => {
    unmountComponentAtNode(root)
    renderApp()
  })
}
