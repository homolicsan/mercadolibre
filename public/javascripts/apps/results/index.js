import { h, render } from 'preact'
import { Provider } from 'unistore/preact'
import {App} from './App'
import createStore from './store/store'

const main = () => {
  const store = createStore(window.__STATE__)

  const app = document.getElementById('app')

  render(
    <Provider store={store}>
        <App />
    </Provider>,
    app,
    app.lastChild
  )
}

// Update Store
if( window.ML.ajaxReady ){
  main();
}
else{
  document.addEventListener( 'ajaxReady', main)
}
