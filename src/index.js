import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Main } from '@1hive/1hive-ui'

import App from './App'
import MainView from './components/MainView'
import { WalletProvider } from './providers/Wallet'
import { AppStateProvider } from './providers/AppState'

ReactDOM.render(
  <WalletProvider>
    <AppStateProvider>
      <Main assetsUrl="/aragon-ui/" layout={false}>
        <BrowserRouter>
          <MainView>
            <App />
          </MainView>
        </BrowserRouter>
      </Main>
    </AppStateProvider>
  </WalletProvider>,
  document.getElementById('root')
)
