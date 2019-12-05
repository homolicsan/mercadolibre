import { h, render } from 'preact'
import { Provider } from 'unistore/preact'
import {App} from './App'
import createStore from './store/store'

const app = document.getElementById('searchbox');

if (app){
  const store = createStore({
    suggested_queries: [ 
    ],

    q : '',
    value : ''
  });

  render(
    <Provider store={store}>
        <App />
    </Provider>,
    app,
    app.lastChild
  )

}

